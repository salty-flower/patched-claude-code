// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{np}from"./chunk-e02s7cks.js";import{YD,Wbn,b_,sT,Rb}from"./chunk-e55d0yhx.js";import{de}from"./chunk-hcgbp53n.js";async function n5e({toolUseContext:e,forkContextMessages:t,mainThreadAgentDefinition:o}){let{systemPrompt:s,userContext:r,systemContext:m}=Wbn()??await i(e,o);return{systemPrompt:s,userContext:r,systemContext:m,toolUseContext:e,forkContextMessages:t,advisorModel:e.getAdvisorSetting()}}async function i(e,t){let[o,s,r]=await Promise.all([e.renderedSystemPrompt??n(e,t),sT(e.session,e.storageV5,e.credentials),b_(e.session,e.options.cacheBreakerPhrase)]);return{systemPrompt:o,userContext:s,systemContext:r}}async function n(e,t){let o=de(e),s=await Rb(e.options.tools,np({permissionMode:o.mode,mainLoopModel:e.options.mainLoopModel}),Array.from(o.additionalWorkingDirectories.keys()));return YD({mainThreadAgentDefinition:t,toolUseContext:e,customSystemPrompt:e.options.customSystemPrompt,defaultSystemPrompt:s,appendSystemPrompt:e.options.appendSystemPrompt})}
export{n5e};
