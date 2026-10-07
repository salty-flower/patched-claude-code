// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{xi}from"./chunk-hyvfy8xz.js";import{RZr,Ov,n3t}from"./chunk-ms3ntjy4.js";import{Dn}from"./chunk-vv3gwe91.js";var Zce="cc-plugin-you-should-know";var ejn={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${Dn("suggestion",o.theme)(`/plugin enable ${Zce}@${xi}`)}`,isRelevant:async()=>RZr(Zce)&&Ov(Zce)?.defaultEnabled===!1&&n3t(`${Zce}@${xi}`)===void 0};export{Zce,ejn};
