// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{qe}from"./chunk-5qeme8w3.js";import{X}from"./chunk-f8eqwxpt.js";import{O}from"./chunk-qfs4y3ww.js";import{oas}from"./chunk-04n4xm68.js";import{hostname as o}from"os";class e{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var LMe=qe(new e,(n)=>{n.pidDomain=void 0});function Nae(){if(LMe.pidSpace===null){let n="";LMe.pidSpace=`${o()}${n===""?"":"#"+n}`}return LMe.pidSpace}function FC(){return LMe.pidDomain??=(async()=>oas(O()))().catch((n)=>{throw LMe.pidDomain=void 0,n}),LMe.pidDomain}import{timingSafeEqual as u}from"crypto";import{readFile as a}from"fs/promises";async function frt(n){try{let t=X(await a(n,"utf8"));if(t===null||typeof t!=="object")return;let i={};if("rvAuth"in t&&typeof t.rvAuth==="string")i.rvAuth=t.rvAuth;if("ptyAuth"in t&&typeof t.ptyAuth==="string")i.ptyAuth=t.ptyAuth;if("claimAuth"in t&&typeof t.claimAuth==="string")i.claimAuth=t.claimAuth;return i}catch{return}}function xN(n,t){if(typeof n!=="string"||!t||n.length===0)return!1;let i=Buffer.from(n),r=Buffer.from(t);if(i.length!==r.length)return!1;return u(i,r)}
export{LMe,Nae,FC,frt,xN};
