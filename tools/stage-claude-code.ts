#!/usr/bin/env bun
// Download a Claude Code release and stage its JS bundle at staging/<version>/cli.js.
//
// Supports both old npm packages that ship package/cli.js and current native
// wrapper packages that ship platform optional Bun standalone binaries.

import {
  copyFileSync,
  existsSync,
  mkdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { BUN_STANDALONE_LAYOUT_CONTRACT, extractStandalone } from "./extract-bun-standalone";

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..");
const REGISTRY = "https://registry.npmjs.org";
const PACKAGE = "@anthropic-ai/claude-code";

export const STAGING_SUPPORT_CONTRACT = {
  legacyWrapperCli: {
    knownGoodVersions: ["2.1.112"],
    condition: "package/cli.js exists in @anthropic-ai/claude-code tarball",
  },
  nativeBunStandalone: {
    knownGoodVersions: ["2.1.132"],
    provisionalRange: ">=2.1.132 <2.2.0",
    condition: "wrapper package declares a platform optional dependency with a Bun standalone binary",
    layoutContract: BUN_STANDALONE_LAYOUT_CONTRACT.name,
  },
} as const;

type PackageMeta = {
  "dist-tags": Record<string, string>;
  versions: Record<
    string,
    {
      version: string;
      dist: { tarball: string };
      optionalDependencies?: Record<string, string>;
    }
  >;
};

type Args = {
  version: string;
  platformPackage?: string;
  keepAll: boolean;
};

function parseArgs(argv: string[]): Args {
  const args: Args = { version: "latest", keepAll: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--platform-package") {
      args.platformPackage = argv[++i];
    } else if (arg === "--all") {
      args.keepAll = true;
    } else if (arg === "--help" || arg === "-h") {
      console.log("usage: bun run tools/stage-claude-code.ts [version|latest] [--platform-package <pkg>] [--all]");
      process.exit(0);
    } else {
      args.version = arg;
    }
  }
  return args;
}

async function registryJson<T>(packageName: string): Promise<T> {
  const encoded = packageName.replace("/", "%2f");
  const response = await fetch(`${REGISTRY}/${encoded}`);
  if (!response.ok) {
    throw new Error(`registry fetch failed for ${packageName}: ${response.status} ${response.statusText}`);
  }
  return (await response.json()) as T;
}

async function download(url: string, output: string): Promise<void> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`download failed for ${url}: ${response.status} ${response.statusText}`);
  }
  mkdirSync(dirname(output), { recursive: true });
  await Bun.write(output, new Uint8Array(await response.arrayBuffer()));
}

function run(cmd: string[], cwd: string): void {
  const result = Bun.spawnSync({ cmd, cwd, stdout: "inherit", stderr: "inherit" });
  if (!result.success) {
    throw new Error(`command failed (${result.exitCode}): ${cmd.join(" ")}`);
  }
}

function currentPlatformPackage(optionalDependencies: Record<string, string> = {}): string {
  const cpu = process.arch === "x64" ? "x64" : process.arch === "arm64" ? "arm64" : process.arch;
  const key = `${process.platform}-${cpu}`;
  const muslKey = `${key}-musl`;
  const candidates =
    process.platform === "linux"
      ? [`${PACKAGE}-${muslKey}`, `${PACKAGE}-${key}`]
      : [`${PACKAGE}-${key}`];

  for (const candidate of candidates) {
    if (optionalDependencies[candidate]) return candidate;
  }
  throw new Error(`no native Claude Code package listed for ${key}`);
}

function findNativeBinary(extractedPackageDir: string): string {
  const candidates = [
    join(extractedPackageDir, "package", "claude"),
    join(extractedPackageDir, "package", "claude.exe"),
    join(extractedPackageDir, "package", "bin", "claude"),
    join(extractedPackageDir, "package", "bin", "claude.exe"),
  ];
  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) throw new Error(`native binary not found under ${extractedPackageDir}/package`);
  return found;
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  const meta = await registryJson<PackageMeta>(PACKAGE);
  const version = args.version === "latest" ? meta["dist-tags"].latest : args.version;
  const wrapper = meta.versions[version];
  if (!wrapper) throw new Error(`${PACKAGE}@${version} not found`);

  const stageDir = join(ROOT, "staging", version);
  const downloadsDir = join(stageDir, "downloads");
  const wrapperDir = join(stageDir, "wrapper");
  const nativeDir = join(stageDir, "native");
  const cliPath = join(stageDir, "cli.js");
  mkdirSync(stageDir, { recursive: true });
  rmSync(wrapperDir, { recursive: true, force: true });
  rmSync(nativeDir, { recursive: true, force: true });
  mkdirSync(downloadsDir, { recursive: true });

  const wrapperTgz = join(downloadsDir, "claude-code.tgz");
  await download(wrapper.dist.tarball, wrapperTgz);
  mkdirSync(wrapperDir, { recursive: true });
  run(["tar", "-xzf", wrapperTgz, "-C", wrapperDir], ROOT);

  const wrapperCli = join(wrapperDir, "package", "cli.js");
  let source: "wrapper-cli" | "native-bun-standalone";
  let platformPackage: string | undefined;
  let nativeTarball: string | undefined;
  let nativeBinary: string | undefined;

  if (existsSync(wrapperCli)) {
    copyFileSync(wrapperCli, cliPath);
    source = "wrapper-cli";
  } else {
    platformPackage = args.platformPackage ?? currentPlatformPackage(wrapper.optionalDependencies);
    const platformMeta = await registryJson<PackageMeta>(platformPackage);
    const platformVersion = platformMeta.versions[version];
    if (!platformVersion) throw new Error(`${platformPackage}@${version} not found`);

    nativeTarball = platformVersion.dist.tarball;
    const nativeTgz = join(downloadsDir, `${platformPackage.split("/").pop()}.tgz`);
    await download(nativeTarball, nativeTgz);
    mkdirSync(nativeDir, { recursive: true });
    run(["tar", "-xzf", nativeTgz, "-C", nativeDir], ROOT);

    nativeBinary = findNativeBinary(nativeDir);
    const graph = extractStandalone(new Uint8Array(await Bun.file(nativeBinary).arrayBuffer()));
    const entry = graph.files.find((file) => file.isEntrypoint);
    if (!entry) throw new Error("native standalone graph has no entrypoint");
    await Bun.write(cliPath, entry.contents);

    writeFileSync(
      join(stageDir, "bun-standalone-manifest.json"),
      JSON.stringify(
        {
          byteCount: graph.byteCount,
          payloadStart: graph.payloadStart,
          trailerOffset: graph.trailerOffset,
          entrypointId: graph.entrypointId,
          flags: graph.flags,
          files: graph.files.map((file) => ({
            path: file.path,
            rawPath: file.rawPath,
            bytes: file.contents.byteLength,
            isEntrypoint: file.isEntrypoint,
            loader: file.loader,
            moduleFormat: file.moduleFormat,
            side: file.side,
          })),
        },
        null,
        2,
      ) + "\n",
    );

    if (args.keepAll) {
      for (const file of graph.files) {
        const out = join(stageDir, "files", file.path);
        mkdirSync(dirname(out), { recursive: true });
        await Bun.write(out, file.contents);
      }
    }
    source = "native-bun-standalone";
  }

  const knownGoodVersions =
    source === "wrapper-cli"
      ? STAGING_SUPPORT_CONTRACT.legacyWrapperCli.knownGoodVersions
      : STAGING_SUPPORT_CONTRACT.nativeBunStandalone.knownGoodVersions;
  const knownGoodExtraction = (knownGoodVersions as readonly string[]).includes(version);
  if (!knownGoodExtraction) {
    console.error(`warning: staged ${version} is not listed as known-good in the extraction support contract`);
  }

  writeFileSync(
    join(stageDir, "stage-manifest.json"),
    JSON.stringify(
      {
        package: PACKAGE,
        version,
        source,
        wrapperTarball: wrapper.dist.tarball,
        platformPackage,
        nativeTarball,
        nativeBinary,
        cliPath,
        bytes: Bun.file(cliPath).size,
        extractionSupport: {
          knownGood: knownGoodExtraction,
          contract: STAGING_SUPPORT_CONTRACT,
          bunStandaloneLayout: source === "native-bun-standalone" ? BUN_STANDALONE_LAYOUT_CONTRACT : undefined,
        },
      },
      null,
      2,
    ) + "\n",
  );

  console.error(`staged ${PACKAGE}@${version} -> ${cliPath}`);
  return 0;
}

if (import.meta.main) {
  process.exit(await main());
}
