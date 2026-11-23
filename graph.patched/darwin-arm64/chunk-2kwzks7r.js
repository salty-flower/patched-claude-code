// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function ewa(e){let n=e.indexOf(":");if(n<=0)return;let i=e.slice(n+1);return i.endsWith("/SKILL.md")&&/^[A-Za-z][A-Za-z0-9+.-]*:./.test(i)?{server:e.slice(0,n),uri:i}:void 0}function GKn(e){return(e.denyMatchNames??[]).filter((n)=>n.includes(":"))}function twa(e,n){let i;return e.map((r)=>{if(r.loadedFrom!=="mcp")return r;let s=GKn(r);if(s.length===0)return r;i??=new Set([...n.map((t)=>t.name),...e.map((t)=>t.name)]);let a=s.filter((t)=>t!==r.name&&i.has(t)),l=r.reservedLabels??[];if(a.length===l.length&&a.every((t,d)=>t===l[d]))return r;return{...r,reservedLabels:a.length===0?void 0:a}})}var _r="Skill",VL="skill__";function Dst(e){return VL+e.replaceAll(":","__").replace(/[^a-zA-Z0-9_-]/g,"_")}function nwa(e){let n=[...e.aliases??[],...e.shedAliases??[],...e.unqualifiedName!=null?[e.unqualifiedName]:[],...GKn(e),...e.directoryListingName!==void 0?[e.directoryListingName]:[]];return n.length?n.map(Dst):void 0}
export{ewa,GKn,twa,_r,VL,Dst,nwa};
