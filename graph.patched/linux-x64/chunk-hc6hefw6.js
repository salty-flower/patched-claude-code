// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{M}from"./chunk-tbekftmt.js";import{SP,ys}from"./chunk-bfmjsynp.js";import{bp,a}from"./chunk-cd1a8ced.js";import{DRn}from"./chunk-n3214qva.js";import{FWe}from"./chunk-n0wbt2hb.js";import{link as c,mkdir as l,stat as s,unlink as p,writeFile as d}from"fs/promises";import{join as r,sep as u}from"path";async function m(){let o=r(FWe(),"claude");if(!_3r())return null;let e=r(o,"ClaudeCode.app","Contents","MacOS"),n=r(e,"claude");try{let i=(await s(process.execPath)).ino;await l(e,{recursive:!0}),await d(r(e,"..","Info.plist"),`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict><key>CFBundleIdentifier</key><string>com.anthropic.claude-code</string><key>CFBundleName</key><string>Claude Code</string><key>CFBundleDisplayName</key><string>Claude Code</string><key>CFBundleExecutable</key><string>claude</string><key>CFBundlePackageType</key><string>APPL</string><key>LSUIElement</key><true/><key>NSMicrophoneUsageDescription</key><string>Claude Code uses the microphone for voice dictation.</string><key>NSAppleEventsUsageDescription</key><string>Claude Code needs to send Apple Events to open URLs and control applications you authorize.</string><key>NSLocalNetworkUsageDescription</key><string>Claude Code connects to servers and devices on your local network when commands you run need to reach them.</string></dict></plist>
`);try{if((await s(n)).ino===i)return n}catch{}let t=SP(n);await c(process.execPath,t);try{await ys(t,n)}finally{await p(t).catch(()=>{})}return n}catch{return null}}async function nZo(){if(M()!=="macos")return;if(a.CLAUDE_BG_TCC_DISCLAIMED){delete process.env.CLAUDE_BG_TCC_DISCLAIMED;return}let e=(a.CLAUDE_PTY_HOST_NO_STABLE_PATH==="1"||a.CLAUDE_CODE_DISABLE_BG_STABLE_PATH?null:await m())??process.execPath,i=[...bp()?[e]:[e,process.argv[1]],...process.argv.slice(2)],t=DRn(process.env);t.CLAUDE_BG_TCC_DISCLAIMED="1",delete t.CLAUDE_PTY_HOST_NO_STABLE_PATH;try{process.execve(e,i,t,{macDisclaimResponsibility:!0})}catch{}}function _3r(){return process.execPath.startsWith(r(FWe(),"claude","versions")+u)}
export{nZo,_3r};
