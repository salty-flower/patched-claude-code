// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{P0,OW,Mgt,CF,Rj,DE}from"./chunk-ky1jd84q.js";import{Iye}from"./chunk-vqaq29n2.js";import{lstat as o}from"fs/promises";import{join as s}from"path";var aWe=1e5,lWe=104857600;function kx(e){return P0(e)&&!e.includes("\\")&&!(Rj()&&DE(e))&&!Mgt(e)}async function U2n(e,t){try{let r=await o(s(e,t),{bigint:!0});return{path:t,identity:r.ino===0n?null:`${r.dev}:${r.ino}`}}catch{return{path:t,identity:null}}}function j2n(e){let t=e.flatMap(({path:n,identity:i})=>i===null?[]:[{path:n,key:`${OW(n)}\x00${i}`}]),r=t.reduce((n,{key:i})=>n.set(i,(n.get(i)??0)+1),new Map);return new Set(t.filter(({key:n})=>(r.get(n)??0)>1).map(({path:n})=>n))}function z2n(e){return e.split("\x00").filter((t)=>t.length>2&&t[1]===" ").map((t)=>({tag:t[0]??"",path:t.slice(2)}))}async function HG(e,t,r,n=null){let i=await CF(e,t,r,n);return i.kind==="read"?{...Iye(i.content),content:i.content,mode:i.mode}:null}
export{aWe,lWe,kx,U2n,j2n,z2n,HG};
