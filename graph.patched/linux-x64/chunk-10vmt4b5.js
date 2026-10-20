// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{k}from"./chunk-7p6jp6kj.js";import{D}from"./chunk-dxktn51d.js";import{g,f}from"./chunk-yzndvntb.js";import{obt}from"./chunk-3wd6e2hx.js";import{Hyr,vhs,NSe}from"./chunk-xrp2jyd4.js";import{f9}from"./chunk-9w2dst2k.js";import{nPe,tdt,oie,rUe,bx}from"./chunk-rncrmfyt.js";import{tWn,uDt,Cvo,VPs,qPs,YPs,XPs}from"./chunk-2gh4h0fv.js";import{BZn,$yn}from"./chunk-cd7fb0cx.js";function xns(r){return k("tengu_ccr_external_event_record",!1)?r:void 0}function C(r,c,u){let s=c.flat(),m=tWn(r),p=uDt(r,s,m),i=new Set(p.map((e)=>r.slice(e.from,e.to))),l=(e)=>{let a=m(e),o=a(0);for(let d of p){if(o!==-1&&o<d.from)o=a(d.from);if(o===-1)return!1;if(o+e.length<=d.to)return!0}return!1};if(c.some((e)=>!e.some((a)=>i.has(a))&&!e.some(l)))f("sdk_pasted_content","inline_paste_not_found");let _=nPe();return XPs(r,YPs(p,qPs(r,Cvo([...p,...VPs(r,s,m)]),u)),(e)=>({opener:BZn(_),body:oie(e),closer:$yn(_)}),oie)}function Hqe(r,c,u){let s=r??"",{texts:m,problem:p}=Hyr(c),i=vhs(u);if(p!==void 0)f("sdk_pasted_content",p);if(i.problem!==void 0)f("sdk_pasted_content",i.problem);if(m.length===0&&i.texts.length===0)return s;let l=bx();if(p===void 0&&i.problem===void 0)g("sdk_pasted_content",{tagged:l,...i.texts.length>0&&{inline:!0}});if(m.length===0&&!l)return s;let _=i.texts.map((t)=>t.trim()).filter((t)=>t.length>=tdt).map((t)=>D([t,NSe(`x${t}`).slice(1).trim(),NSe(`${t}x`).slice(0,-1).trim(),NSe(t).trim()].flatMap((n)=>[n,obt(n),f9(n)])).filter((n)=>n.length>=tdt)),e=(t)=>!l?t:Array.isArray(u)?C(t,_,i.texts.map((n)=>n.trim()).filter((n)=>n!==""&&n.length<tdt)):oie(t),a=m.map((t)=>l?rUe(t):`

${t}`).join("");if(typeof s==="string")return f9(e(s)+a);let o=s.findLastIndex((t)=>t.type==="text"),d=s.map((t,n)=>t.type!=="text"?t:n===o?{...t,text:e(t.text)}:l?{...t,text:oie(t.text)}:t),P=d[o];return f9(P?.type!=="text"?a===""?d:[...d,{type:"text",text:a}]:[...d.slice(0,o),{...P,text:P.text+a},...d.slice(o+1)])}
export{xns,Hqe};
