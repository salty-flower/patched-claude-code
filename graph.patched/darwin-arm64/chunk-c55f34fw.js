// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
function Son(e){return(e.denyMatchNames??[]).filter((a)=>a.includes(":"))}function cHs(e,a){let l;return e.map((n)=>{if(n.loadedFrom!=="mcp")return n;let i=Son(n);if(i.length===0)return n;l??=new Set([...a.map((r)=>r.name),...e.map((r)=>r.name)]);let t=i.filter((r)=>r!==n.name&&l.has(r)),s=n.reservedLabels??[];if(t.length===s.length&&t.every((r,d)=>r===s[d]))return n;return{...n,reservedLabels:t.length===0?void 0:t}})}var mo="Skill",RG="skill__";function RIe(e){return RG+e.replaceAll(":","__").replace(/[^a-zA-Z0-9_-]/g,"_")}function uHs(e){let a=[...e.aliases??[],...e.shedAliases??[],...e.unqualifiedName!=null?[e.unqualifiedName]:[],...Son(e)];return a.length?a.map(RIe):void 0}
export{Son,cHs,mo,RG,RIe,uHs};
