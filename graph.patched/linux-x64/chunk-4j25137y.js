// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ls}from"./chunk-374g520d.js";import{YTt,dP,q8n}from"./chunk-dfw25e8g.js";import{Dr}from"./chunk-r7n0zwyx.js";var MHe="cc-plugin-you-should-know";var hao={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${Dr("suggestion",o.theme)(`/plugin enable ${MHe}@${ls}`)}`,isRelevant:async()=>YTt(MHe)&&dP(MHe)?.defaultEnabled===!1&&q8n(`${MHe}@${ls}`)===void 0};export{MHe,hao};
