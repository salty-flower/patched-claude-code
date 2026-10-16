// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{AMn,mao}from"./chunk-996thspe.js";import{randomUUID as n}from"crypto";function WLe(t){let e=mao(t,AMn(t,t));return e===null?t:[...t,r(e)]}var xQr=(t)=>r(mao(t,AMn(t,t))??{type:"session_cron_carry",tasks:[]}),r=(t)=>({attachment:t,type:"attachment",uuid:n(),timestamp:new Date().toISOString()});
export{WLe,xQr};
