// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Aoa as a,Joa as f,bpa as l,cpa as g,wpa as p}from"./_444.js";import{KFc as n,iFc as o,mFc as s,uGc as S}from"./_701.js";import{Exd as c}from"./_839.js";function E(){let r=n(),e=l.flatMap((t)=>g(t).errors.map((i)=>i.file?i:{...i,file:a(t)}));return{settings:r.settings,errors:[...r.errors,...e]}}function u(){let r=o("localSettings");return[...E().errors.filter((t)=>!t.mcpErrorMetadata&&t.severity!=="warning"&&t.file!==r),...s()]}var m=c(()=>{p();f();S()});
export{E as uT,u as vT,m as wT};
