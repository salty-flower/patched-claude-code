// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{si}from"./chunk-gzssw8ss.js";import{tun,cC,nun}from"./chunk-44ndjnhv.js";import{qn}from"./chunk-xpsxdvhb.js";var hSe="cc-plugin-you-should-know";var Pcr={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${qn("suggestion",o.theme)(`/plugin enable ${hSe}@${si}`)}`,isRelevant:async()=>tun(hSe)&&cC(hSe)?.defaultEnabled===!1&&nun(`${hSe}@${si}`)===void 0};export{hSe,Pcr};
