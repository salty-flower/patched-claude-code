// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Me}from"./chunk-5b2g0bc6.js";import{Gn,p0}from"./chunk-870sakbg.js";import{Gwt}from"./chunk-8c6qx8qp.js";import{Ozn,Jpt,Rl}from"./chunk-fy12d89p.js";import{mo}from"./chunk-97w12rvf.js";function Ert(e){let r=d(e);if(r===null)return null;let t=Gn(e.totalTokens-e.rawMaxTokens),l=Gn(e.rawMaxTokens);if(r==="hard_limit"){let m=Me(process.env.DISABLE_COMPACT)?"/clear":"/compact or /clear";return`Context exceeds the ${l}-token limit by ${t} tokens \u2014 run ${m} to continue.`}let i=Me(process.env.DISABLE_COMPACT)?"/clear":"/compact";return`Context is ${t} tokens past the ${l}-token compaction window \u2014 run ${i} to reduce usage.`}function d(e){if(e.totalTokens<=e.rawMaxTokens)return null;return e.autocompactSource==="auto"?"hard_limit":"compaction_window"}function Art(e,r){let{categories:t,totalTokens:l,rawMaxTokens:i,percentage:m,model:f,memoryFiles:c,mcpTools:u,agents:g,skills:p,messageBreakdown:k,systemTools:T,systemPromptSections:y}=e,o=`## Context Usage

`;o+=`**Model:** ${f}  
`,o+=`**Tokens:** ${Gn(l)} / ${Gn(i)} (${m}%)
`;let C=Ert(e);if(C)o+=`**Over limit:** ${C}
`;o+=`
`;let x=t.filter((n)=>n.tokens>0&&n.name!=="Free space"&&n.name!=="Autocompact buffer");if(x.length>0){o+=`### Estimated usage by category

`,o+=`| Category | Tokens | Percentage |
`,o+=`|----------|--------|------------|
`;for(let a of x){let S=(a.tokens/i*100).toFixed(1);o+=`| ${a.name} | ${Gn(a.tokens)} | ${S}% |
`}let n=t.find((a)=>a.name==="Free space");if(n&&n.tokens>0){let a=(n.tokens/i*100).toFixed(1);o+=`| Free space | ${Gn(n.tokens)} | ${a}% |
`}let s=t.find((a)=>a.name==="Autocompact buffer");if(s&&s.tokens>0){let a=(s.tokens/i*100).toFixed(1);o+=`| Autocompact buffer | ${Gn(s.tokens)} | ${a}% |
`}o+=`
`}if(u.length>0){o+=`### MCP Tools

`,o+=`| Tool | Server | Tokens |
`,o+=`|------|--------|--------|
`;for(let n of u)o+=`| ${n.name} | ${n.serverName} | ${Gn(n.tokens)} |
`;o+=`
`}if(T&&T.length>0,y&&y.length>0,g.length>0){o+=`### Custom Agents

`,o+=`| Agent Type | Source | Tokens |
`,o+=`|------------|--------|--------|
`;for(let n of g){let s;switch(n.source){case"projectSettings":s="Project";break;case"userSettings":s="User";break;case"localSettings":s="Local";break;case"flagSettings":s="Flag";break;case"policySettings":s="Policy";break;case"plugin":s="Plugin";break;case"built-in":s="Built-in";break;default:s=String(n.source)}o+=`| ${n.agentType} | ${s} | ${Gn(n.tokens)} |
`}o+=`
`}if(c.length>0){o+=`### Memory Files

`,o+=`| Type | Path | Tokens |
`,o+=`|------|------|--------|
`;for(let n of c)o+=`| ${n.type} | ${n.path} | ${Gn(n.tokens)} |
`;o+=`
`}if(p&&p.tokens>0&&p.skillFrontmatter.length>0){o+=`### Skills

`,o+=`| Skill | Source | Tokens |
`,o+=`|-------|--------|--------|
`;for(let n of p.skillFrontmatter){let s=Gwt(n.source)+(n.pluginName?` (${n.pluginName})`:"");o+=`| ${n.name} | ${s} | ${p0(n.tokens)} |
`}o+=`
`}return o}async function t0e(e){let{session:r,messages:t,getAppState:l,options:{mainLoopModel:i,tools:m,agentDefinitions:f,customSystemPrompt:c,appendSystemPrompt:u,excludeDynamicSections:g}}=e,p=Rl(t),k=l();return Jpt(p,i,async()=>k.toolPermissionContext,m,f,{session:r,toolUseContext:{options:{customSystemPrompt:c,appendSystemPrompt:u},getMcp:e.getMcp,storageV5:e.storageV5,credentials:e.credentials},originalMessages:p,configuredWindow:k.autoCompactWindow,excludeDynamicSections:g})}async function nEr(e,r){let t=await t0e(r),l=mo(r.session),i=l?{...t,memoryFiles:[]}:t;return{type:"text",value:Art(i,{skipCollapseStatus:l}),contextUsage:wdr(i)}}function wdr(e){let r=d(e);return{model:e.model,total_tokens:e.totalTokens,raw_max_tokens:e.rawMaxTokens,percentage:e.percentage,...r!==null&&{over_limit:{tokens_over:e.totalTokens-e.rawMaxTokens,kind:r}},categories:e.categories.map((t)=>({name:t.name,tokens:t.tokens,kind:Ozn(t)})),mcp_tools:e.mcpTools.map((t)=>({name:t.name,server_name:t.serverName,tokens:t.tokens})),memory_files:e.memoryFiles.map((t)=>({path:t.path,type:t.type,tokens:t.tokens})),agents:e.agents.map((t)=>({agent_type:t.agentType,source:t.source,tokens:t.tokens})),...e.skills&&e.skills.skillFrontmatter.length>0&&{skills:e.skills.skillFrontmatter.map((t)=>({name:t.name,source:t.source,...t.pluginName!==void 0&&{plugin_name:t.pluginName},tokens:t.tokens}))}}}
export{Ert,Art,t0e,nEr,wdr};
