// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{X}from"./chunk-gvckezfq.js";import{Ud,MSe}from"./chunk-n8h76tq4.js";import{RIr,zAe,DW,hWn}from"./chunk-8h7pdkcw.js";function iRt(){let n=Ud();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function oMn(){let n=RIr();return n&&!MSe()?{session_id:n}:{}}var u=3600000;function WJt(){let n=X().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<u)return{};return{...iRt(),...oMn()}}function GJt(){X().sessionHintsRefusedAt=Date.now()}var sMn=["entrypoint","session_id","request_id"],d=new Set(sMn);function zJt(n,s,i){let o=sMn.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=DW(s);if(!zAe.test(e))return[];let r=o.filter((t)=>hWn(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!d.has(t)&&hWn(e,t))?[]:o}function aRt(n){return n.includes("entrypoint")||n.includes("session_id")}function afo(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{iRt,oMn,WJt,GJt,sMn,zJt,aRt,afo};
