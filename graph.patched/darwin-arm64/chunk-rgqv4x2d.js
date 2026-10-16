// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{readFile as r,readlink as s}from"fs/promises";import{hostname as i}from"os";import{join as u}from"path";function s2s(n){return u(n,"sessions")}var Bht=262144;function i2s(n){let e=n.replace(/\.json$/,""),t=parseInt(e,10);if(isNaN(t))return null;return{pid:t,canonical:String(t)===e}}var d=["interactive","bg","daemon","daemon-worker"];function a(n){return d.includes(n)?n:void 0}var p=["busy","shell","idle","waiting"];function c(n){return p.includes(n)?n:void 0}var S=4000000000000000;function lUt(n){return typeof n==="number"&&Number.isFinite(n)&&n>=0&&n<=S}function Vdn(n){return lUt(n)?n:void 0}function a2s(n){let e=typeof n==="object"&&n!==null?n:{};return{cwd:typeof e.cwd==="string"?e.cwd:"?",startedAt:Vdn(e.startedAt)??0,procStart:typeof e.procStart==="string"?e.procStart:void 0,...typeof e.procStartFt==="string"&&{procStartFt:e.procStartFt},kind:a(e.kind),sessionId:typeof e.sessionId==="string"?e.sessionId:void 0,status:c(e.status),entrypoint:typeof e.entrypoint==="string"?e.entrypoint:void 0,...typeof e.pidDomain==="string"&&{pidDomain:e.pidDomain}}}function Ra(n){if(n<=1)return!1;try{return process.kill(n,0),!0}catch{return!1}}async function l2s(n){if(n==="windows")return`darwin:${i().toLowerCase()}`;if(n!=="linux"&&n!=="wsl")return"darwin";let[e,t]=await Promise.all([r("/etc/machine-id","utf8").then((o)=>o.trim(),()=>""),s("/proc/self/ns/pid").catch(()=>"")]);return`darwin:${e}:${t}`}
export{s2s,Bht,i2s,lUt,Vdn,a2s,Ra,l2s};
