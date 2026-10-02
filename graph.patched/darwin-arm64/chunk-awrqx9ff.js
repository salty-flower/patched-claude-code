// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{ct}from"./chunk-2j7zyd8v.js";import{J}from"./chunk-3wz0srxw.js";import{H}from"./chunk-zwbw6dvp.js";import{zUo}from"./chunk-aker56jp.js";import{hostname as o}from"os";class e{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var YRe=ct(new e,(n)=>{n.pidDomain=void 0});function XRe(){if(YRe.pidSpace===null){let n="";YRe.pidSpace=`${o()}${n===""?"":"#"+n}`}return YRe.pidSpace}function XI(){return YRe.pidDomain??=(async()=>zUo(H()))().catch((n)=>{throw YRe.pidDomain=void 0,n}),YRe.pidDomain}import{timingSafeEqual as u}from"crypto";import{readFile as a}from"fs/promises";async function rYe(n){try{let t=J(await a(n,"utf8"));if(t===null||typeof t!=="object")return;let i={};if("rvAuth"in t&&typeof t.rvAuth==="string")i.rvAuth=t.rvAuth;if("ptyAuth"in t&&typeof t.ptyAuth==="string")i.ptyAuth=t.ptyAuth;if("claimAuth"in t&&typeof t.claimAuth==="string")i.claimAuth=t.claimAuth;return i}catch{return}}function VD(n,t){if(typeof n!=="string"||!t||n.length===0)return!1;let i=Buffer.from(n),r=Buffer.from(t);if(i.length!==r.length)return!1;return u(i,r)}
export{YRe,XRe,XI,rYe,VD};
