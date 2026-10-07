// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{am}from"./chunk-s46qgfx7.js";import{U2,bk,SA,K2,AYn}from"./chunk-y0b3kvx1.js";import{de}from"./chunk-3vptmsnb.js";async function qLt({toolUseContext:e,forkContextMessages:o,mainThreadAgentDefinition:t}){let{systemPrompt:s,userContext:m,systemContext:r}=AYn()??await i(e,t);return{systemPrompt:s,userContext:m,systemContext:r,toolUseContext:e,forkContextMessages:o,advisorModel:e.getAdvisorSetting()}}async function i(e,o){let[t,s,m]=await Promise.all([e.renderedSystemPrompt??n(e,o),bk(e.session,e.storageV5,e.credentials),U2(e.session,e.options.cacheBreakerPhrase)]);return{systemPrompt:t,userContext:s,systemContext:m}}async function n(e,o){let t=de(e),s=await SA(e.options.tools,am({permissionMode:t.mode,mainLoopModel:e.options.mainLoopModel}));return K2({mainThreadAgentDefinition:o,toolUseContext:e,customSystemPrompt:e.options.customSystemPrompt,defaultSystemPrompt:s,appendSystemPrompt:e.options.appendSystemPrompt})}
export{qLt};
