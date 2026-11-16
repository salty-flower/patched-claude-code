// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ls}from"./chunk-gywtf5sd.js";import{eCt,uP,_8n}from"./chunk-yjs2ay06.js";import{Dr}from"./chunk-kqwgmf3y.js";var HHe="cc-plugin-you-should-know";var Nao={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${Dr("suggestion",o.theme)(`/plugin enable ${HHe}@${ls}`)}`,isRelevant:async()=>eCt(HHe)&&uP(HHe)?.defaultEnabled===!1&&_8n(`${HHe}@${ls}`)===void 0};export{HHe,Nao};
