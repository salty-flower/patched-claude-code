// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{V}from"./chunk-ynzt0fm1.js";import{D}from"./chunk-zyp65cht.js";import{readFile as a,readlink as u}from"fs/promises";import{hostname as e}from"os";class o{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var ype=new o;function Qbt(){if(ype.pidSpace===null){let n="";ype.pidSpace=`${e()}${n===""?"":"#"+n}`}return ype.pidSpace}function LY(){return ype.pidDomain??=(async()=>{let n=D();if(n==="windows")return`darwin:${e().toLowerCase()}`;if(n!=="linux"&&n!=="wsl")return"darwin";let[t,r]=await Promise.all([a("/etc/machine-id","utf8").then((i)=>i.trim(),()=>""),u("/proc/self/ns/pid").catch(()=>"")]);return`darwin:${t}:${r}`})().catch((n)=>{throw ype.pidDomain=void 0,n}),ype.pidDomain}import{timingSafeEqual as s}from"crypto";import{readFile as f}from"fs/promises";async function yAe(n){try{let t=V(await f(n,"utf8"));if(t===null||typeof t!=="object")return;let r={};if("rvAuth"in t&&typeof t.rvAuth==="string")r.rvAuth=t.rvAuth;if("ptyAuth"in t&&typeof t.ptyAuth==="string")r.ptyAuth=t.ptyAuth;if("claimAuth"in t&&typeof t.claimAuth==="string")r.claimAuth=t.claimAuth;return r}catch{return}}function aR(n,t){if(typeof n!=="string"||!t||n.length===0)return!1;let r=Buffer.from(n),i=Buffer.from(t);if(r.length!==i.length)return!1;return s(r,i)}
export{ype,Qbt,LY,yAe,aR};
