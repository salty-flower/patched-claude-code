// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ah}from"./chunk-bvn0epzr.js";import{kx,oK,dvr,dK,cR}from"./chunk-na9nw575.js";import{ce}from"./chunk-waw2sr63.js";async function Z3t({toolUseContext:e,forkContextMessages:o,mainThreadAgentDefinition:t}){let{systemPrompt:s,userContext:m,systemContext:r}=dvr()??await i(e,t);return{systemPrompt:s,userContext:m,systemContext:r,toolUseContext:e,forkContextMessages:o,advisorModel:e.getAdvisorSetting()}}async function i(e,o){let[t,s,m]=await Promise.all([e.renderedSystemPrompt??n(e,o),cR(e.session,e.storageV5,e.credentials),dK(e.session,e.options.cacheBreakerPhrase)]);return{systemPrompt:t,userContext:s,systemContext:m}}async function n(e,o){let t=ce(e),s=await kx(e.options.tools,ah({permissionMode:t.mode,mainLoopModel:e.options.mainLoopModel}));return oK({mainThreadAgentDefinition:o,toolUseContext:e,customSystemPrompt:e.options.customSystemPrompt,defaultSystemPrompt:s,appendSystemPrompt:e.options.appendSystemPrompt})}
export{Z3t};
