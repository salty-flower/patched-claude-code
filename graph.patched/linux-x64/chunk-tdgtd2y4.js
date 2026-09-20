// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{A,no}from"./chunk-cnzbk8gg.js";import{F}from"./chunk-qztrb7e5.js";import{_,p}from"./chunk-61g2sn1g.js";import{t}from"./chunk-847hpqqs.js";import{we}from"./chunk-k4wnp212.js";import{Ce}from"./chunk-679ytzs5.js";import{je}from"./chunk-77ybm3jg.js";import{tl}from"./chunk-q2vrcqny.js";import{Hwe}from"./chunk-481806bp.js";import{Ge}from"./chunk-ggjhe3cp.js";import{TG}from"./chunk-h6yw2tgy.js";import{EEe}from"./chunk-yssqp134.js";import{promises as n}from"fs";import*as g from"os";import*as o from"path";var E="com.anthropic.claude-code-url-handler",m="Claude Code URL Handler",w="claude-code-url-handler.desktop",P="Claude Code URL Handler.app",c=o.join(g.homedir(),"Applications",P),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(EEe(),"applications",w)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${TG}`,h=`${u}\\shell\\open\\command`,f=86400000;function k(e){return`Exec="${e}" --handle-uri %u`}function y(e){return`"${e}" --handle-uri "%1"`}async function D(e){let r=o.join(c,"Contents");try{await n.rm(c,{recursive:!0})}catch(s){if(A(s)!=="ENOENT")throw s}await n.mkdir(o.dirname(l),{recursive:!0});let i=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${E}</string>
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
        <string>${TG}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await n.writeFile(o.join(r,"Info.plist"),i),await n.symlink(e,l),await je("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),t(`Registered ${TG}:// protocol handler at ${c}`)}async function L(e){await n.mkdir(o.dirname(d()),{recursive:!0});let r=`[Desktop Entry]
Name=${m}
Comment=Handle ${TG}:// deep links for Claude Code
${k(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${TG};
`;await n.writeFile(d(),r);let i=await tl("xdg-mime");if(i){let{code:a}=await je(i,["default",w,`x-scheme-handler/${TG}`],{useCwd:!1});if(a!==0)throw Object.assign(Error(`xdg-mime exited with code ${a}`),{code:"XDG_MIME_FAILED"})}t(`Registered ${TG}:// protocol handler at ${d()}`)}async function S(e){for(let r of[["add",u,"/ve","/d",`URL:${m}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",h,"/ve","/d",y(e),"/f"]]){let{code:i}=await je("reg",r,{useCwd:!1});if(i!==0)throw Object.assign(Error(`reg add exited with code ${i}`),{code:"REG_FAILED"})}t(`Registered ${TG}:// protocol handler in Windows registry`)}async function x(e){let r=e??await C();switch("linux"){case"darwin":await D(r);break;case"linux":await L(r);break;case"win32":await S(r);break;default:throw Error("Unsupported platform: linux")}}async function C(){let e=Hwe();try{return await n.realpath(e),e}catch{return process.execPath}}async function v(e){try{switch("linux"){case"darwin":return await n.readlink(l)===e;case"linux":return(await n.readFile(d(),"utf8")).includes(k(e));case"win32":{let{stdout:r,code:i}=await je("reg",["query",h,"/ve"],{useCwd:!1});return i===0&&r.includes(y(e))}default:return!1}}catch{return!1}}async function lor(e){if(Ge().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("linux"))return;let r=await C();if(await v(r))return;let i=o.join(we(),".deep-link-register-failed");if(F()&&e!==void 0){let a=await e.stat(Ce.state("deep-link-register-failed"));if(a.ok&&Date.now()-a.value.mtimeMs<f)return}else try{let a=await n.stat(i);if(Date.now()-a.mtimeMs<f)return}catch{}try{if(await x(r),_("deep_link_register"),t("Auto-registered claude-cli:// deep link protocol handler"),F()&&e!==void 0)await e.delete(Ce.state("deep-link-register-failed"));else await n.rm(i,{force:!0}).catch(()=>{})}catch(a){let s=no(a);if(p("deep_link_register",s??"register_failed"),t(`Failed to auto-register deep link protocol handler: ${a instanceof Error?a.message:String(a)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(F()&&e!==void 0)await e.write(Ce.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await n.writeFile(i,"").catch(()=>{})}}
export{lor};
