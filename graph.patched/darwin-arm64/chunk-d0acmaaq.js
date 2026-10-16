// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{D}from"./chunk-xzypj06m.js";import{g,p}from"./chunk-n1esck2w.js";import{ypr,wls,RSe}from"./chunk-50eqy0qp.js";import{Tht}from"./chunk-3vzn6jff.js";import{I8}from"./chunk-xrh84csn.js";import{HRe,Git,Zoe,lFe,qR}from"./chunk-996thspe.js";import{wUn,i0t,Who,zvs,Vvs,qvs,Kvs}from"./chunk-dvmwj6gj.js";import{OYn,Ifn}from"./chunk-dk0srkv4.js";function _(d,c,u){let s=c.flat(),f=wUn(d),m=i0t(d,s,f),o=new Set(m.map((e)=>d.slice(e.from,e.to))),l=(e)=>{let i=f(e),r=i(0);for(let a of m){if(r!==-1&&r<a.from)r=i(a.from);if(r===-1)return!1;if(r+e.length<=a.to)return!0}return!1};if(c.some((e)=>!e.some((i)=>o.has(i))&&!e.some(l)))p("sdk_pasted_content","inline_paste_not_found");let P=HRe();return Kvs(d,qvs(m,Vvs(d,Who([...m,...zvs(d,s,f)]),u)),(e)=>({opener:OYn(P),body:Zoe(e),closer:Ifn(P)}),Zoe)}function T6e(d,c,u){let s=d??"",{texts:f,problem:m}=ypr(c),o=wls(u);if(m!==void 0)p("sdk_pasted_content",m);if(o.problem!==void 0)p("sdk_pasted_content",o.problem);if(f.length===0&&o.texts.length===0)return s;let l=qR();if(m===void 0&&o.problem===void 0)g("sdk_pasted_content",{tagged:l,...o.texts.length>0&&{inline:!0}});if(f.length===0&&!l)return s;let P=o.texts.map((t)=>t.trim()).filter((t)=>t.length>=Git).map((t)=>D([t,RSe(`x${t}`).slice(1).trim(),RSe(`${t}x`).slice(0,-1).trim(),RSe(t).trim()].flatMap((n)=>[n,Tht(n),I8(n)])).filter((n)=>n.length>=Git)),e=(t)=>!l?t:Array.isArray(u)?_(t,P,o.texts.map((n)=>n.trim()).filter((n)=>n!==""&&n.length<Git)):Zoe(t),i=f.map((t)=>l?lFe(t):`

${t}`).join("");if(typeof s==="string")return I8(e(s)+i);let r=s.findLastIndex((t)=>t.type==="text"),a=s.map((t,n)=>t.type!=="text"?t:n===r?{...t,text:e(t.text)}:l?{...t,text:Zoe(t.text)}:t),C=a[r];return I8(C?.type!=="text"?i===""?a:[...a,{type:"text",text:i}]:[...a.slice(0,r),{...C,text:C.text+i},...a.slice(r+1)])}
export{T6e};
