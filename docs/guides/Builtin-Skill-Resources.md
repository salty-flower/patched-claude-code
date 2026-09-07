# Auditing Built-in Skill Resources

## Prompts versus embedded files

Built-in skills ship inside the Claude Code bundle; they do not require a user-installed skill directory.
Audit their auxiliary scripts and templates as data, never by importing a skill exporter or executing a script.
The existing prompt catalog remains the authority for prompt lineage and runtime-expression gaps.

| Artifact | Scope |
| --- | --- |
| `staging/<version>/builtin-skill-resources/manifest.json` | Static resource map emitted automatically by dual-graph staging. |
| `staging/<version>/builtin-skill-resources/files/<platform>/<exporter>/<logical-path>` | Readable UTF-8 resource bytes, including script sources and templates. |
| `prompts/builtin-skills/` in release archives and source tags | The same audited resources, bound by `manifest.json` → `builtinSkillResources.sha256`. |
| `$out/share/patched-claude-code/prompts/builtin-skills/` | Installed Nix package audit copy. |

Each entry records its exporter chunk, exported map, logical path, asset path, runtime sidecar path,
loader, upstream encoding/hash, and materialized UTF-8 byte count/hash.
Exporter chunks identify bundle locations, not stable skill names or activation gates.
Runtime sidecars are recorded once with their original asset, not duplicated as separate resources.

## Acceptance gates

- Resolve named `SKILL_FILES`, `SKILL_PROMPT`, `SKILL_MD`, and `SKILL_COMPOSED_MD` exports statically.
  Follow local aliases, imported bindings, nested resource maps, default-export wrappers,
  and Bun's one-assignment CommonJS text wrappers without executing upstream code.
- Treat unknown mappings as explicit gaps; staging and packaging reject unresolved gaps.
- Verify materialized resources and runtime sidecars against the graph inventory.
  Packaging must also compare each audited resource with the rendered graph.
- Preserve decoded source text as UTF-8, with native raw hashes and encodings recorded separately.
  Do not apply model-variable substitutions or execute template transforms during audit.
- Review newly added scripts and templates on target bumps, alongside the prompt review.
  Logical paths support cross-version comparison when chunk filenames change.
- Keep this inventory explicitly partial: differently named exports and runtime-generated resources are outside its static detector.

Loader preservation is governed by [Native Bundle Extraction](../rules/Native-Bundle-Extraction.md).
