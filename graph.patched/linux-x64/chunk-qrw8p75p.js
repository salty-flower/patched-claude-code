// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{We}from"./chunk-gwj7v27h.js";import{J}from"./chunk-p46wpkfz.js";import{O}from"./chunk-3s94kw4m.js";import{shs}from"./chunk-gctwj767.js";import{readlinkSync as e}from"fs";import{hostname as u}from"os";class o{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var ULe=We(new o,(t)=>{t.pidDomain=void 0});function dce(){if(ULe.pidSpace===null){let t="";try{t=e("/proc/self/ns/pid")}catch{t=""}ULe.pidSpace=`${u()}${t===""?"":"#"+t}`}return ULe.pidSpace}function rT(){return ULe.pidDomain??=(async()=>shs(O()))().catch((t)=>{throw ULe.pidDomain=void 0,t}),ULe.pidDomain}import{timingSafeEqual as f}from"crypto";import{readFile as a}from"fs/promises";async function vit(t){try{let n=J(await a(t,"utf8"));if(n===null||typeof n!=="object")return;let i={};if("rvAuth"in n&&typeof n.rvAuth==="string")i.rvAuth=n.rvAuth;if("ptyAuth"in n&&typeof n.ptyAuth==="string")i.ptyAuth=n.ptyAuth;if("claimAuth"in n&&typeof n.claimAuth==="string")i.claimAuth=n.claimAuth;return i}catch{return}}function y$(t,n){if(typeof t!=="string"||!n||t.length===0)return!1;let i=Buffer.from(t),r=Buffer.from(n);if(i.length!==r.length)return!1;return f(i,r)}
export{ULe,dce,rT,vit,y$};
