// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{q}from"./chunk-wbbe5mtc.js";import{Igr}from"./chunk-52k5bsea.js";import{Ss}from"./chunk-vb5q0enb.js";import{O}from"./chunk-10wetekf.js";import{hostname as o}from"os";class e{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var sle=Ss(new e,(n)=>{n.pidDomain=void 0});function Jrt(){if(sle.pidSpace===null){let n="";sle.pidSpace=`${o()}${n===""?"":"#"+n}`}return sle.pidSpace}function LO(){return sle.pidDomain??=(async()=>Igr(O()))().catch((n)=>{throw sle.pidDomain=void 0,n}),sle.pidDomain}import{timingSafeEqual as u}from"crypto";import{readFile as a}from"fs/promises";async function LHe(n){try{let t=q(await a(n,"utf8"));if(t===null||typeof t!=="object")return;let i={};if("rvAuth"in t&&typeof t.rvAuth==="string")i.rvAuth=t.rvAuth;if("ptyAuth"in t&&typeof t.ptyAuth==="string")i.ptyAuth=t.ptyAuth;if("claimAuth"in t&&typeof t.claimAuth==="string")i.claimAuth=t.claimAuth;return i}catch{return}}function CR(n,t){if(typeof n!=="string"||!t||n.length===0)return!1;let i=Buffer.from(n),r=Buffer.from(t);if(i.length!==r.length)return!1;return u(i,r)}
export{LHe,CR,sle,Jrt,LO};
