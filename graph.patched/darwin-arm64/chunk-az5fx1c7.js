// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{MD,U9,Ngt,HF,D2,OE}from"./chunk-ppya84z7.js";import{I_e}from"./chunk-esy9dnfe.js";import{lstat as o}from"fs/promises";import{join as s}from"path";var r9e=1e5,o9e=104857600;function xx(e){return MD(e)&&!e.includes("\\")&&!(D2()&&OE(e))&&!Ngt(e)}async function m6n(e,t){try{let r=await o(s(e,t),{bigint:!0});return{path:t,identity:r.ino===0n?null:`${r.dev}:${r.ino}`}}catch{return{path:t,identity:null}}}function g6n(e){let t=e.flatMap(({path:n,identity:i})=>i===null?[]:[{path:n,key:`${U9(n)}\x00${i}`}]),r=t.reduce((n,{key:i})=>n.set(i,(n.get(i)??0)+1),new Map);return new Set(t.filter(({key:n})=>(r.get(n)??0)>1).map(({path:n})=>n))}function h6n(e){return e.split("\x00").filter((t)=>t.length>2&&t[1]===" ").map((t)=>({tag:t[0]??"",path:t.slice(2)}))}async function AW(e,t,r,n=null){let i=await HF(e,t,r,n);return i.kind==="read"?{...I_e(i.content),content:i.content,mode:i.mode}:null}
export{r9e,o9e,xx,m6n,g6n,h6n,AW};
