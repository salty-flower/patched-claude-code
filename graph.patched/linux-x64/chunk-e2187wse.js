// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{D}from"./chunk-eqmywwjn.js";import{g,f}from"./chunk-rhe3yjtx.js";import{Yur,Las,vbe}from"./chunk-yqf2b1c3.js";import{bht}from"./chunk-b8e5f7zw.js";import{v8}from"./chunk-ma1geb19.js";import{ARe,Lit,Voe,ZNe,zR}from"./chunk-38nf1dnm.js";import{rUn,YOt,mho,iEs,aEs,lEs,dEs}from"./chunk-7f1jmyrt.js";import{h9n,hfn}from"./chunk-dk13f5f4.js";function _(p,c,u){let s=c.flat(),m=rUn(p),d=YOt(p,s,m),o=new Set(d.map((e)=>p.slice(e.from,e.to))),l=(e)=>{let i=m(e),r=i(0);for(let a of d){if(r!==-1&&r<a.from)r=i(a.from);if(r===-1)return!1;if(r+e.length<=a.to)return!0}return!1};if(c.some((e)=>!e.some((i)=>o.has(i))&&!e.some(l)))f("sdk_pasted_content","inline_paste_not_found");let P=ARe();return dEs(p,lEs(d,aEs(p,mho([...d,...iEs(p,s,m)]),u)),(e)=>({opener:h9n(P),body:Voe(e),closer:hfn(P)}),Voe)}function bVe(p,c,u){let s=p??"",{texts:m,problem:d}=Yur(c),o=Las(u);if(d!==void 0)f("sdk_pasted_content",d);if(o.problem!==void 0)f("sdk_pasted_content",o.problem);if(m.length===0&&o.texts.length===0)return s;let l=zR();if(d===void 0&&o.problem===void 0)g("sdk_pasted_content",{tagged:l,...o.texts.length>0&&{inline:!0}});if(m.length===0&&!l)return s;let P=o.texts.map((t)=>t.trim()).filter((t)=>t.length>=Lit).map((t)=>D([t,vbe(`x${t}`).slice(1).trim(),vbe(`${t}x`).slice(0,-1).trim(),vbe(t).trim()].flatMap((n)=>[n,bht(n),v8(n)])).filter((n)=>n.length>=Lit)),e=(t)=>!l?t:Array.isArray(u)?_(t,P,o.texts.map((n)=>n.trim()).filter((n)=>n!==""&&n.length<Lit)):Voe(t),i=m.map((t)=>l?ZNe(t):`

${t}`).join("");if(typeof s==="string")return v8(e(s)+i);let r=s.findLastIndex((t)=>t.type==="text"),a=s.map((t,n)=>t.type!=="text"?t:n===r?{...t,text:e(t.text)}:l?{...t,text:Voe(t.text)}:t),C=a[r];return v8(C?.type!=="text"?i===""?a:[...a,{type:"text",text:i}]:[...a.slice(0,r),{...C,text:C.text+i},...a.slice(r+1)])}
export{bVe};
