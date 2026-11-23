// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Sl,Qw}from"./chunk-a5a37ds7.js";import{pL,KJ,RSo,ZJ,k0}from"./chunk-zaxe68t4.js";import{oe}from"./chunk-herqe9c6.js";async function aOn({toolUseContext:e,forkContextMessages:t,mainThreadAgentDefinition:o}){let{systemPrompt:s,userContext:m,systemContext:i}=RSo()??await r(e,o);return{systemPrompt:s,userContext:m,systemContext:i,toolUseContext:e,forkContextMessages:t,advisorModel:e.getAdvisorSetting()}}async function r(e,t){let[o,s,m]=await Promise.all([e.renderedSystemPrompt??n(e,t),k0(e.session,e.storageV5,e.credentials),ZJ(e.session,e.options.cacheBreakerPhrase)]);return{systemPrompt:o,userContext:s,systemContext:m}}async function n(e,t){let o=oe(e),s=await pL(e.options.tools,Qw({permissionMode:o.mode,setting:Sl(),mainLoopModel:e.options.mainLoopModel}));return KJ({mainThreadAgentDefinition:t,toolUseContext:e,customSystemPrompt:e.options.customSystemPrompt,defaultSystemPrompt:s,appendSystemPrompt:e.options.appendSystemPrompt})}
export{aOn};
