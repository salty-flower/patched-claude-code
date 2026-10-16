// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{_i}from"./chunk-hc3mrz77.js";import{dPo,Lk,Tin}from"./chunk-3x4atckz.js";import{qn}from"./chunk-ak80kk9v.js";var Yye="cc-plugin-you-should-know";var kor={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${qn("suggestion",o.theme)(`/plugin enable ${Yye}@${_i}`)}`,isRelevant:async()=>dPo(Yye)&&Lk(Yye)?.defaultEnabled===!1&&Tin(`${Yye}@${_i}`)===void 0};export{Yye,kor};
