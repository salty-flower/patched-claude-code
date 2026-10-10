// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{pg}from"./chunk-bk5ct2gw.js";import{hz,xC,GT,Ez,Tir}from"./chunk-sfn1dbxq.js";import{de}from"./chunk-p46ep603.js";async function F2t({toolUseContext:e,forkContextMessages:o,mainThreadAgentDefinition:t}){let{systemPrompt:s,userContext:m,systemContext:r}=Tir()??await i(e,t);return{systemPrompt:s,userContext:m,systemContext:r,toolUseContext:e,forkContextMessages:o,advisorModel:e.getAdvisorSetting()}}async function i(e,o){let[t,s,m]=await Promise.all([e.renderedSystemPrompt??n(e,o),xC(e.session,e.storageV5,e.credentials),hz(e.session,e.options.cacheBreakerPhrase)]);return{systemPrompt:t,userContext:s,systemContext:m}}async function n(e,o){let t=de(e),s=await GT(e.options.tools,pg({permissionMode:t.mode,mainLoopModel:e.options.mainLoopModel}));return Ez({mainThreadAgentDefinition:o,toolUseContext:e,customSystemPrompt:e.options.customSystemPrompt,defaultSystemPrompt:s,appendSystemPrompt:e.options.appendSystemPrompt})}
export{F2t};
