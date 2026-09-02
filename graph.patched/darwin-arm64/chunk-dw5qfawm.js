// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y,p}from"./chunk-xtqqhw5t.js";import{E,uo}from"./chunk-qr1avfxy.js";import{n}from"./chunk-ynzt0fm1.js";import{be}from"./chunk-4j4893mq.js";import{Te}from"./chunk-8ath6mn8.js";import{Va}from"./chunk-w3k8bej2.js";import{$e}from"./chunk-zb8d66s3.js";import{bae}from"./chunk-z0mbm25c.js";import{Je}from"./chunk-cx07awjk.js";import{eB}from"./chunk-8cse3p50.js";import{tde}from"./chunk-jcv4bfwt.js";import{O}from"./chunk-vvpqfcj1.js";import{promises as a}from"fs";import*as g from"os";import*as o from"path";var jKt="com.anthropic.claude-code-url-handler",m="Claude Code URL Handler",w="claude-code-url-handler.desktop",D="Claude Code URL Handler.app",c=o.join(g.homedir(),"Applications",D),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(tde(),"applications",w)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${eB}`,h=`${u}\\shell\\open\\command`,f=86400000;function k(e){return`Exec="${e}" --handle-uri %u`}function C(e){return`"${e}" --handle-uri "%1"`}async function _(e){let t=o.join(c,"Contents");try{await a.rm(c,{recursive:!0})}catch(s){if(E(s)!=="ENOENT")throw s}await a.mkdir(o.dirname(l),{recursive:!0});let r=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${jKt}</string>
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
        <string>${eB}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await a.writeFile(o.join(t,"Info.plist"),r),await a.symlink(e,l),await $e("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),n(`Registered ${eB}:// protocol handler at ${c}`)}async function F(e){await a.mkdir(o.dirname(d()),{recursive:!0});let t=`[Desktop Entry]
Name=${m}
Comment=Handle ${eB}:// deep links for Claude Code
${k(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${eB};
`;await a.writeFile(d(),t);let r=await Va("xdg-mime");if(r){let{code:i}=await $e(r,["default",w,`x-scheme-handler/${eB}`],{useCwd:!1});if(i!==0)throw Object.assign(Error(`xdg-mime exited with code ${i}`),{code:"XDG_MIME_FAILED"})}n(`Registered ${eB}:// protocol handler at ${d()}`)}async function L(e){for(let t of[["add",u,"/ve","/d",`URL:${m}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",h,"/ve","/d",C(e),"/f"]]){let{code:r}=await $e("reg",t,{useCwd:!1});if(r!==0)throw Object.assign(Error(`reg add exited with code ${r}`),{code:"REG_FAILED"})}n(`Registered ${eB}:// protocol handler in Windows registry`)}async function S(e){let t=e??await P();switch("darwin"){case"darwin":await _(t);break;case"linux":await F(t);break;case"win32":await L(t);break;default:throw Error("Unsupported platform: darwin")}}async function P(){let e=bae();try{return await a.realpath(e),e}catch{return process.execPath}}async function x(e){try{switch("darwin"){case"darwin":return await a.readlink(l)===e;case"linux":return(await a.readFile(d(),"utf8")).includes(k(e));case"win32":{let{stdout:t,code:r}=await $e("reg",["query",h,"/ve"],{useCwd:!1});return r===0&&t.includes(C(e))}default:return!1}}catch{return!1}}async function eDn(e){if(Je().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("darwin"))return;let t=await P();if(await x(t))return;let r=o.join(be(),".deep-link-register-failed");if(O()&&e!==void 0){let i=await e.stat(Te.state("deep-link-register-failed"));if(i.ok&&Date.now()-i.value.mtimeMs<f)return}else try{let i=await a.stat(r);if(Date.now()-i.mtimeMs<f)return}catch{}try{if(await S(t),y("deep_link_register"),n("Auto-registered claude-cli:// deep link protocol handler"),O()&&e!==void 0)await e.delete(Te.state("deep-link-register-failed"));else await a.rm(r,{force:!0}).catch(()=>{})}catch(i){let s=uo(i);if(p("deep_link_register",s??"register_failed"),n(`Failed to auto-register deep link protocol handler: ${i instanceof Error?i.message:String(i)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(O()&&e!==void 0)await e.write(Te.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await a.writeFile(r,"").catch(()=>{})}}
export{jKt,eDn};
