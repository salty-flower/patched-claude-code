// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{fO,M3,ypt,lN,F2,Fw}from"./chunk-cg1hdvg4.js";import{Vme}from"./chunk-mfhyd6pd.js";import{lstat as o}from"fs/promises";import{join as s}from"path";var c6e=1e5,u6e=104857600;function gx(e){return fO(e)&&!e.includes("\\")&&!(F2()&&Fw(e))&&!ypt(e)}async function jMn(e,t){try{let r=await o(s(e,t),{bigint:!0});return{path:t,identity:r.ino===0n?null:`${r.dev}:${r.ino}`}}catch{return{path:t,identity:null}}}function WMn(e){let t=e.flatMap(({path:n,identity:i})=>i===null?[]:[{path:n,key:`${M3(n)}\x00${i}`}]),r=t.reduce((n,{key:i})=>n.set(i,(n.get(i)??0)+1),new Map);return new Set(t.filter(({key:n})=>(r.get(n)??0)>1).map(({path:n})=>n))}function zMn(e){return e.split("\x00").filter((t)=>t.length>2&&t[1]===" ").map((t)=>({tag:t[0]??"",path:t.slice(2)}))}async function E6(e,t,r,n=null){let i=await lN(e,t,r,n);return i.kind==="read"?{...Vme(i.content),content:i.content,mode:i.mode}:null}
export{c6e,u6e,gx,jMn,WMn,zMn,E6};
