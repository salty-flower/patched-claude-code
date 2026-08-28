// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{b,f}from"./chunk-v1ap59a1.js";import{k,oo}from"./chunk-7h2h1m4y.js";import{n}from"./chunk-akz0cj0f.js";import{ge}from"./chunk-xj8gnzar.js";import{ve}from"./chunk-fz00m7zs.js";import{va}from"./chunk-g0kfvhx3.js";import{Fe}from"./chunk-7jw96n8z.js";import{Goe}from"./chunk-g25wcht2.js";import{Ve}from"./chunk-bcez0qfh.js";import{aF}from"./chunk-jqxsr0f8.js";import{kle}from"./chunk-mcsqxsf3.js";import{D}from"./chunk-6fnbbyjg.js";import{promises as a}from"fs";import*as g from"os";import*as o from"path";var v3t="com.anthropic.claude-code-url-handler",p="Claude Code URL Handler",w="claude-code-url-handler.desktop",P="Claude Code URL Handler.app",c=o.join(g.homedir(),"Applications",P),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(kle(),"applications",w)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${aF}`,h=`${u}\\shell\\open\\command`,m=86400000;function y(e){return`Exec="${e}" --handle-uri %u`}function C(e){return`"${e}" --handle-uri "%1"`}async function _(e){let t=o.join(c,"Contents");try{await a.rm(c,{recursive:!0})}catch(s){if(k(s)!=="ENOENT")throw s}await a.mkdir(o.dirname(l),{recursive:!0});let r=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${v3t}</string>
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
        <string>${aF}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await a.writeFile(o.join(t,"Info.plist"),r),await a.symlink(e,l),await Fe("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),n(`Registered ${aF}:// protocol handler at ${c}`)}async function F(e){await a.mkdir(o.dirname(d()),{recursive:!0});let t=`[Desktop Entry]
Name=${p}
Comment=Handle ${aF}:// deep links for Claude Code
${y(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${aF};
`;await a.writeFile(d(),t);let r=await va("xdg-mime");if(r){let{code:i}=await Fe(r,["default",w,`x-scheme-handler/${aF}`],{useCwd:!1});if(i!==0)throw Object.assign(Error(`xdg-mime exited with code ${i}`),{code:"XDG_MIME_FAILED"})}n(`Registered ${aF}:// protocol handler at ${d()}`)}async function L(e){for(let t of[["add",u,"/ve","/d",`URL:${p}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",h,"/ve","/d",C(e),"/f"]]){let{code:r}=await Fe("reg",t,{useCwd:!1});if(r!==0)throw Object.assign(Error(`reg add exited with code ${r}`),{code:"REG_FAILED"})}n(`Registered ${aF}:// protocol handler in Windows registry`)}async function S(e){let t=e??await E();switch("linux"){case"darwin":await _(t);break;case"linux":await F(t);break;case"win32":await L(t);break;default:throw Error("Unsupported platform: linux")}}async function E(){let e=Goe();try{return await a.realpath(e),e}catch{return process.execPath}}async function x(e){try{switch("linux"){case"darwin":return await a.readlink(l)===e;case"linux":return(await a.readFile(d(),"utf8")).includes(y(e));case"win32":{let{stdout:t,code:r}=await Fe("reg",["query",h,"/ve"],{useCwd:!1});return r===0&&t.includes(C(e))}default:return!1}}catch{return!1}}async function y0n(e){if(Ve().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("linux"))return;let t=await E();if(await x(t))return;let r=o.join(ge(),".deep-link-register-failed");if(D()&&e!==void 0){let i=await e.stat(ve.state("deep-link-register-failed"));if(i.ok&&Date.now()-i.value.mtimeMs<m)return}else try{let i=await a.stat(r);if(Date.now()-i.mtimeMs<m)return}catch{}try{if(await S(t),b("deep_link_register"),n("Auto-registered claude-cli:// deep link protocol handler"),D()&&e!==void 0)await e.delete(ve.state("deep-link-register-failed"));else await a.rm(r,{force:!0}).catch(()=>{})}catch(i){let s=oo(i);if(f("deep_link_register",s??"register_failed"),n(`Failed to auto-register deep link protocol handler: ${i instanceof Error?i.message:String(i)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(D()&&e!==void 0)await e.write(ve.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await a.writeFile(r,"").catch(()=>{})}}
export{v3t,y0n};
