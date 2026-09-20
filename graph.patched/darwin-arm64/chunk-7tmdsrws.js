// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{X}from"./chunk-qmm87fyw.js";import{D}from"./chunk-vzm3bfp5.js";import{tUr}from"./chunk-sfgn0tng.js";import{hr}from"./chunk-97b7ekeh.js";import{hostname as o}from"os";class e{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var rme=hr(new e,(n)=>{n.pidDomain=void 0});function ogt(){if(rme.pidSpace===null){let n="";rme.pidSpace=`${o()}${n===""?"":"#"+n}`}return rme.pidSpace}function yM(){return rme.pidDomain??=(async()=>tUr(D()))().catch((n)=>{throw rme.pidDomain=void 0,n}),rme.pidDomain}import{timingSafeEqual as u}from"crypto";import{readFile as a}from"fs/promises";async function INe(n){try{let t=X(await a(n,"utf8"));if(t===null||typeof t!=="object")return;let i={};if("rvAuth"in t&&typeof t.rvAuth==="string")i.rvAuth=t.rvAuth;if("ptyAuth"in t&&typeof t.ptyAuth==="string")i.ptyAuth=t.ptyAuth;if("claimAuth"in t&&typeof t.claimAuth==="string")i.claimAuth=t.claimAuth;return i}catch{return}}function _0(n,t){if(typeof n!=="string"||!t||n.length===0)return!1;let i=Buffer.from(n),r=Buffer.from(t);if(i.length!==r.length)return!1;return u(i,r)}
export{INe,_0,rme,ogt,yM};
