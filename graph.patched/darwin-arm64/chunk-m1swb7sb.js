// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Pi}from"./chunk-nrk8z90j.js";import{lho,Fv,bQt}from"./chunk-m4qpskd4.js";import{Wn}from"./chunk-b26c6m11.js";var pme="cc-plugin-you-should-know";var eYn={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${Wn("suggestion",o.theme)(`/plugin enable ${pme}@${Pi}`)}`,isRelevant:async()=>lho(pme)&&Fv(pme)?.defaultEnabled===!1&&bQt(`${pme}@${Pi}`)===void 0};export{pme,eYn};
