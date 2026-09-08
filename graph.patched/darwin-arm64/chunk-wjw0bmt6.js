// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{M}from"./chunk-h62vxw7j.js";import{y,f}from"./chunk-0vqzb8ad.js";import{A,Jr}from"./chunk-h4f48kbj.js";import{n}from"./chunk-38sny42z.js";import{be}from"./chunk-5ndhfaq9.js";import{Ce}from"./chunk-qe04h4c5.js";import{ja}from"./chunk-zqr5ctyf.js";import{Fe}from"./chunk-9ys1bnqr.js";import{Upe}from"./chunk-7dzh4mjq.js";import{Ge}from"./chunk-bt5mxc9p.js";import{WB}from"./chunk-q8w2zntw.js";import{Tfe}from"./chunk-cyyrj58q.js";import{promises as a}from"fs";import*as g from"os";import*as o from"path";var pQt="com.anthropic.claude-code-url-handler",p="Claude Code URL Handler",w="claude-code-url-handler.desktop",P="Claude Code URL Handler.app",c=o.join(g.homedir(),"Applications",P),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(Tfe(),"applications",w)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${WB}`,h=`${u}\\shell\\open\\command`,m=86400000;function k(e){return`Exec="${e}" --handle-uri %u`}function C(e){return`"${e}" --handle-uri "%1"`}async function D(e){let t=o.join(c,"Contents");try{await a.rm(c,{recursive:!0})}catch(s){if(A(s)!=="ENOENT")throw s}await a.mkdir(o.dirname(l),{recursive:!0});let r=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${pQt}</string>
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
        <string>${WB}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await a.writeFile(o.join(t,"Info.plist"),r),await a.symlink(e,l),await Fe("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),n(`Registered ${WB}:// protocol handler at ${c}`)}async function _(e){await a.mkdir(o.dirname(d()),{recursive:!0});let t=`[Desktop Entry]
Name=${p}
Comment=Handle ${WB}:// deep links for Claude Code
${k(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${WB};
`;await a.writeFile(d(),t);let r=await ja("xdg-mime");if(r){let{code:i}=await Fe(r,["default",w,`x-scheme-handler/${WB}`],{useCwd:!1});if(i!==0)throw Object.assign(Error(`xdg-mime exited with code ${i}`),{code:"XDG_MIME_FAILED"})}n(`Registered ${WB}:// protocol handler at ${d()}`)}async function F(e){for(let t of[["add",u,"/ve","/d",`URL:${p}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",h,"/ve","/d",C(e),"/f"]]){let{code:r}=await Fe("reg",t,{useCwd:!1});if(r!==0)throw Object.assign(Error(`reg add exited with code ${r}`),{code:"REG_FAILED"})}n(`Registered ${WB}:// protocol handler in Windows registry`)}async function L(e){let t=e??await E();switch("darwin"){case"darwin":await D(t);break;case"linux":await _(t);break;case"win32":await F(t);break;default:throw Error("Unsupported platform: darwin")}}async function E(){let e=Upe();try{return await a.realpath(e),e}catch{return process.execPath}}async function S(e){try{switch("darwin"){case"darwin":return await a.readlink(l)===e;case"linux":return(await a.readFile(d(),"utf8")).includes(k(e));case"win32":{let{stdout:t,code:r}=await Fe("reg",["query",h,"/ve"],{useCwd:!1});return r===0&&t.includes(C(e))}default:return!1}}catch{return!1}}async function RFn(e){if(Ge().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("darwin"))return;let t=await E();if(await S(t))return;let r=o.join(be(),".deep-link-register-failed");if(M()&&e!==void 0){let i=await e.stat(Ce.state("deep-link-register-failed"));if(i.ok&&Date.now()-i.value.mtimeMs<m)return}else try{let i=await a.stat(r);if(Date.now()-i.mtimeMs<m)return}catch{}try{if(await L(t),y("deep_link_register"),n("Auto-registered claude-cli:// deep link protocol handler"),M()&&e!==void 0)await e.delete(Ce.state("deep-link-register-failed"));else await a.rm(r,{force:!0}).catch(()=>{})}catch(i){let s=Jr(i);if(f("deep_link_register",s??"register_failed"),n(`Failed to auto-register deep link protocol handler: ${i instanceof Error?i.message:String(i)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(M()&&e!==void 0)await e.write(Ce.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await a.writeFile(r,"").catch(()=>{})}}
export{pQt,RFn};
