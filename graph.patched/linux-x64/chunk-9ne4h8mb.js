// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{_,f}from"./chunk-ykrbqs98.js";import{E,co}from"./chunk-efckqwp7.js";import{n}from"./chunk-d0cr5d2v.js";import{He}from"./chunk-sgsf5yd5.js";import{we}from"./chunk-wsjwtx5h.js";import{qa}from"./chunk-m9gbfvns.js";import{Fe}from"./chunk-zv6dxs76.js";import{bae}from"./chunk-cckp0pf7.js";import{Je}from"./chunk-30zpf1a7.js";import{Q1}from"./chunk-229dd195.js";import{Jue}from"./chunk-t225nvjt.js";import{D}from"./chunk-jw0x5qwf.js";import{promises as a}from"fs";import*as g from"os";import*as o from"path";var G3t="com.anthropic.claude-code-url-handler",p="Claude Code URL Handler",w="claude-code-url-handler.desktop",P="Claude Code URL Handler.app",c=o.join(g.homedir(),"Applications",P),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(Jue(),"applications",w)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${Q1}`,h=`${u}\\shell\\open\\command`,m=86400000;function k(e){return`Exec="${e}" --handle-uri %u`}function y(e){return`"${e}" --handle-uri "%1"`}async function F(e){let t=o.join(c,"Contents");try{await a.rm(c,{recursive:!0})}catch(s){if(E(s)!=="ENOENT")throw s}await a.mkdir(o.dirname(l),{recursive:!0});let r=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${G3t}</string>
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
        <string>${Q1}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await a.writeFile(o.join(t,"Info.plist"),r),await a.symlink(e,l),await Fe("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),n(`Registered ${Q1}:// protocol handler at ${c}`)}async function L(e){await a.mkdir(o.dirname(d()),{recursive:!0});let t=`[Desktop Entry]
Name=${p}
Comment=Handle ${Q1}:// deep links for Claude Code
${k(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${Q1};
`;await a.writeFile(d(),t);let r=await qa("xdg-mime");if(r){let{code:i}=await Fe(r,["default",w,`x-scheme-handler/${Q1}`],{useCwd:!1});if(i!==0)throw Object.assign(Error(`xdg-mime exited with code ${i}`),{code:"XDG_MIME_FAILED"})}n(`Registered ${Q1}:// protocol handler at ${d()}`)}async function S(e){for(let t of[["add",u,"/ve","/d",`URL:${p}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",h,"/ve","/d",y(e),"/f"]]){let{code:r}=await Fe("reg",t,{useCwd:!1});if(r!==0)throw Object.assign(Error(`reg add exited with code ${r}`),{code:"REG_FAILED"})}n(`Registered ${Q1}:// protocol handler in Windows registry`)}async function x(e){let t=e??await C();switch("linux"){case"darwin":await F(t);break;case"linux":await L(t);break;case"win32":await S(t);break;default:throw Error("Unsupported platform: linux")}}async function C(){let e=bae();try{return await a.realpath(e),e}catch{return process.execPath}}async function v(e){try{switch("linux"){case"darwin":return await a.readlink(l)===e;case"linux":return(await a.readFile(d(),"utf8")).includes(k(e));case"win32":{let{stdout:t,code:r}=await Fe("reg",["query",h,"/ve"],{useCwd:!1});return r===0&&t.includes(y(e))}default:return!1}}catch{return!1}}async function QPn(e){if(Je().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("linux"))return;let t=await C();if(await v(t))return;let r=o.join(He(),".deep-link-register-failed");if(D()&&e!==void 0){let i=await e.stat(we.state("deep-link-register-failed"));if(i.ok&&Date.now()-i.value.mtimeMs<m)return}else try{let i=await a.stat(r);if(Date.now()-i.mtimeMs<m)return}catch{}try{if(await x(t),_("deep_link_register"),n("Auto-registered claude-cli:// deep link protocol handler"),D()&&e!==void 0)await e.delete(we.state("deep-link-register-failed"));else await a.rm(r,{force:!0}).catch(()=>{})}catch(i){let s=co(i);if(f("deep_link_register",s??"register_failed"),n(`Failed to auto-register deep link protocol handler: ${i instanceof Error?i.message:String(i)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(D()&&e!==void 0)await e.write(we.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await a.writeFile(r,"").catch(()=>{})}}
export{G3t,QPn};
