// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{k}from"./chunk-bvn0epzr.js";import{D}from"./chunk-kpqr86hf.js";import{g,p}from"./chunk-53e7d9dh.js";import{pSt}from"./chunk-q2853ac5.js";import{t_r,ays,Wbe}from"./chunk-2nyqwmp2.js";import{wY}from"./chunk-djas1snj.js";import{dPe,ddt,uie,pUe,Ex}from"./chunk-na9nw575.js";import{_Wn,EHt,tvo,OIs,MIs,HIs,DIs}from"./chunk-d7eqjts1.js";import{rer,Zyn}from"./chunk-jpsfygfr.js";function urs(r){return k("tengu_ccr_external_event_record",!1)?r:void 0}function C(r,c,u){let s=c.flat(),f=_Wn(r),m=EHt(r,s,f),i=new Set(m.map((e)=>r.slice(e.from,e.to))),l=(e)=>{let a=f(e),o=a(0);for(let d of m){if(o!==-1&&o<d.from)o=a(d.from);if(o===-1)return!1;if(o+e.length<=d.to)return!0}return!1};if(c.some((e)=>!e.some((a)=>i.has(a))&&!e.some(l)))p("sdk_pasted_content","inline_paste_not_found");let _=dPe();return DIs(r,HIs(m,MIs(r,tvo([...m,...OIs(r,s,f)]),u)),(e)=>({opener:rer(_),body:uie(e),closer:Zyn(_)}),uie)}function jKe(r,c,u){let s=r??"",{texts:f,problem:m}=t_r(c),i=ays(u);if(m!==void 0)p("sdk_pasted_content",m);if(i.problem!==void 0)p("sdk_pasted_content",i.problem);if(f.length===0&&i.texts.length===0)return s;let l=Ex();if(m===void 0&&i.problem===void 0)g("sdk_pasted_content",{tagged:l,...i.texts.length>0&&{inline:!0}});if(f.length===0&&!l)return s;let _=i.texts.map((t)=>t.trim()).filter((t)=>t.length>=ddt).map((t)=>D([t,Wbe(`x${t}`).slice(1).trim(),Wbe(`${t}x`).slice(0,-1).trim(),Wbe(t).trim()].flatMap((n)=>[n,pSt(n),wY(n)])).filter((n)=>n.length>=ddt)),e=(t)=>!l?t:Array.isArray(u)?C(t,_,i.texts.map((n)=>n.trim()).filter((n)=>n!==""&&n.length<ddt)):uie(t),a=f.map((t)=>l?pUe(t):`

${t}`).join("");if(typeof s==="string")return wY(e(s)+a);let o=s.findLastIndex((t)=>t.type==="text"),d=s.map((t,n)=>t.type!=="text"?t:n===o?{...t,text:e(t.text)}:l?{...t,text:uie(t.text)}:t),P=d[o];return wY(P?.type!=="text"?a===""?d:[...d,{type:"text",text:a}]:[...d.slice(0,o),{...P,text:P.text+a},...d.slice(o+1)])}
export{urs,jKe};
