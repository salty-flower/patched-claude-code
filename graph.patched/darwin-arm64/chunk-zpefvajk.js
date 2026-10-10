// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ge}from"./chunk-ae84tp6z.js";import{Y}from"./chunk-gyf58rwf.js";import{zTs}from"./chunk-akfkn8xh.js";import{O}from"./chunk-xaes9ysz.js";import{hostname as o}from"os";class e{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var N$e=Ge(new e,(n)=>{n.pidDomain=void 0});function Pue(){if(N$e.pidSpace===null){let n="";N$e.pidSpace=`${o()}${n===""?"":"#"+n}`}return N$e.pidSpace}function JA(){return N$e.pidDomain??=(async()=>zTs(O()))().catch((n)=>{throw N$e.pidDomain=void 0,n}),N$e.pidDomain}import{timingSafeEqual as u}from"crypto";import{readFile as a}from"fs/promises";async function ddt(n){try{let t=Y(await a(n,"utf8"));if(t===null||typeof t!=="object")return;let i={};if("rvAuth"in t&&typeof t.rvAuth==="string")i.rvAuth=t.rvAuth;if("ptyAuth"in t&&typeof t.ptyAuth==="string")i.ptyAuth=t.ptyAuth;if("claimAuth"in t&&typeof t.claimAuth==="string")i.claimAuth=t.claimAuth;return i}catch{return}}function hH(n,t){if(typeof n!=="string"||!t||n.length===0)return!1;let i=Buffer.from(n),r=Buffer.from(t);if(i.length!==r.length)return!1;return u(i,r)}
export{N$e,Pue,JA,ddt,hH};
