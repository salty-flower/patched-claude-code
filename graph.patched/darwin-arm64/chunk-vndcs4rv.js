// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Y}from"./chunk-bnfhb7sj.js";import{l2s}from"./chunk-rgqv4x2d.js";import{O}from"./chunk-c1a9wnpp.js";import{je}from"./chunk-qh32bfzk.js";import{hostname as o}from"os";class e{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var uWe=je(new e,(n)=>{n.pidDomain=void 0});function dge(){if(uWe.pidSpace===null){let n="";uWe.pidSpace=`${o()}${n===""?"":"#"+n}`}return uWe.pidSpace}function KA(){return uWe.pidDomain??=(async()=>l2s(O()))().catch((n)=>{throw uWe.pidDomain=void 0,n}),uWe.pidDomain}import{timingSafeEqual as u}from"crypto";import{readFile as a}from"fs/promises";async function Fht(n){try{let t=Y(await a(n,"utf8"));if(t===null||typeof t!=="object")return;let i={};if("rvAuth"in t&&typeof t.rvAuth==="string")i.rvAuth=t.rvAuth;if("ptyAuth"in t&&typeof t.ptyAuth==="string")i.ptyAuth=t.ptyAuth;if("claimAuth"in t&&typeof t.claimAuth==="string")i.claimAuth=t.claimAuth;return i}catch{return}}function PM(n,t){if(typeof n!=="string"||!t||n.length===0)return!1;let i=Buffer.from(n),r=Buffer.from(t);if(i.length!==r.length)return!1;return u(i,r)}
export{uWe,dge,KA,Fht,PM};
