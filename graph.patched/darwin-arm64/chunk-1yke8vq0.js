// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ee}from"./chunk-h07kk1k6.js";import{rp,UHe}from"./chunk-jn6attna.js";import{iwo,r1e,yj,xAr}from"./chunk-re7w9b8d.js";function bTt(){let n=rp();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function tpr(){let n=iwo();return n&&!UHe()?{session_id:n}:{}}var u=3600000;function dOn(){let n=ee().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<u)return{};return{...bTt(),...tpr()}}function cOn(){ee().sessionHintsRefusedAt=Date.now()}var npr=["entrypoint","session_id","request_id"],d=new Set(npr);function uOn(n,s,i){let o=npr.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=yj(s);if(!r1e.test(e))return[];let r=o.filter((t)=>xAr(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!d.has(t)&&xAr(e,t))?[]:o}function c9t(n){return n.includes("entrypoint")||n.includes("session_id")}function tls(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{bTt,tpr,dOn,cOn,npr,uOn,c9t,tls};
