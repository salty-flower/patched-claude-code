// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
function TLn(e){return(e.denyMatchNames??[]).filter((t)=>t.includes(":"))}function XFi(e,t){let a;return e.map((n)=>{if(n.loadedFrom!=="mcp")return n;let s=TLn(n);if(s.length===0)return n;a??=new Set([...t.map((r)=>r.name),...e.map((r)=>r.name)]);let i=s.filter((r)=>r!==n.name&&a.has(r)),l=n.reservedLabels??[];if(i.length===l.length&&i.every((r,d)=>r===l[d]))return n;return{...n,reservedLabels:i.length===0?void 0:i}})}var Nr="Skill",s0="skill__";function m7e(e){return s0+e.replaceAll(":","__").replace(/[^a-zA-Z0-9_-]/g,"_")}function JFi(e){let t=[...e.aliases??[],...e.shedAliases??[],...e.unqualifiedName!=null?[e.unqualifiedName]:[],...TLn(e),...e.directoryListingName!==void 0?[e.directoryListingName]:[]];return t.length?t.map(m7e):void 0}
export{TLn,XFi,Nr,s0,m7e,JFi};
