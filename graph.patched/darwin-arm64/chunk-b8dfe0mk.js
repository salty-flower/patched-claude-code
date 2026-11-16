// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{w,er}from"./chunk-wryttfdq.js";import{g,m}from"./chunk-f8g4f3e3.js";import{t}from"./chunk-bdfv2ky4.js";import{Ge}from"./chunk-15kz2sd4.js";import{Ze}from"./chunk-jhh9hbv6.js";import{Lu}from"./chunk-428zme0n.js";import{ct}from"./chunk-czf5t2nc.js";import{H$e}from"./chunk-4pgd1rt9.js";import{St}from"./chunk-x4r54n7x.js";import{IEe}from"./chunk-zhvxfbcg.js";import{Jst}from"./chunk-fshjaegf.js";import{Q}from"./chunk-0866pjrf.js";import{promises as n}from"fs";import*as h from"os";import*as o from"path";var F7o="com.anthropic.claude-code-url-handler",p="Claude Code URL Handler",k="claude-code-url-handler.desktop",D="Claude Code URL Handler.app",c=o.join(h.homedir(),"Applications",D),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(Jst(),"applications",k)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${IEe}`,y=`${u}\\shell\\open\\command`,f=86400000;function C(e){return`Exec="${e}" --handle-uri %u`}function E(e){return`"${e}" --handle-uri "%1"`}async function _(e){let r=o.join(c,"Contents");try{await n.rm(c,{recursive:!0})}catch(s){if(w(s)!=="ENOENT")throw s}await n.mkdir(o.dirname(l),{recursive:!0});let i=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${F7o}</string>
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
        <string>${IEe}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await n.writeFile(o.join(r,"Info.plist"),i),await n.symlink(e,l),await ct("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),t(`Registered ${IEe}:// protocol handler at ${c}`)}async function F(e){await n.mkdir(o.dirname(d()),{recursive:!0});let r=`[Desktop Entry]
Name=${p}
Comment=Handle ${IEe}:// deep links for Claude Code
${C(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${IEe};
`;await n.writeFile(d(),r);let i=await Lu("xdg-mime");if(i){let{code:a}=await ct(i,["default",k,`x-scheme-handler/${IEe}`],{useCwd:!1});if(a!==0)throw Object.assign(Error(`xdg-mime exited with code ${a}`),{code:"XDG_MIME_FAILED"})}t(`Registered ${IEe}:// protocol handler at ${d()}`)}async function L(e){for(let r of[["add",u,"/ve","/d",`URL:${p}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",y,"/ve","/d",E(e),"/f"]]){let{code:i}=await ct("reg",r,{useCwd:!1});if(i!==0)throw Object.assign(Error(`reg add exited with code ${i}`),{code:"REG_FAILED"})}t(`Registered ${IEe}:// protocol handler in Windows registry`)}async function S(e){let r=e??await P();switch("darwin"){case"darwin":await _(r);break;case"linux":await F(r);break;case"win32":await L(r);break;default:throw Error("Unsupported platform: darwin")}}async function P(){let e=H$e();try{return await n.realpath(e),e}catch{return process.execPath}}async function x(e){try{switch("darwin"){case"darwin":return await n.readlink(l)===e;case"linux":return(await n.readFile(d(),"utf8")).includes(C(e));case"win32":{let{stdout:r,code:i}=await ct("reg",["query",y,"/ve"],{useCwd:!1});return i===0&&r.includes(E(e))}default:return!1}}catch{return!1}}async function KSi(e){if(St().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("darwin"))return;let r=await P();if(await x(r))return;let i=o.join(Ge(),".deep-link-register-failed");if(Q()&&e!==void 0){let a=await e.stat(Ze.state("deep-link-register-failed"));if(a.ok&&Date.now()-a.value.mtimeMs<f)return}else try{let a=await n.stat(i);if(Date.now()-a.mtimeMs<f)return}catch{}try{if(await S(r),g("deep_link_register"),t("Auto-registered claude-cli:// deep link protocol handler"),Q()&&e!==void 0)await e.delete(Ze.state("deep-link-register-failed"));else await n.rm(i,{force:!0}).catch(()=>{})}catch(a){let s=er(a);if(m("deep_link_register",s??"register_failed"),t(`Failed to auto-register deep link protocol handler: ${a instanceof Error?a.message:String(a)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(Q()&&e!==void 0)await e.write(Ze.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await n.writeFile(i,"").catch(()=>{})}}
export{F7o,KSi};
