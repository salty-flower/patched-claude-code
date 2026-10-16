// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{E,Hr}from"./chunk-w7m8nded.js";import{z}from"./chunk-qeqy4res.js";import{g,m}from"./chunk-rhe3yjtx.js";import{t}from"./chunk-cwsn6mdf.js";import{Pe}from"./chunk-c61xdsy8.js";import{Ue}from"./chunk-zg8w8y5z.js";import{Bd}from"./chunk-xwn0mfnc.js";import{st}from"./chunk-xx1rar7b.js";import{ut}from"./chunk-a502zyxr.js";import{e5e}from"./chunk-fwcf4yx9.js";import{Are}from"./chunk-m2yvk1m5.js";import{_1e}from"./chunk-nyczv8jc.js";import{promises as n}from"fs";import*as w from"os";import*as o from"path";var D="com.anthropic.claude-code-url-handler",p="Claude Code URL Handler",h="claude-code-url-handler.desktop",_="Claude Code URL Handler.app",c=o.join(w.homedir(),"Applications",_),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(_1e(),"applications",h)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${Are}`,k=`${u}\\shell\\open\\command`,f=86400000;function y(e){return`Exec="${e}" --handle-uri %u`}function C(e){return`"${e}" --handle-uri "%1"`}async function F(e){let r=o.join(c,"Contents");try{await n.rm(c,{recursive:!0})}catch(s){if(E(s)!=="ENOENT")throw s}await n.mkdir(o.dirname(l),{recursive:!0});let i=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${D}</string>
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
        <string>${Are}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await n.writeFile(o.join(r,"Info.plist"),i),await n.symlink(e,l),await st("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),t(`Registered ${Are}:// protocol handler at ${c}`)}async function L(e){await n.mkdir(o.dirname(d()),{recursive:!0});let r=`[Desktop Entry]
Name=${p}
Comment=Handle ${Are}:// deep links for Claude Code
${y(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${Are};
`;await n.writeFile(d(),r);let i=await Bd("xdg-mime");if(i){let{code:a}=await st(i,["default",h,`x-scheme-handler/${Are}`],{useCwd:!1});if(a!==0)throw Object.assign(Error(`xdg-mime exited with code ${a}`),{code:"XDG_MIME_FAILED"})}t(`Registered ${Are}:// protocol handler at ${d()}`)}async function S(e){for(let r of[["add",u,"/ve","/d",`URL:${p}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",k,"/ve","/d",C(e),"/f"]]){let{code:i}=await st("reg",r,{useCwd:!1});if(i!==0)throw Object.assign(Error(`reg add exited with code ${i}`),{code:"REG_FAILED"})}t(`Registered ${Are}:// protocol handler in Windows registry`)}async function x(e){let r=e??await P();switch("linux"){case"darwin":await F(r);break;case"linux":await L(r);break;case"win32":await S(r);break;default:throw Error("Unsupported platform: linux")}}async function P(){let e=e5e();try{return await n.realpath(e),e}catch{return process.execPath}}async function v(e){try{switch("linux"){case"darwin":return await n.readlink(l)===e;case"linux":return(await n.readFile(d(),"utf8")).includes(y(e));case"win32":{let{stdout:r,code:i}=await st("reg",["query",k,"/ve"],{useCwd:!1});return i===0&&r.includes(C(e))}default:return!1}}catch{return!1}}async function nKo(e){if(ut().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("linux"))return;let r=await P();if(await v(r))return;let i=o.join(Pe(),".deep-link-register-failed");if(z()&&e!==void 0){let a=await e.stat(Ue.state("deep-link-register-failed"));if(a.ok&&Date.now()-a.value.mtimeMs<f)return}else try{let a=await n.stat(i);if(Date.now()-a.mtimeMs<f)return}catch{}try{if(await x(r),g("deep_link_register"),t("Auto-registered claude-cli:// deep link protocol handler"),z()&&e!==void 0)await e.delete(Ue.state("deep-link-register-failed"));else await n.rm(i,{force:!0}).catch(()=>{})}catch(a){let s=Hr(a);if(m("deep_link_register",s??"register_failed"),t(`Failed to auto-register deep link protocol handler: ${a instanceof Error?a.message:String(a)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(z()&&e!==void 0)await e.write(Ue.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await n.writeFile(i,"").catch(()=>{})}}
export{nKo};
