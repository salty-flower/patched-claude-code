// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{pL,Nz,Lpt,a1,BB,zw}from"./chunk-9cqgggwr.js";import{Ume}from"./chunk-jbyksxdc.js";import{lstat as o}from"fs/promises";import{join as s}from"path";var lje=1e5,cje=104857600;function px(e){return pL(e)&&!e.includes("\\")&&!(BB()&&zw(e))&&!Lpt(e)}async function P$n(e,t){try{let r=await o(s(e,t),{bigint:!0});return{path:t,identity:r.ino===0n?null:`${r.dev}:${r.ino}`}}catch{return{path:t,identity:null}}}function M$n(e){let t=e.flatMap(({path:n,identity:i})=>i===null?[]:[{path:n,key:`${Nz(n)}\x00${i}`}]),r=t.reduce((n,{key:i})=>n.set(i,(n.get(i)??0)+1),new Map);return new Set(t.filter(({key:n})=>(r.get(n)??0)>1).map(({path:n})=>n))}function O$n(e){return e.split("\x00").filter((t)=>t.length>2&&t[1]===" ").map((t)=>({tag:t[0]??"",path:t.slice(2)}))}async function Sj(e,t,r,n=null){let i=await a1(e,t,r,n);return i.kind==="read"?{...Ume(i.content),content:i.content,mode:i.mode}:null}
export{lje,cje,px,P$n,M$n,O$n,Sj};
