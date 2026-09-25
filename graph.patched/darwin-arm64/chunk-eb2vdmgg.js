// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{qt}from"./chunk-w13amena.js";import{Q}from"./chunk-wvb0gwjm.js";import{H}from"./chunk-0dpks9t0.js";import{pvo}from"./chunk-r10w18vw.js";import{hostname as o}from"os";class e{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var TCe=qt(new e,(n)=>{n.pidDomain=void 0});function COt(){if(TCe.pidSpace===null){let n="";TCe.pidSpace=`${o()}${n===""?"":"#"+n}`}return TCe.pidSpace}function YN(){return TCe.pidDomain??=(async()=>pvo(H()))().catch((n)=>{throw TCe.pidDomain=void 0,n}),TCe.pidDomain}import{timingSafeEqual as u}from"crypto";import{readFile as a}from"fs/promises";async function Tqe(n){try{let t=Q(await a(n,"utf8"));if(t===null||typeof t!=="object")return;let i={};if("rvAuth"in t&&typeof t.rvAuth==="string")i.rvAuth=t.rvAuth;if("ptyAuth"in t&&typeof t.ptyAuth==="string")i.ptyAuth=t.ptyAuth;if("claimAuth"in t&&typeof t.claimAuth==="string")i.claimAuth=t.claimAuth;return i}catch{return}}function sO(n,t){if(typeof n!=="string"||!t||n.length===0)return!1;let i=Buffer.from(n),r=Buffer.from(t);if(i.length!==r.length)return!1;return u(i,r)}
export{Tqe,sO,TCe,COt,YN};
