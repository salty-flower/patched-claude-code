// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{V}from"./chunk-akz0cj0f.js";import{B}from"./chunk-f58mzqmc.js";import{readlinkSync as a}from"fs";import{readFile as u,readlink as s}from"fs/promises";import{hostname as e}from"os";class o{pidSpace=null;pidDomain=void 0;uidsCollapse=null}var Bce=new o;function Kgt(){if(Bce.pidSpace===null){let t="";try{t=a("/proc/self/ns/pid")}catch{t=""}Bce.pidSpace=`${e()}${t===""?"":"#"+t}`}return Bce.pidSpace}function dY(){return Bce.pidDomain??=(async()=>{let t=B();if(t==="windows")return`linux:${e().toLowerCase()}`;if(t!=="linux"&&t!=="wsl")return"linux";let[n,r]=await Promise.all([u("/etc/machine-id","utf8").then((i)=>i.trim(),()=>""),s("/proc/self/ns/pid").catch(()=>"")]);return`linux:${n}:${r}`})().catch((t)=>{throw Bce.pidDomain=void 0,t}),Bce.pidDomain}import{timingSafeEqual as f}from"crypto";import{readFile as p}from"fs/promises";async function _Se(t){try{let n=V(await p(t,"utf8"));if(n===null||typeof n!=="object")return;let r={};if("rvAuth"in n&&typeof n.rvAuth==="string")r.rvAuth=n.rvAuth;if("ptyAuth"in n&&typeof n.ptyAuth==="string")r.ptyAuth=n.ptyAuth;if("claimAuth"in n&&typeof n.claimAuth==="string")r.claimAuth=n.claimAuth;return r}catch{return}}function II(t,n){if(typeof t!=="string"||!n||t.length===0)return!1;let r=Buffer.from(t),i=Buffer.from(n);if(r.length!==i.length)return!1;return f(r,i)}
export{Bce,Kgt,dY,_Se,II};
