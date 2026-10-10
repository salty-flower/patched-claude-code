// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
function l7t(e){return(e.denyMatchNames??[]).filter((a)=>a.includes(":"))}function whs(e,a){let l;return e.map((n)=>{if(n.loadedFrom!=="mcp")return n;let i=l7t(n);if(i.length===0)return n;l??=new Set([...a.map((r)=>r.name),...e.map((r)=>r.name)]);let t=i.filter((r)=>r!==n.name&&l.has(r)),s=n.reservedLabels??[];if(t.length===s.length&&t.every((r,d)=>r===s[d]))return n;return{...n,reservedLabels:t.length===0?void 0:t}})}var Ro="Skill",X2="skill__";function xTe(e){return X2+e.replaceAll(":","__").replace(/[^a-zA-Z0-9_-]/g,"_")}function Ehs(e){let a=[...e.aliases??[],...e.shedAliases??[],...e.unqualifiedName!=null?[e.unqualifiedName]:[],...l7t(e)];return a.length?a.map(xTe):void 0}
export{l7t,whs,Ro,X2,xTe,Ehs};
