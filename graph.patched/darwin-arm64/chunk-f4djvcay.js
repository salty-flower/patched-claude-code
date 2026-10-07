// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Q}from"./chunk-v1xynczf.js";import{Wu,Uke}from"./chunk-mcq8tx7b.js";import{m9r,UOe,T$,Qnr}from"./chunk-j9c3728f.js";function JFt(){let n=Wu();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function u3n(){let n=m9r();return n&&!Uke()?{session_id:n}:{}}var u=3600000;function Dpn(){let n=Q().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<u)return{};return{...JFt(),...u3n()}}function Lpn(){Q().sessionHintsRefusedAt=Date.now()}var p3n=["entrypoint","session_id","request_id"],d=new Set(p3n);function Npn(n,s,i){let o=p3n.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=T$(s);if(!UOe.test(e))return[];let r=o.filter((t)=>Qnr(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!d.has(t)&&Qnr(e,t))?[]:o}function QFt(n){return n.includes("entrypoint")||n.includes("session_id")}function oNo(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{JFt,u3n,Dpn,Lpn,p3n,Npn,QFt,oNo};
