// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{bl,Zw}from"./chunk-e44qnbvj.js";import{gL,rQ,ewo,lQ,TM}from"./chunk-wqb2b4v0.js";import{oe}from"./chunk-j9jm69dt.js";async function vIn({toolUseContext:e,forkContextMessages:t,mainThreadAgentDefinition:o}){let{systemPrompt:s,userContext:m,systemContext:i}=ewo()??await r(e,o);return{systemPrompt:s,userContext:m,systemContext:i,toolUseContext:e,forkContextMessages:t,advisorModel:e.getAdvisorSetting()}}async function r(e,t){let[o,s,m]=await Promise.all([e.renderedSystemPrompt??n(e,t),TM(e.session,e.storageV5,e.credentials),lQ(e.session,e.options.cacheBreakerPhrase)]);return{systemPrompt:o,userContext:s,systemContext:m}}async function n(e,t){let o=oe(e),s=await gL(e.options.tools,Zw({permissionMode:o.mode,setting:bl(),mainLoopModel:e.options.mainLoopModel}));return rQ({mainThreadAgentDefinition:t,toolUseContext:e,customSystemPrompt:e.options.customSystemPrompt,defaultSystemPrompt:s,appendSystemPrompt:e.options.appendSystemPrompt})}
export{vIn};
