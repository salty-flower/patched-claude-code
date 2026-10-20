// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{q$n,Smo}from"./chunk-rncrmfyt.js";import{randomUUID as n}from"crypto";function c$e(t){let e=Smo(t,q$n(t,t));return e===null?t:[...t,r(e)]}var Coo=(t)=>r(Smo(t,q$n(t,t))??{type:"session_cron_carry",tasks:[]}),r=(t)=>({attachment:t,type:"attachment",uuid:n(),timestamp:new Date().toISOString()});
export{c$e,Coo};
