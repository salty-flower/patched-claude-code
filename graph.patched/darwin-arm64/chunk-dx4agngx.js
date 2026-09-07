// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{rp}from"./chunk-n495pc0t.js";import{EO,Odn,D_,nC,OS}from"./chunk-1692k4g5.js";import{ce}from"./chunk-n7zmtfbc.js";async function $it({toolUseContext:e,forkContextMessages:t,mainThreadAgentDefinition:o}){let{systemPrompt:s,userContext:r,systemContext:m}=Odn()??await i(e,o);return{systemPrompt:s,userContext:r,systemContext:m,toolUseContext:e,forkContextMessages:t,advisorModel:e.getAdvisorSetting()}}async function i(e,t){let[o,s,r]=await Promise.all([e.renderedSystemPrompt??n(e,t),nC(e.session,e.storageV5,e.credentials),D_(e.session,e.options.cacheBreakerPhrase)]);return{systemPrompt:o,userContext:s,systemContext:r}}async function n(e,t){let o=ce(e),s=await OS(e.options.tools,rp({permissionMode:o.mode,mainLoopModel:e.options.mainLoopModel}),Array.from(o.additionalWorkingDirectories.keys()));return EO({mainThreadAgentDefinition:t,toolUseContext:e,customSystemPrompt:e.options.customSystemPrompt,defaultSystemPrompt:s,appendSystemPrompt:e.options.appendSystemPrompt})}
export{$it};
