// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{oi}from"./chunk-ww4tybgt.js";import{Fcn,lT,Ucn}from"./chunk-s91j0m1c.js";import{qn}from"./chunk-q4m3v37f.js";var ube="cc-plugin-you-should-know";var fcr={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${qn("suggestion",o.theme)(`/plugin enable ${ube}@${oi}`)}`,isRelevant:async()=>Fcn(ube)&&lT(ube)?.defaultEnabled===!1&&Ucn(`${ube}@${oi}`)===void 0};export{ube,fcr};
