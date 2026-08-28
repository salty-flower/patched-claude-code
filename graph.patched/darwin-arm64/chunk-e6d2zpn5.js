// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{l,Et}from"./chunk-e5bq01yj.js";import{ce,n}from"./chunk-cmkfpkth.js";import{ge}from"./chunk-j6bwf1es.js";import{a}from"./chunk-bn8q5mbz.js";import{eze}from"./chunk-yw4dsbhy.js";import{U}from"./chunk-xhxj67xc.js";import*as s from"os";import{join as o}from"path";function Zpt(){let i=[o(ge(),"ide")];if(a.CLAUDE_CONFIG_DIR)i.push(o(s.homedir(),".claude","ide").normalize("NFC"));if(U()==="wsl"){let t=a.USERPROFILE?eze(a.USERPROFILE):null;if(t)i.push(o(t,".claude","ide"));try{let m=ce().readdirSync("/mnt/c/Users");for(let e of m){if(!e.isDirectory()&&!e.isSymbolicLink())continue;if(e.name==="Public"||e.name==="Default"||e.name==="Default User"||e.name==="All Users")continue;i.push(o("/mnt/c/Users",e.name,".claude","ide"))}}catch(r){if(Et(r))n(`WSL IDE lockfile path detection failed (${r.code}): ${l(r)}`);else n(`WSL IDE lockfile path detection failed unexpectedly: ${l(r)}`,{level:"error"})}}return i}
export{Zpt};
