// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function uSa(e){let n=e.indexOf(":");if(n<=0)return;let i=e.slice(n+1);return i.endsWith("/SKILL.md")&&/^[A-Za-z][A-Za-z0-9+.-]*:./.test(i)?{server:e.slice(0,n),uri:i}:void 0}function v3n(e){return(e.denyMatchNames??[]).filter((n)=>n.includes(":"))}function fSa(e,n){let i;return e.map((r)=>{if(r.loadedFrom!=="mcp")return r;let s=v3n(r);if(s.length===0)return r;i??=new Set([...n.map((t)=>t.name),...e.map((t)=>t.name)]);let a=s.filter((t)=>t!==r.name&&i.has(t)),l=r.reservedLabels??[];if(a.length===l.length&&a.every((t,d)=>t===l[d]))return r;return{...r,reservedLabels:a.length===0?void 0:a}})}var _r="Skill",WL="skill__";function Est(e){return WL+e.replaceAll(":","__").replace(/[^a-zA-Z0-9_-]/g,"_")}function pSa(e){let n=[...e.aliases??[],...e.shedAliases??[],...e.unqualifiedName!=null?[e.unqualifiedName]:[],...v3n(e),...e.directoryListingName!==void 0?[e.directoryListingName]:[]];return n.length?n.map(Est):void 0}
export{uSa,v3n,fSa,_r,WL,Est,pSa};
