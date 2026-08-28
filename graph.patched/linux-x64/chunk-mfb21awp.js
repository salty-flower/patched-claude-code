// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Pe}from"./chunk-gqqx2ybk.js";import{Dn,sH}from"./chunk-cgwm6n4d.js";import{$yt}from"./chunk-8v512hc9.js";import{szn,rct,Ol}from"./chunk-hrvkymct.js";import{no}from"./chunk-cpbxswnt.js";function utt(e){let r=d(e);if(r===null)return null;let t=Dn(e.totalTokens-e.rawMaxTokens),l=Dn(e.rawMaxTokens);if(r==="hard_limit"){let m=Pe(process.env.DISABLE_COMPACT)?"/clear":"/compact or /clear";return`Context exceeds the ${l}-token limit by ${t} tokens \u2014 run ${m} to continue.`}let i=Pe(process.env.DISABLE_COMPACT)?"/clear":"/compact";return`Context is ${t} tokens past the ${l}-token compaction window \u2014 run ${i} to reduce usage.`}function d(e){if(e.totalTokens<=e.rawMaxTokens)return null;return e.autocompactSource==="auto"?"hard_limit":"compaction_window"}function dtt(e,r){let{categories:t,totalTokens:l,rawMaxTokens:i,percentage:m,model:f,memoryFiles:c,mcpTools:u,agents:g,skills:p,messageBreakdown:k,systemTools:T,systemPromptSections:y}=e,o=`## Context Usage

`;o+=`**Model:** ${f}  
`,o+=`**Tokens:** ${Dn(l)} / ${Dn(i)} (${m}%)
`;let C=utt(e);if(C)o+=`**Over limit:** ${C}
`;o+=`
`;let x=t.filter((n)=>n.tokens>0&&n.name!=="Free space"&&n.name!=="Autocompact buffer");if(x.length>0){o+=`### Estimated usage by category

`,o+=`| Category | Tokens | Percentage |
`,o+=`|----------|--------|------------|
`;for(let a of x){let S=(a.tokens/i*100).toFixed(1);o+=`| ${a.name} | ${Dn(a.tokens)} | ${S}% |
`}let n=t.find((a)=>a.name==="Free space");if(n&&n.tokens>0){let a=(n.tokens/i*100).toFixed(1);o+=`| Free space | ${Dn(n.tokens)} | ${a}% |
`}let s=t.find((a)=>a.name==="Autocompact buffer");if(s&&s.tokens>0){let a=(s.tokens/i*100).toFixed(1);o+=`| Autocompact buffer | ${Dn(s.tokens)} | ${a}% |
`}o+=`
`}if(u.length>0){o+=`### MCP Tools

`,o+=`| Tool | Server | Tokens |
`,o+=`|------|--------|--------|
`;for(let n of u)o+=`| ${n.name} | ${n.serverName} | ${Dn(n.tokens)} |
`;o+=`
`}if(T&&T.length>0,y&&y.length>0,g.length>0){o+=`### Custom Agents

`,o+=`| Agent Type | Source | Tokens |
`,o+=`|------------|--------|--------|
`;for(let n of g){let s;switch(n.source){case"projectSettings":s="Project";break;case"userSettings":s="User";break;case"localSettings":s="Local";break;case"flagSettings":s="Flag";break;case"policySettings":s="Policy";break;case"plugin":s="Plugin";break;case"built-in":s="Built-in";break;default:s=String(n.source)}o+=`| ${n.agentType} | ${s} | ${Dn(n.tokens)} |
`}o+=`
`}if(c.length>0){o+=`### Memory Files

`,o+=`| Type | Path | Tokens |
`,o+=`|------|------|--------|
`;for(let n of c)o+=`| ${n.type} | ${n.path} | ${Dn(n.tokens)} |
`;o+=`
`}if(p&&p.tokens>0&&p.skillFrontmatter.length>0){o+=`### Skills

`,o+=`| Skill | Source | Tokens |
`,o+=`|-------|--------|--------|
`;for(let n of p.skillFrontmatter){let s=$yt(n.source)+(n.pluginName?` (${n.pluginName})`:"");o+=`| ${n.name} | ${s} | ${sH(n.tokens)} |
`}o+=`
`}return o}async function OTe(e){let{session:r,messages:t,getAppState:l,options:{mainLoopModel:i,tools:m,agentDefinitions:f,customSystemPrompt:c,appendSystemPrompt:u,excludeDynamicSections:g}}=e,p=Ol(t),k=l();return rct(p,i,async()=>k.toolPermissionContext,m,f,{session:r,toolUseContext:{options:{customSystemPrompt:c,appendSystemPrompt:u},getMcp:e.getMcp,storageV5:e.storageV5,credentials:e.credentials},originalMessages:p,configuredWindow:k.autoCompactWindow,excludeDynamicSections:g})}async function qhr(e,r){let t=await OTe(r),l=no(r.session),i=l?{...t,memoryFiles:[]}:t;return{type:"text",value:dtt(i,{skipCollapseStatus:l}),contextUsage:krr(i)}}function krr(e){let r=d(e);return{model:e.model,total_tokens:e.totalTokens,raw_max_tokens:e.rawMaxTokens,percentage:e.percentage,...r!==null&&{over_limit:{tokens_over:e.totalTokens-e.rawMaxTokens,kind:r}},categories:e.categories.map((t)=>({name:t.name,tokens:t.tokens,kind:szn(t)})),mcp_tools:e.mcpTools.map((t)=>({name:t.name,server_name:t.serverName,tokens:t.tokens})),memory_files:e.memoryFiles.map((t)=>({path:t.path,type:t.type,tokens:t.tokens})),agents:e.agents.map((t)=>({agent_type:t.agentType,source:t.source,tokens:t.tokens})),...e.skills&&e.skills.skillFrontmatter.length>0&&{skills:e.skills.skillFrontmatter.map((t)=>({name:t.name,source:t.source,...t.pluginName!==void 0&&{plugin_name:t.pluginName},tokens:t.tokens}))}}}
export{utt,dtt,OTe,qhr,krr};
