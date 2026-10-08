// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Oi}from"./chunk-zza0b6kj.js";import{dlo,ov,b8t}from"./chunk-0c34z2xq.js";import{$n}from"./chunk-b715b7fq.js";var que="cc-plugin-you-should-know";var QVn={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${$n("suggestion",o.theme)(`/plugin enable ${que}@${Oi}`)}`,isRelevant:async()=>dlo(que)&&ov(que)?.defaultEnabled===!1&&b8t(`${que}@${Oi}`)===void 0};export{que,QVn};
