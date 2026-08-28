// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{_,f}from"./chunk-wx0zfkp2.js";import{C,oo}from"./chunk-e5bq01yj.js";import{n}from"./chunk-cmkfpkth.js";import{ge}from"./chunk-j6bwf1es.js";import{Se}from"./chunk-3vs63y6b.js";import{Sa}from"./chunk-bn8q5mbz.js";import{Fe}from"./chunk-5wdhh6zv.js";import{Koe}from"./chunk-mcj2krrw.js";import{Ve}from"./chunk-jz0pchtb.js";import{d$}from"./chunk-v6a0qbg3.js";import{Ile}from"./chunk-8cxmhp4q.js";import{H}from"./chunk-9p9ys44p.js";import{promises as a}from"fs";import*as g from"os";import*as o from"path";var wWt="com.anthropic.claude-code-url-handler",p="Claude Code URL Handler",w="claude-code-url-handler.desktop",P="Claude Code URL Handler.app",c=o.join(g.homedir(),"Applications",P),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(Ile(),"applications",w)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${d$}`,h=`${u}\\shell\\open\\command`,m=86400000;function k(e){return`Exec="${e}" --handle-uri %u`}function y(e){return`"${e}" --handle-uri "%1"`}async function D(e){let t=o.join(c,"Contents");try{await a.rm(c,{recursive:!0})}catch(s){if(C(s)!=="ENOENT")throw s}await a.mkdir(o.dirname(l),{recursive:!0});let r=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${wWt}</string>
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
        <string>${d$}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await a.writeFile(o.join(t,"Info.plist"),r),await a.symlink(e,l),await Fe("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),n(`Registered ${d$}:// protocol handler at ${c}`)}async function F(e){await a.mkdir(o.dirname(d()),{recursive:!0});let t=`[Desktop Entry]
Name=${p}
Comment=Handle ${d$}:// deep links for Claude Code
${k(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${d$};
`;await a.writeFile(d(),t);let r=await Sa("xdg-mime");if(r){let{code:i}=await Fe(r,["default",w,`x-scheme-handler/${d$}`],{useCwd:!1});if(i!==0)throw Object.assign(Error(`xdg-mime exited with code ${i}`),{code:"XDG_MIME_FAILED"})}n(`Registered ${d$}:// protocol handler at ${d()}`)}async function L(e){for(let t of[["add",u,"/ve","/d",`URL:${p}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",h,"/ve","/d",y(e),"/f"]]){let{code:r}=await Fe("reg",t,{useCwd:!1});if(r!==0)throw Object.assign(Error(`reg add exited with code ${r}`),{code:"REG_FAILED"})}n(`Registered ${d$}:// protocol handler in Windows registry`)}async function S(e){let t=e??await E();switch("darwin"){case"darwin":await D(t);break;case"linux":await F(t);break;case"win32":await L(t);break;default:throw Error("Unsupported platform: darwin")}}async function E(){let e=Koe();try{return await a.realpath(e),e}catch{return process.execPath}}async function x(e){try{switch("darwin"){case"darwin":return await a.readlink(l)===e;case"linux":return(await a.readFile(d(),"utf8")).includes(k(e));case"win32":{let{stdout:t,code:r}=await Fe("reg",["query",h,"/ve"],{useCwd:!1});return r===0&&t.includes(y(e))}default:return!1}}catch{return!1}}async function w0n(e){if(Ve().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("darwin"))return;let t=await E();if(await x(t))return;let r=o.join(ge(),".deep-link-register-failed");if(H()&&e!==void 0){let i=await e.stat(Se.state("deep-link-register-failed"));if(i.ok&&Date.now()-i.value.mtimeMs<m)return}else try{let i=await a.stat(r);if(Date.now()-i.mtimeMs<m)return}catch{}try{if(await S(t),_("deep_link_register"),n("Auto-registered claude-cli:// deep link protocol handler"),H()&&e!==void 0)await e.delete(Se.state("deep-link-register-failed"));else await a.rm(r,{force:!0}).catch(()=>{})}catch(i){let s=oo(i);if(f("deep_link_register",s??"register_failed"),n(`Failed to auto-register deep link protocol handler: ${i instanceof Error?i.message:String(i)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(H()&&e!==void 0)await e.write(Se.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await a.writeFile(r,"").catch(()=>{})}}
export{wWt,w0n};
