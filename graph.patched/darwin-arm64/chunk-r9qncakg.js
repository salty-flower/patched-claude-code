// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{_f}from"./chunk-vtwn1md5.js";import{cy,FC,rD,ugn,db}from"./chunk-5e9qk3ys.js";import{pe}from"./chunk-k536ffws.js";async function klt({toolUseContext:e,forkContextMessages:t,mainThreadAgentDefinition:o}){let{systemPrompt:s,userContext:r,systemContext:m}=ugn()??await i(e,o);return{systemPrompt:s,userContext:r,systemContext:m,toolUseContext:e,forkContextMessages:t,advisorModel:e.getAdvisorSetting()}}async function i(e,t){let[o,s,r]=await Promise.all([e.renderedSystemPrompt??n(e,t),FC(e.session,e.storageV5,e.credentials),cy(e.session,e.options.cacheBreakerPhrase)]);return{systemPrompt:o,userContext:s,systemContext:r}}async function n(e,t){let o=pe(e),s=await db(e.options.tools,_f({permissionMode:o.mode,mainLoopModel:e.options.mainLoopModel}),Array.from(o.additionalWorkingDirectories.keys()));return rD({mainThreadAgentDefinition:t,toolUseContext:e,customSystemPrompt:e.options.customSystemPrompt,defaultSystemPrompt:s,appendSystemPrompt:e.options.appendSystemPrompt})}
export{klt};
