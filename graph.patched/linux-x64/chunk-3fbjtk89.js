// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ee}from"./chunk-6hv6bqxx.js";import{rp,HHe}from"./chunk-en4g449d.js";import{PSo,KUe,aj,lAr}from"./chunk-4r9vggp4.js";function lCt(){let n=rp();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function Mur(){let n=PSo();return n&&!HHe()?{session_id:n}:{}}var u=3600000;function jIn(){let n=ee().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<u)return{};return{...lCt(),...Mur()}}function WIn(){ee().sessionHintsRefusedAt=Date.now()}var Hur=["entrypoint","session_id","request_id"],d=new Set(Hur);function zIn(n,s,i){let o=Hur.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=aj(s);if(!KUe.test(e))return[];let r=o.filter((t)=>lAr(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!d.has(t)&&lAr(e,t))?[]:o}function X5t(n){return n.includes("entrypoint")||n.includes("session_id")}function cas(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{lCt,Mur,jIn,WIn,Hur,zIn,X5t,cas};
