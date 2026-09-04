// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{X}from"./chunk-84crg0gy.js";import{O}from"./chunk-fgjq2155.js";import{readFile as a,readlink as u}from"fs/promises";import{hostname as e}from"os";class o{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var _se=new o;function JZe(){if(_se.pidSpace===null){let n="";_se.pidSpace=`${e()}${n===""?"":"#"+n}`}return _se.pidSpace}function xq(){return _se.pidDomain??=(async()=>{let n=O();if(n==="windows")return`darwin:${e().toLowerCase()}`;if(n!=="linux"&&n!=="wsl")return"darwin";let[t,r]=await Promise.all([a("/etc/machine-id","utf8").then((i)=>i.trim(),()=>""),u("/proc/self/ns/pid").catch(()=>"")]);return`darwin:${t}:${r}`})().catch((n)=>{throw _se.pidDomain=void 0,n}),_se.pidDomain}import{timingSafeEqual as s}from"crypto";import{readFile as f}from"fs/promises";async function fke(n){try{let t=X(await f(n,"utf8"));if(t===null||typeof t!=="object")return;let r={};if("rvAuth"in t&&typeof t.rvAuth==="string")r.rvAuth=t.rvAuth;if("ptyAuth"in t&&typeof t.ptyAuth==="string")r.ptyAuth=t.ptyAuth;if("claimAuth"in t&&typeof t.claimAuth==="string")r.claimAuth=t.claimAuth;return r}catch{return}}function VR(n,t){if(typeof n!=="string"||!t||n.length===0)return!1;let r=Buffer.from(n),i=Buffer.from(t);if(r.length!==i.length)return!1;return s(r,i)}
export{_se,JZe,xq,fke,VR};
