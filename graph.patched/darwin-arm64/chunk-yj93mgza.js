// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{v,or}from"./chunk-sktwb66b.js";import{g,m}from"./chunk-ad5ya8vz.js";import{t}from"./chunk-5nh49npx.js";import{$e}from"./chunk-ycp5r4r6.js";import{Ge}from"./chunk-62j6znyn.js";import{Oc}from"./chunk-n1cpnz94.js";import{at}from"./chunk-sqgyg00f.js";import{gt}from"./chunk-gbez09mv.js";import{y0e}from"./chunk-0pp6xyg8.js";import{cme}from"./chunk-d6psnwhx.js";import{g7e}from"./chunk-x5h5s1e8.js";import{X}from"./chunk-bgsak306.js";import{promises as n}from"fs";import*as w from"os";import*as o from"path";var $xo="com.anthropic.claude-code-url-handler",p="Claude Code URL Handler",h="claude-code-url-handler.desktop",P="Claude Code URL Handler.app",c=o.join(w.homedir(),"Applications",P),l=o.join(c,"Contents","MacOS","claude");function d(){return o.join(g7e(),"applications",h)}var u=`HKEY_CURRENT_USER\\Software\\Classes\\${cme}`,k=`${u}\\shell\\open\\command`,f=86400000;function y(e){return`Exec="${e}" --handle-uri %u`}function C(e){return`"${e}" --handle-uri "%1"`}async function D(e){let r=o.join(c,"Contents");try{await n.rm(c,{recursive:!0})}catch(s){if(v(s)!=="ENOENT")throw s}await n.mkdir(o.dirname(l),{recursive:!0});let i=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${$xo}</string>
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
        <string>${cme}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;await n.writeFile(o.join(r,"Info.plist"),i),await n.symlink(e,l),await at("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",["-R",c],{useCwd:!1}),t(`Registered ${cme}:// protocol handler at ${c}`)}async function _(e){await n.mkdir(o.dirname(d()),{recursive:!0});let r=`[Desktop Entry]
Name=${p}
Comment=Handle ${cme}:// deep links for Claude Code
${y(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${cme};
`;await n.writeFile(d(),r);let i=await Oc("xdg-mime");if(i){let{code:a}=await at(i,["default",h,`x-scheme-handler/${cme}`],{useCwd:!1});if(a!==0)throw Object.assign(Error(`xdg-mime exited with code ${a}`),{code:"XDG_MIME_FAILED"})}t(`Registered ${cme}:// protocol handler at ${d()}`)}async function F(e){for(let r of[["add",u,"/ve","/d",`URL:${p}`,"/f"],["add",u,"/v","URL Protocol","/d","","/f"],["add",k,"/ve","/d",C(e),"/f"]]){let{code:i}=await at("reg",r,{useCwd:!1});if(i!==0)throw Object.assign(Error(`reg add exited with code ${i}`),{code:"REG_FAILED"})}t(`Registered ${cme}:// protocol handler in Windows registry`)}async function L(e){let r=e??await E();switch("darwin"){case"darwin":await D(r);break;case"linux":await _(r);break;case"win32":await F(r);break;default:throw Error("Unsupported platform: darwin")}}async function E(){let e=y0e();try{return await n.realpath(e),e}catch{return process.execPath}}async function S(e){try{switch("darwin"){case"darwin":return await n.readlink(l)===e;case"linux":return(await n.readFile(d(),"utf8")).includes(y(e));case"win32":{let{stdout:r,code:i}=await at("reg",["query",k,"/ve"],{useCwd:!1});return i===0&&r.includes(C(e))}default:return!1}}catch{return!1}}async function v2s(e){if(gt().disableDeepLinkRegistration==="disable")return;if(!["darwin","linux","win32"].includes("darwin"))return;let r=await E();if(await S(r))return;let i=o.join($e(),".deep-link-register-failed");if(X()&&e!==void 0){let a=await e.stat(Ge.state("deep-link-register-failed"));if(a.ok&&Date.now()-a.value.mtimeMs<f)return}else try{let a=await n.stat(i);if(Date.now()-a.mtimeMs<f)return}catch{}try{if(await L(r),g("deep_link_register"),t("Auto-registered claude-cli:// deep link protocol handler"),X()&&e!==void 0)await e.delete(Ge.state("deep-link-register-failed"));else await n.rm(i,{force:!0}).catch(()=>{})}catch(a){let s=or(a);if(m("deep_link_register",s??"register_failed"),t(`Failed to auto-register deep link protocol handler: ${a instanceof Error?a.message:String(a)}`,{level:"warn"}),s==="EACCES"||s==="ENOSPC")if(X()&&e!==void 0)await e.write(Ge.state("deep-link-register-failed"),"",{publishDiscipline:"inPlace"});else await n.writeFile(i,"").catch(()=>{})}}
export{$xo,v2s};
