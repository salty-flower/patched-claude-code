// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{l,Ht}from"./chunk-qr1avfxy.js";import{le,n}from"./chunk-ynzt0fm1.js";import{be}from"./chunk-4j4893mq.js";import{a}from"./chunk-w3k8bej2.js";import{e5e}from"./chunk-53w68g4t.js";import{D}from"./chunk-zyp65cht.js";import*as s from"os";import{join as o}from"path";function vht(){let i=[o(be(),"ide")];if(a.CLAUDE_CONFIG_DIR)i.push(o(s.homedir(),".claude","ide").normalize("NFC"));if(D()==="wsl"){let t=a.USERPROFILE?e5e(a.USERPROFILE):null;if(t)i.push(o(t,".claude","ide"));try{let m=le().readdirSync("/mnt/c/Users");for(let e of m){if(!e.isDirectory()&&!e.isSymbolicLink())continue;if(e.name==="Public"||e.name==="Default"||e.name==="Default User"||e.name==="All Users")continue;i.push(o("/mnt/c/Users",e.name,".claude","ide"))}}catch(r){if(Ht(r))n(`WSL IDE lockfile path detection failed (${r.code}): ${l(r)}`);else n(`WSL IDE lockfile path detection failed unexpectedly: ${l(r)}`,{level:"error"})}}return i}
export{vht};
