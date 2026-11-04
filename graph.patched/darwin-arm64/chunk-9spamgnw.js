// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{ai}from"./chunk-h21zbzen.js";import{bmt,oA,uNn}from"./chunk-6yrfnx1p.js";import{ar}from"./chunk-pbrtsn5h.js";var aPe="cc-plugin-you-should-know";var iGr={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${ar("suggestion",o.theme)(`/plugin enable ${aPe}@${ai}`)}`,isRelevant:async()=>bmt(aPe)&&oA(aPe)?.defaultEnabled===!1&&uNn(`${aPe}@${ai}`)===void 0};export{aPe,iGr};
