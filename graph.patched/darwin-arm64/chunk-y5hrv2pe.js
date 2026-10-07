// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{E,Jr}from"./chunk-fqsygynq.js";import{U}from"./chunk-ht3pd6g4.js";import{y,m}from"./chunk-e3gw32ew.js";import{t}from"./chunk-f8eqwxpt.js";import{we}from"./chunk-xbg4a11x.js";import{De}from"./chunk-wq75sevg.js";import{ec}from"./chunk-j77txbjn.js";import{Ze}from"./chunk-zm2rbh78.js";import{C2e}from"./chunk-9p28badj.js";import{ct}from"./chunk-861a7whf.js";import{SJ}from"./chunk-g07wb253.js";import{xGe}from"./chunk-yy5ng0g2.js";import{promises as n}from"fs";import*as g from"os";import*as o from"path";var NSr="com.anthropic.claude-code-url-handler",p="Claude Code URL Handler",w="claude-code-url-handler.desktop",D="Claude Code URL Handler.app",c=o.join(g.homedir(),"Applications",D),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(xGe(),"applications",w)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${SJ}`,h=`${u}\\shell\\open\\command`,f=86400000;function k(e){return`Exec="${e}" --handle-uri %u`}function C(e){return`"${e}" --handle-uri "%1"`}async function _(e){let r=o.join(c,"Contents");try{await n.rm(c,{recursive:!0})}catch(s){if(E(s)!=="ENOENT")throw s}await n.mkdir(o.dirname(l),{recursive:!0});let i=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${NSr}</string>
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
        <string>${SJ}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await n.writeFile(o.join(r,"Info.plist"),i),await n.symlink(e,l),await Ze("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),t(`Registered ${SJ}:// protocol handler at ${c}`)}async function F(e){await n.mkdir(o.dirname(d()),{recursive:!0});let r=`[Desktop Entry]
Name=${p}
Comment=Handle ${SJ}:// deep links for Claude Code
${k(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${SJ};
`;await n.writeFile(d(),r);let i=await ec("xdg-mime");if(i){let{code:a}=await Ze(i,["default",w,`x-scheme-handler/${SJ}`],{useCwd:!1});if(a!==0)throw Object.assign(Error(`xdg-mime exited with code ${a}`),{code:"XDG_MIME_FAILED"})}t(`Registered ${SJ}:// protocol handler at ${d()}`)}async function L(e){for(let r of[["add",u,"/ve","/d",`URL:${p}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",h,"/ve","/d",C(e),"/f"]]){let{code:i}=await Ze("reg",r,{useCwd:!1});if(i!==0)throw Object.assign(Error(`reg add exited with code ${i}`),{code:"REG_FAILED"})}t(`Registered ${SJ}:// protocol handler in Windows registry`)}async function S(e){let r=e??await P();switch("darwin"){case"darwin":await _(r);break;case"linux":await F(r);break;case"win32":await L(r);break;default:throw Error("Unsupported platform: darwin")}}async function P(){let e=C2e();try{return await n.realpath(e),e}catch{return process.execPath}}async function x(e){try{switch("darwin"){case"darwin":return await n.readlink(l)===e;case"linux":return(await n.readFile(d(),"utf8")).includes(k(e));case"win32":{let{stdout:r,code:i}=await Ze("reg",["query",h,"/ve"],{useCwd:!1});return i===0&&r.includes(C(e))}default:return!1}}catch{return!1}}async function p_o(e){if(ct().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("darwin"))return;let r=await P();if(await x(r))return;let i=o.join(we(),".deep-link-register-failed");if(U()&&e!==void 0){let a=await e.stat(De.state("deep-link-register-failed"));if(a.ok&&Date.now()-a.value.mtimeMs<f)return}else try{let a=await n.stat(i);if(Date.now()-a.mtimeMs<f)return}catch{}try{if(await S(r),y("deep_link_register"),t("Auto-registered claude-cli:// deep link protocol handler"),U()&&e!==void 0)await e.delete(De.state("deep-link-register-failed"));else await n.rm(i,{force:!0}).catch(()=>{})}catch(a){let s=Jr(a);if(m("deep_link_register",s??"register_failed"),t(`Failed to auto-register deep link protocol handler: ${a instanceof Error?a.message:String(a)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(U()&&e!==void 0)await e.write(De.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await n.writeFile(i,"").catch(()=>{})}}
export{NSr,p_o};
