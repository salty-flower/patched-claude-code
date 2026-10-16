// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{_i}from"./chunk-jmghkf3s.js";import{FPo,Fk,Bin}from"./chunk-ynz70n3e.js";import{Kn}from"./chunk-sanhn7bd.js";var e_e="cc-plugin-you-should-know";var $or={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${Kn("suggestion",o.theme)(`/plugin enable ${e_e}@${_i}`)}`,isRelevant:async()=>FPo(e_e)&&Fk(e_e)?.defaultEnabled===!1&&Bin(`${e_e}@${_i}`)===void 0};export{e_e,$or};
