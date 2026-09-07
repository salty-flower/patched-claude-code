// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{L}from"./chunk-7wmynp0n.js";import{y,p}from"./chunk-m0jywms0.js";import{A,Yr}from"./chunk-084v19yj.js";import{t}from"./chunk-5q90j22t.js";import{Se}from"./chunk-4rr1ghkj.js";import{Ae}from"./chunk-dhrcn786.js";import{La}from"./chunk-dq2s4wjn.js";import{Fe}from"./chunk-dsq5gcfe.js";import{Qde}from"./chunk-hr6vb1jr.js";import{qe}from"./chunk-pe4nmbcg.js";import{gB}from"./chunk-hkh1m6ev.js";import{Kpe}from"./chunk-dp4mwkrp.js";import{promises as n}from"fs";import*as g from"os";import*as o from"path";var XXt="com.anthropic.claude-code-url-handler",m="Claude Code URL Handler",w="claude-code-url-handler.desktop",P="Claude Code URL Handler.app",c=o.join(g.homedir(),"Applications",P),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(Kpe(),"applications",w)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${gB}`,h=`${u}\\shell\\open\\command`,f=86400000;function k(e){return`Exec="${e}" --handle-uri %u`}function C(e){return`"${e}" --handle-uri "%1"`}async function D(e){let r=o.join(c,"Contents");try{await n.rm(c,{recursive:!0})}catch(s){if(A(s)!=="ENOENT")throw s}await n.mkdir(o.dirname(l),{recursive:!0});let i=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${XXt}</string>
  <key>CFBundleName</key>
  <string>${m}</string>
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
        <string>${gB}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await n.writeFile(o.join(r,"Info.plist"),i),await n.symlink(e,l),await Fe("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),t(`Registered ${gB}:// protocol handler at ${c}`)}async function _(e){await n.mkdir(o.dirname(d()),{recursive:!0});let r=`[Desktop Entry]
Name=${m}
Comment=Handle ${gB}:// deep links for Claude Code
${k(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${gB};
`;await n.writeFile(d(),r);let i=await La("xdg-mime");if(i){let{code:a}=await Fe(i,["default",w,`x-scheme-handler/${gB}`],{useCwd:!1});if(a!==0)throw Object.assign(Error(`xdg-mime exited with code ${a}`),{code:"XDG_MIME_FAILED"})}t(`Registered ${gB}:// protocol handler at ${d()}`)}async function F(e){for(let r of[["add",u,"/ve","/d",`URL:${m}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",h,"/ve","/d",C(e),"/f"]]){let{code:i}=await Fe("reg",r,{useCwd:!1});if(i!==0)throw Object.assign(Error(`reg add exited with code ${i}`),{code:"REG_FAILED"})}t(`Registered ${gB}:// protocol handler in Windows registry`)}async function S(e){let r=e??await E();switch("darwin"){case"darwin":await D(r);break;case"linux":await _(r);break;case"win32":await F(r);break;default:throw Error("Unsupported platform: darwin")}}async function E(){let e=Qde();try{return await n.realpath(e),e}catch{return process.execPath}}async function x(e){try{switch("darwin"){case"darwin":return await n.readlink(l)===e;case"linux":return(await n.readFile(d(),"utf8")).includes(k(e));case"win32":{let{stdout:r,code:i}=await Fe("reg",["query",h,"/ve"],{useCwd:!1});return i===0&&r.includes(C(e))}default:return!1}}catch{return!1}}async function QMn(e){if(qe().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("darwin"))return;let r=await E();if(await x(r))return;let i=o.join(Se(),".deep-link-register-failed");if(L()&&e!==void 0){let a=await e.stat(Ae.state("deep-link-register-failed"));if(a.ok&&Date.now()-a.value.mtimeMs<f)return}else try{let a=await n.stat(i);if(Date.now()-a.mtimeMs<f)return}catch{}try{if(await S(r),y("deep_link_register"),t("Auto-registered claude-cli:// deep link protocol handler"),L()&&e!==void 0)await e.delete(Ae.state("deep-link-register-failed"));else await n.rm(i,{force:!0}).catch(()=>{})}catch(a){let s=Yr(a);if(p("deep_link_register",s??"register_failed"),t(`Failed to auto-register deep link protocol handler: ${a instanceof Error?a.message:String(a)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(L()&&e!==void 0)await e.write(Ae.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await n.writeFile(i,"").catch(()=>{})}}
export{XXt,QMn};
