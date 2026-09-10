// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{M}from"./chunk-wmtek349.js";import{S,f}from"./chunk-qc0xda2j.js";import{v,Jr}from"./chunk-wkyng8j1.js";import{t}from"./chunk-w930ag8r.js";import{be}from"./chunk-3kadfzjs.js";import{Ce}from"./chunk-tfmhv9d3.js";import{Ga}from"./chunk-qymratxs.js";import{$e}from"./chunk-71dy1chz.js";import{kme}from"./chunk-qf7hvpby.js";import{Ge}from"./chunk-ja8knfm8.js";import{q2}from"./chunk-8z302wb3.js";import{cge}from"./chunk-c1qwyngg.js";import{promises as n}from"fs";import*as g from"os";import*as o from"path";var qtn="com.anthropic.claude-code-url-handler",p="Claude Code URL Handler",w="claude-code-url-handler.desktop",E="Claude Code URL Handler.app",c=o.join(g.homedir(),"Applications",E),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(cge(),"applications",w)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${q2}`,h=`${u}\\shell\\open\\command`,m=86400000;function k(e){return`Exec="${e}" --handle-uri %u`}function y(e){return`"${e}" --handle-uri "%1"`}async function P(e){let r=o.join(c,"Contents");try{await n.rm(c,{recursive:!0})}catch(s){if(v(s)!=="ENOENT")throw s}await n.mkdir(o.dirname(l),{recursive:!0});let i=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${qtn}</string>
  <key>CFBundleName</key>
  <string>${p}</string>
  <key>CFBundleExecutable</key>
  <string>claude</string>
  <key>CFBundleVersion</key>
  <string>1.0</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>LSBackgroundOnly</key>
  <true/>
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLName</key>
      <string>Claude Code Deep Link</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>${q2}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await n.writeFile(o.join(r,"Info.plist"),i),await n.symlink(e,l),await $e("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),t(`Registered ${q2}:// protocol handler at ${c}`)}async function D(e){await n.mkdir(o.dirname(d()),{recursive:!0});let r=`[Desktop Entry]
Name=${p}
Comment=Handle ${q2}:// deep links for Claude Code
${k(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${q2};
`;await n.writeFile(d(),r);let i=await Ga("xdg-mime");if(i){let{code:a}=await $e(i,["default",w,`x-scheme-handler/${q2}`],{useCwd:!1});if(a!==0)throw Object.assign(Error(`xdg-mime exited with code ${a}`),{code:"XDG_MIME_FAILED"})}t(`Registered ${q2}:// protocol handler at ${d()}`)}async function _(e){for(let r of[["add",u,"/ve","/d",`URL:${p}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",h,"/ve","/d",y(e),"/f"]]){let{code:i}=await $e("reg",r,{useCwd:!1});if(i!==0)throw Object.assign(Error(`reg add exited with code ${i}`),{code:"REG_FAILED"})}t(`Registered ${q2}:// protocol handler in Windows registry`)}async function F(e){let r=e??await C();switch("darwin"){case"darwin":await P(r);break;case"linux":await D(r);break;case"win32":await _(r);break;default:throw Error("Unsupported platform: darwin")}}async function C(){let e=kme();try{return await n.realpath(e),e}catch{return process.execPath}}async function L(e){try{switch("darwin"){case"darwin":return await n.readlink(l)===e;case"linux":return(await n.readFile(d(),"utf8")).includes(k(e));case"win32":{let{stdout:r,code:i}=await $e("reg",["query",h,"/ve"],{useCwd:!1});return i===0&&r.includes(y(e))}default:return!1}}catch{return!1}}async function ijn(e){if(Ge().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("darwin"))return;let r=await C();if(await L(r))return;let i=o.join(be(),".deep-link-register-failed");if(M()&&e!==void 0){let a=await e.stat(Ce.state("deep-link-register-failed"));if(a.ok&&Date.now()-a.value.mtimeMs<m)return}else try{let a=await n.stat(i);if(Date.now()-a.mtimeMs<m)return}catch{}try{if(await F(r),S("deep_link_register"),t("Auto-registered claude-cli:// deep link protocol handler"),M()&&e!==void 0)await e.delete(Ce.state("deep-link-register-failed"));else await n.rm(i,{force:!0}).catch(()=>{})}catch(a){let s=Jr(a);if(f("deep_link_register",s??"register_failed"),t(`Failed to auto-register deep link protocol handler: ${a instanceof Error?a.message:String(a)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(M()&&e!==void 0)await e.write(Ce.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await n.writeFile(i,"").catch(()=>{})}}
export{qtn,ijn};
