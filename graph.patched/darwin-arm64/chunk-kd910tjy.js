// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{De}from"./chunk-vpkz5m05.js";import{Hn,ck}from"./chunk-nw6r1618.js";import{Nyt}from"./chunk-mmj3hbz2.js";import{d3n,oct,Ml}from"./chunk-j5h9ds58.js";import{no}from"./chunk-20k1gyh5.js";function ptt(e){let r=d(e);if(r===null)return null;let t=Hn(e.totalTokens-e.rawMaxTokens),l=Hn(e.rawMaxTokens);if(r==="hard_limit"){let m=De(process.env.DISABLE_COMPACT)?"/clear":"/compact or /clear";return`Context exceeds the ${l}-token limit by ${t} tokens \u2014 run ${m} to continue.`}let i=De(process.env.DISABLE_COMPACT)?"/clear":"/compact";return`Context is ${t} tokens past the ${l}-token compaction window \u2014 run ${i} to reduce usage.`}function d(e){if(e.totalTokens<=e.rawMaxTokens)return null;return e.autocompactSource==="auto"?"hard_limit":"compaction_window"}function ftt(e,r){let{categories:t,totalTokens:l,rawMaxTokens:i,percentage:m,model:f,memoryFiles:c,mcpTools:u,agents:g,skills:p,messageBreakdown:k,systemTools:T,systemPromptSections:y}=e,o=`## Context Usage

`;o+=`**Model:** ${f}  
`,o+=`**Tokens:** ${Hn(l)} / ${Hn(i)} (${m}%)
`;let C=ptt(e);if(C)o+=`**Over limit:** ${C}
`;o+=`
`;let x=t.filter((n)=>n.tokens>0&&n.name!=="Free space"&&n.name!=="Autocompact buffer");if(x.length>0){o+=`### Estimated usage by category

`,o+=`| Category | Tokens | Percentage |
`,o+=`|----------|--------|------------|
`;for(let a of x){let S=(a.tokens/i*100).toFixed(1);o+=`| ${a.name} | ${Hn(a.tokens)} | ${S}% |
`}let n=t.find((a)=>a.name==="Free space");if(n&&n.tokens>0){let a=(n.tokens/i*100).toFixed(1);o+=`| Free space | ${Hn(n.tokens)} | ${a}% |
`}let s=t.find((a)=>a.name==="Autocompact buffer");if(s&&s.tokens>0){let a=(s.tokens/i*100).toFixed(1);o+=`| Autocompact buffer | ${Hn(s.tokens)} | ${a}% |
`}o+=`
`}if(u.length>0){o+=`### MCP Tools

`,o+=`| Tool | Server | Tokens |
`,o+=`|------|--------|--------|
`;for(let n of u)o+=`| ${n.name} | ${n.serverName} | ${Hn(n.tokens)} |
`;o+=`
`}if(T&&T.length>0,y&&y.length>0,g.length>0){o+=`### Custom Agents

`,o+=`| Agent Type | Source | Tokens |
`,o+=`|------------|--------|--------|
`;for(let n of g){let s;switch(n.source){case"projectSettings":s="Project";break;case"userSettings":s="User";break;case"localSettings":s="Local";break;case"flagSettings":s="Flag";break;case"policySettings":s="Policy";break;case"plugin":s="Plugin";break;case"built-in":s="Built-in";break;default:s=String(n.source)}o+=`| ${n.agentType} | ${s} | ${Hn(n.tokens)} |
`}o+=`
`}if(c.length>0){o+=`### Memory Files

`,o+=`| Type | Path | Tokens |
`,o+=`|------|------|--------|
`;for(let n of c)o+=`| ${n.type} | ${n.path} | ${Hn(n.tokens)} |
`;o+=`
`}if(p&&p.tokens>0&&p.skillFrontmatter.length>0){o+=`### Skills

`,o+=`| Skill | Source | Tokens |
`,o+=`|-------|--------|--------|
`;for(let n of p.skillFrontmatter){let s=Nyt(n.source)+(n.pluginName?` (${n.pluginName})`:"");o+=`| ${n.name} | ${s} | ${ck(n.tokens)} |
`}o+=`
`}return o}async function FAe(e){let{session:r,messages:t,getAppState:l,options:{mainLoopModel:i,tools:m,agentDefinitions:f,customSystemPrompt:c,appendSystemPrompt:u,excludeDynamicSections:g}}=e,p=Ml(t),k=l();return oct(p,i,async()=>k.toolPermissionContext,m,f,{session:r,toolUseContext:{options:{customSystemPrompt:c,appendSystemPrompt:u},getMcp:e.getMcp,storageV5:e.storageV5,credentials:e.credentials},originalMessages:p,configuredWindow:k.autoCompactWindow,excludeDynamicSections:g})}async function egr(e,r){let t=await FAe(r),l=no(r.session),i=l?{...t,memoryFiles:[]}:t;return{type:"text",value:ftt(i,{skipCollapseStatus:l}),contextUsage:Hrr(i)}}function Hrr(e){let r=d(e);return{model:e.model,total_tokens:e.totalTokens,raw_max_tokens:e.rawMaxTokens,percentage:e.percentage,...r!==null&&{over_limit:{tokens_over:e.totalTokens-e.rawMaxTokens,kind:r}},categories:e.categories.map((t)=>({name:t.name,tokens:t.tokens,kind:d3n(t)})),mcp_tools:e.mcpTools.map((t)=>({name:t.name,server_name:t.serverName,tokens:t.tokens})),memory_files:e.memoryFiles.map((t)=>({path:t.path,type:t.type,tokens:t.tokens})),agents:e.agents.map((t)=>({agent_type:t.agentType,source:t.source,tokens:t.tokens})),...e.skills&&e.skills.skillFrontmatter.length>0&&{skills:e.skills.skillFrontmatter.map((t)=>({name:t.name,source:t.source,...t.pluginName!==void 0&&{plugin_name:t.pluginName},tokens:t.tokens}))}}}
export{ptt,ftt,FAe,egr,Hrr};
