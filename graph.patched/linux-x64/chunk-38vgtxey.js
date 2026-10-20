// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Q}from"./chunk-n5v91jc3.js";import{M}from"./chunk-tbekftmt.js";import{P5s}from"./chunk-w1pck5fs.js";import{Ce}from"./chunk-81912758.js";import{readlinkSync as e}from"fs";import{hostname as u}from"os";class o{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var Tze=Ce(new o,(t)=>{t.pidDomain=void 0});function mhe(){if(Tze.pidSpace===null){let t="";try{t=e("/proc/self/ns/pid")}catch{t=""}Tze.pidSpace=`${u()}${t===""?"":"#"+t}`}return Tze.pidSpace}function TC(){return Tze.pidDomain??=(async()=>P5s(M()))().catch((t)=>{throw Tze.pidDomain=void 0,t}),Tze.pidDomain}import{timingSafeEqual as f}from"crypto";import{readFile as a}from"fs/promises";async function gbt(t){try{let n=Q(await a(t,"utf8"));if(n===null||typeof n!=="object")return;let i={};if("rvAuth"in n&&typeof n.rvAuth==="string")i.rvAuth=n.rvAuth;if("ptyAuth"in n&&typeof n.ptyAuth==="string")i.ptyAuth=n.ptyAuth;if("claimAuth"in n&&typeof n.claimAuth==="string")i.claimAuth=n.claimAuth;return i}catch{return}}function cL(t,n){if(typeof t!=="string"||!n||t.length===0)return!1;let i=Buffer.from(t),r=Buffer.from(n);if(i.length!==r.length)return!1;return f(i,r)}
export{Tze,mhe,TC,gbt,cL};
