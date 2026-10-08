// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ii}from"./chunk-wn3mk0qg.js";import{Lao,nE,o8t}from"./chunk-p7b21nkd.js";import{Fn}from"./chunk-s75ca8vs.js";var jue="cc-plugin-you-should-know";var OVn={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${Fn("suggestion",o.theme)(`/plugin enable ${jue}@${Ii}`)}`,isRelevant:async()=>Lao(jue)&&nE(jue)?.defaultEnabled===!1&&o8t(`${jue}@${Ii}`)===void 0};export{jue,OVn};
