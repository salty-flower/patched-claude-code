import { expect, test } from "bun:test"
import { mergePlatformJavaScript } from "../lib/platform-merge"

test("merges supported platform literal drift with range splices", () => {
  const darwin = 'function a(){return "darwin"}\nconst b="macOS",c="arm64";\nfunction z(){return 1}\n'
  const linux = 'function x(){return "linux"}\nconst y="Linux",z="x64";\nfunction q(){return 1}\n'

  const result = mergePlatformJavaScript({
    version: "test",
    basePlatform: "darwin-arm64",
    baseSource: darwin,
    otherPlatform: "linux-x64",
    otherSource: linux,
  })

  expect(result.ok).toBe(true)
  expect(result.canonicalSource).toBe(
    'function a(){return process.platform==="darwin"?"darwin":"linux"}\n' +
      'const b=process.platform==="darwin"?"macOS":"Linux",c=process.arch==="arm64"?"arm64":"x64";\n' +
      "function z(){return 1}\n",
  )
  expect(result.report.counts.literalOnlyPlatformConstants).toBe(2)
  expect(result.report.counts.identical).toBe(1)
})

test("blocks unknown literal-only drift", () => {
  const result = mergePlatformJavaScript({
    version: "test",
    basePlatform: "darwin-arm64",
    baseSource: 'function a(){return "Darwin-only"}\n',
    otherPlatform: "linux-x64",
    otherSource: 'function x(){return "Linux-only"}\n',
  })

  expect(result.ok).toBe(false)
  expect(result.report.unclassifiedDrift).toEqual([
    expect.objectContaining({
      kind: "unknown-literal-pair",
      baseLiteral: "Darwin-only",
      otherLiteral: "Linux-only",
    }),
  ])
})

test("rewrites structural drift into a runtime platform union", () => {
  const result = mergePlatformJavaScript({
    version: "test",
    basePlatform: "darwin-arm64",
    baseSource: "function same(){return 1}\nfunction darwinOnly(){return process.platform}\n",
    otherPlatform: "linux-x64",
    otherSource: "function same(){return 1}\nfunction linuxOnly(){if(process.platform)return 2}\n",
  })

  expect(result.ok).toBe(true)
  expect(result.canonicalSource).toContain("function __acc_darwin_darwinOnly(){return process.platform}")
  expect(result.canonicalSource).toContain("function __acc_linux_darwinOnly(){if(process.platform)return 2}")
  expect(result.canonicalSource).toContain(
    'var darwinOnly=process.platform==="darwin"?__acc_darwin_darwinOnly:__acc_linux_darwinOnly;',
  )
  expect(result.report.semanticUnions).toEqual([
    expect.objectContaining({
      kind: "structural-drift",
      baseIndex: 1,
      otherIndex: 1,
    }),
  ])
  expect(result.report.unclassifiedDrift).toEqual([])
})

test("rewrites platform-only declarations into runtime platform unions", () => {
  const result = mergePlatformJavaScript({
    version: "test",
    basePlatform: "darwin-arm64",
    baseSource: 'function same(){return 1}\nfunction onlyDarwin(){return "darwin"}\nfunction after(){return 3}\n',
    otherPlatform: "linux-x64",
    otherSource: 'function same(){return 1}\nfunction onlyLinux(){if(1)return "linux"}\nfunction after(){return 3}\n',
  })

  expect(result.ok).toBe(true)
  expect(result.canonicalSource).toContain("function __acc_darwin_onlyDarwin()")
  expect(result.canonicalSource).toContain("function __acc_linux_onlyDarwin()")
  expect(result.canonicalSource).toContain(
    'var onlyDarwin=process.platform==="darwin"?__acc_darwin_onlyDarwin:__acc_linux_onlyDarwin;',
  )
  expect(result.report.semanticUnions).toEqual([
    expect.objectContaining({
      kind: "structural-drift",
    }),
  ])
})

test("generalizes unknown string literal branches without accepting drift", () => {
  const result = mergePlatformJavaScript({
    version: "test",
    basePlatform: "darwin-arm64",
    baseSource: 'function open(){return "open"}\n',
    otherPlatform: "linux-x64",
    otherSource: 'function xdg(){return "xdg-open"}\n',
    generalizeUnknownStringLiterals: true,
  })

  expect(result.ok).toBe(true)
  expect(result.canonicalSource).toContain('process.platform==="darwin"?"open":"xdg-open"')
  expect(result.report.acceptedDrift).toEqual([])
})

test("keeps exact literal declarations aligned across platform-only loader islands", () => {
  const darwin =
    'var a=require("image-processor.node");\n' +
    'var b=require("computer-use-swift.node");\n' +
    'var c=require("computer-use-input.node");\n' +
    'var d=require("audio-capture.node");\n' +
    "function same(){return 1}\n"
  const linux =
    'var x=require("image-processor.node");\n' +
    'var y=require("audio-capture.node");\n' +
    "function q(){return 1}\n"

  const result = mergePlatformJavaScript({
    version: "test",
    basePlatform: "darwin-arm64",
    baseSource: darwin,
    otherPlatform: "linux-x64",
    otherSource: linux,
  })

  expect(result.report.unclassifiedDrift).not.toContainEqual(
    expect.objectContaining({
      kind: "unknown-literal-pair",
      baseLiteral: "computer-use-swift.node",
      otherLiteral: "audio-capture.node",
    }),
  )
  expect(result.report.counts.baseOnlyIslands).toBe(2)
  expect(result.report.counts.identical).toBe(3)
})

test("rewrites free identifiers without rewriting local bindings or property keys", () => {
  const result = mergePlatformJavaScript({
    version: "test",
    basePlatform: "darwin-arm64",
    baseSource:
      "function dep(){return 1}\n" +
      "function entry(){let local=dep();return {local,prop:dep(),method(){return local}}}\n",
    otherPlatform: "linux-x64",
    otherSource:
      "function x(){return 1}\n" +
      "function y(){let x=2;return {x,prop:x,method(){return x}}}\n",
  })

  expect(result.ok).toBe(true)
  expect(result.canonicalSource).toContain("function __acc_linux_entry(){let x=2;return {x,prop:x,method(){return x}}}")
  expect(result.canonicalSource).not.toContain("let dep=2")
})

test("rewrites outer free identifiers even when an inner block shadows the same minified name", () => {
  const result = mergePlatformJavaScript({
    version: "test",
    basePlatform: "darwin-arm64",
    baseSource: "function dep(){return 1}\nfunction entry(){return dep()}\n",
    otherPlatform: "linux-x64",
    otherSource: "function x(){return 1}\nfunction y(){let out=x();{let x=2;out+=x}return out}\n",
  })

  expect(result.ok).toBe(true)
  expect(result.canonicalSource).toContain("function __acc_linux_entry(){let out=dep();{let x=2;out+=x}return out}")
})

test("preserves canonical state aliases inside platform-specific initializers", () => {
  const result = mergePlatformJavaScript({
    version: "test",
    basePlatform: "darwin-arm64",
    baseSource:
      "function Z(fn){return fn}\nfunction make(){return 1}\nfunction getTerminal(){return 'x'}\nfunction isIde(value){return Boolean(value)}\n" +
      "var helper,state;\n" +
      "var init=Z(()=>{helper=make();state={terminal:getTerminal(),helper}});\n" +
      "var isSupported=Z(()=>{return isIde(state.terminal)});\n",
    otherPlatform: "linux-x64",
    otherSource:
      "function Z(fn){return fn}\nfunction make(){return 1}\nfunction getTerminal(){return 'x'}\nfunction isIde(value){return Boolean(value)}\n" +
      "var fs,linuxHelper,linuxState;\n" +
      'var init=Z(()=>{fs=require("fs");linuxHelper=make();linuxState={terminal:getTerminal(),helper:linuxHelper}});\n' +
      "var isSupported=Z(()=>{return isIde(linuxState.terminal)});\n",
  })

  expect(result.ok).toBe(true)
  expect(result.canonicalSource).toContain("state")
  expect(result.canonicalSource).toContain('var init=process.platform==="darwin"?__acc_darwin_init:__acc_linux_init;')
  expect(result.canonicalSource).toContain(
    'var __acc_linux_init=Z(()=>{__acc_linux_fs=require("fs");__acc_linux_linuxHelper=make();state={terminal:getTerminal(),helper:__acc_linux_linuxHelper}});',
  )
  expect(result.canonicalSource).not.toContain("__acc_linux_linuxState={")
})

test("reports semantic union validation failures for unresolved free identifiers", () => {
  const result = mergePlatformJavaScript({
    version: "test",
    basePlatform: "darwin-arm64",
    baseSource: "function entry(){return 1}\n",
    otherPlatform: "linux-x64",
    otherSource: "function y(){return missingLinuxHelper()}\n",
  })

  expect(result.ok).toBe(false)
  expect(result.report.unclassifiedDrift).toEqual([
    expect.objectContaining({
      kind: "unresolved-free-identifier",
      name: "missingLinuxHelper",
    }),
  ])
})

test("does not report catch bindings or optional member names as free identifiers", () => {
  const result = mergePlatformJavaScript({
    version: "test",
    basePlatform: "darwin-arm64",
    baseSource: "function dep(){return {darwin:1}}\nfunction entry(){try{return dep()?.darwin}catch(err){return err}}\n",
    otherPlatform: "linux-x64",
    otherSource: "function dep(){return {linux:1}}\nfunction y(){try{return dep()?.linux}catch(error){return error}}\n",
  })

  expect(result.ok).toBe(true)
  expect(result.report.unclassifiedDrift).toEqual([])
})
