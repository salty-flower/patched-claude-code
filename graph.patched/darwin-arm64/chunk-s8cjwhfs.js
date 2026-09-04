// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{L}from"./chunk-0xdcm8sp.js";import{_,d}from"./chunk-tfyzvdvk.js";import{E,so}from"./chunk-dsb06hq9.js";import{t}from"./chunk-84crg0gy.js";import{ye}from"./chunk-ty218y69.js";import{Ce}from"./chunk-a190bznh.js";import{Ka}from"./chunk-g2ngvza5.js";import{$e}from"./chunk-p5xeqf1z.js";import{Rfe}from"./chunk-y4jddssv.js";import{Je}from"./chunk-03hrg0m9.js";import{S2}from"./chunk-xarkj12r.js";import{Qme}from"./chunk-dadzbrtf.js";import{promises as n}from"fs";import*as g from"os";import*as o from"path";var fZt="com.anthropic.claude-code-url-handler",m="Claude Code URL Handler",w="claude-code-url-handler.desktop",P="Claude Code URL Handler.app",c=o.join(g.homedir(),"Applications",P),u=o.join(c,"Contents","MacOS","claude");function l(){return o.join(Qme(),"applications",w)}var p=`HKEY_CURRENT_USER\\Software\\Classes\\${S2}`,h=`${p}\\shell\\open\\command`,f=86400000;function k(e){return`Exec="${e}" --handle-uri %u`}function y(e){return`"${e}" --handle-uri "%1"`}async function D(e){let r=o.join(c,"Contents");try{await n.rm(c,{recursive:!0})}catch(s){if(E(s)!=="ENOENT")throw s}await n.mkdir(o.dirname(u),{recursive:!0});let i=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${fZt}</string>
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
        <string>${S2}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await n.writeFile(o.join(r,"Info.plist"),i),await n.symlink(e,u),await $e("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),t(`Registered ${S2}:// protocol handler at ${c}`)}async function F(e){await n.mkdir(o.dirname(l()),{recursive:!0});let r=`[Desktop Entry]
Name=${m}
Comment=Handle ${S2}:// deep links for Claude Code
${k(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${S2};
`;await n.writeFile(l(),r);let i=await Ka("xdg-mime");if(i){let{code:a}=await $e(i,["default",w,`x-scheme-handler/${S2}`],{useCwd:!1});if(a!==0)throw Object.assign(Error(`xdg-mime exited with code ${a}`),{code:"XDG_MIME_FAILED"})}t(`Registered ${S2}:// protocol handler at ${l()}`)}async function S(e){for(let r of[["add",p,"/ve","/d",`URL:${m}`,"/f"],["add",p,"/v","URL Protocol","/d","","/f"],["add",h,"/ve","/d",y(e),"/f"]]){let{code:i}=await $e("reg",r,{useCwd:!1});if(i!==0)throw Object.assign(Error(`reg add exited with code ${i}`),{code:"REG_FAILED"})}t(`Registered ${S2}:// protocol handler in Windows registry`)}async function x(e){let r=e??await C();switch("darwin"){case"darwin":await D(r);break;case"linux":await F(r);break;case"win32":await S(r);break;default:throw Error("Unsupported platform: darwin")}}async function C(){let e=Rfe();try{return await n.realpath(e),e}catch{return process.execPath}}async function v(e){try{switch("darwin"){case"darwin":return await n.readlink(u)===e;case"linux":return(await n.readFile(l(),"utf8")).includes(k(e));case"win32":{let{stdout:r,code:i}=await $e("reg",["query",h,"/ve"],{useCwd:!1});return i===0&&r.includes(y(e))}default:return!1}}catch{return!1}}async function I$n(e){if(Je().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("darwin"))return;let r=await C();if(await v(r))return;let i=o.join(ye(),".deep-link-register-failed");if(L()&&e!==void 0){let a=await e.stat(Ce.state("deep-link-register-failed"));if(a.ok&&Date.now()-a.value.mtimeMs<f)return}else try{let a=await n.stat(i);if(Date.now()-a.mtimeMs<f)return}catch{}try{if(await x(r),_("deep_link_register"),t("Auto-registered claude-cli:// deep link protocol handler"),L()&&e!==void 0)await e.delete(Ce.state("deep-link-register-failed"));else await n.rm(i,{force:!0}).catch(()=>{})}catch(a){let s=so(a);if(d("deep_link_register",s??"register_failed"),t(`Failed to auto-register deep link protocol handler: ${a instanceof Error?a.message:String(a)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(L()&&e!==void 0)await e.write(Ce.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await n.writeFile(i,"").catch(()=>{})}}
export{fZt,I$n};
