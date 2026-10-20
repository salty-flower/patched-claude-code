// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f$n,Ymo}from"./chunk-na9nw575.js";import{randomUUID as n}from"crypto";function SFe(t){let e=Ymo(t,f$n(t,t));return e===null?t:[...t,r(e)]}var Qoo=(t)=>r(Ymo(t,f$n(t,t))??{type:"session_cron_carry",tasks:[]}),r=(t)=>({attachment:t,type:"attachment",uuid:n(),timestamp:new Date().toISOString()});
export{SFe,Qoo};
