// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{np}from"./chunk-ce4ppmnp.js";import{UO,_Sn,y_,rT,CS}from"./chunk-2byjyg85.js";import{de}from"./chunk-ftz1fck4.js";async function z5e({toolUseContext:e,forkContextMessages:t,mainThreadAgentDefinition:o}){let{systemPrompt:s,userContext:r,systemContext:m}=_Sn()??await i(e,o);return{systemPrompt:s,userContext:r,systemContext:m,toolUseContext:e,forkContextMessages:t,advisorModel:e.getAdvisorSetting()}}async function i(e,t){let[o,s,r]=await Promise.all([e.renderedSystemPrompt??n(e,t),rT(e.session,e.storageV5,e.credentials),y_(e.session,e.options.cacheBreakerPhrase)]);return{systemPrompt:o,userContext:s,systemContext:r}}async function n(e,t){let o=de(e),s=await CS(e.options.tools,np({permissionMode:o.mode,mainLoopModel:e.options.mainLoopModel}),Array.from(o.additionalWorkingDirectories.keys()));return UO({mainThreadAgentDefinition:t,toolUseContext:e,customSystemPrompt:e.options.customSystemPrompt,defaultSystemPrompt:s,appendSystemPrompt:e.options.appendSystemPrompt})}
export{z5e};
