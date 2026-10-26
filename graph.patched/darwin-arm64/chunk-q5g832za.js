// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{ee}from"./chunk-d7b0m8qy.js";import{O}from"./chunk-dz0rx1wn.js";import{Uii}from"./chunk-e01m27p0.js";import{Ee}from"./chunk-f9xfyhm1.js";import{hostname as o}from"os";class e{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var kKe=Ee(new e,(n)=>{n.pidDomain=void 0});function gSe(){if(kKe.pidSpace===null){let n="";kKe.pidSpace=`${o()}${n===""?"":"#"+n}`}return kKe.pidSpace}function SR(){return kKe.pidDomain??=(async()=>Uii(O()))().catch((n)=>{throw kKe.pidDomain=void 0,n}),kKe.pidDomain}import{timingSafeEqual as u}from"crypto";import{readFile as a}from"fs/promises";async function wkt(n){try{let t=ee(await a(n,"utf8"));if(t===null||typeof t!=="object")return;let i={};if("rvAuth"in t&&typeof t.rvAuth==="string")i.rvAuth=t.rvAuth;if("ptyAuth"in t&&typeof t.ptyAuth==="string")i.ptyAuth=t.ptyAuth;if("claimAuth"in t&&typeof t.claimAuth==="string")i.claimAuth=t.claimAuth;return i}catch{return}}function xL(n,t){if(typeof n!=="string"||!t||n.length===0)return!1;let i=Buffer.from(n),r=Buffer.from(t);if(i.length!==r.length)return!1;return u(i,r)}
export{kKe,gSe,SR,wkt,xL};
