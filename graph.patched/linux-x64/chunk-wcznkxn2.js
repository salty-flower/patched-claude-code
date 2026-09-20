// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Oe}from"./chunk-gj513b2z.js";import{Jn,$H}from"./chunk-d6f1t6sb.js";import{fzt}from"./chunk-h4q23q42.js";import{R0t,Fi}from"./chunk-v4zgc4qd.js";import{vo}from"./chunk-h1pjp7wr.js";function Hkt(o){let r=S(o);if(r===null)return null;let t=Jn(o.totalTokens-o.rawMaxTokens),l=Jn(o.rawMaxTokens);if(r==="hard_limit"){let m=Oe(process.env.DISABLE_COMPACT)?"/clear":"/compact or /clear";return`Context exceeds the ${l}-token limit by ${t} tokens \u2014 run ${m} to continue.`}let i=Oe(process.env.DISABLE_COMPACT)?"/clear":"/compact";return`Context is ${t} tokens past the ${l}-token compaction window \u2014 run ${i} to reduce usage.`}function S(o){if(o.totalTokens<=o.rawMaxTokens)return null;return o.autocompactSource==="auto"?"hard_limit":"compaction_window"}function Okt(o,r){let{categories:t,totalTokens:l,rawMaxTokens:i,percentage:m,model:T,memoryFiles:u,mcpTools:g,agents:k,skills:p,messageBreakdown:d,systemTools:f,systemPromptSections:c}=o,e=`## Context Usage

`;e+=`**Model:** ${T}  
`,e+=`**Tokens:** ${Jn(l)} / ${Jn(i)} (${m}%)
`;let y=Hkt(o);if(y)e+=`**Over limit:** ${y}
`;e+=`
`;let C=t.filter((n)=>n.tokens>0&&n.name!=="Free space"&&n.name!=="Autocompact buffer");if(C.length>0){e+=`### Estimated usage by category

`,e+=`| Category | Tokens | Percentage |
`,e+=`|----------|--------|------------|
`;for(let a of C){let x=(a.tokens/i*100).toFixed(1);e+=`| ${a.name} | ${Jn(a.tokens)} | ${x}% |
`}let n=t.find((a)=>a.name==="Free space");if(n&&n.tokens>0){let a=(n.tokens/i*100).toFixed(1);e+=`| Free space | ${Jn(n.tokens)} | ${a}% |
`}let s=t.find((a)=>a.name==="Autocompact buffer");if(s&&s.tokens>0){let a=(s.tokens/i*100).toFixed(1);e+=`| Autocompact buffer | ${Jn(s.tokens)} | ${a}% |
`}e+=`
`}if(g.length>0){e+=`### MCP Tools

`,e+=`| Tool | Server | Tokens |
`,e+=`|------|--------|--------|
`;for(let n of g)e+=`| ${n.name} | ${n.serverName} | ${Jn(n.tokens)} |
`;e+=`
`}if(f&&f.length>0,c&&c.length>0,k.length>0){e+=`### Custom Agents

`,e+=`| Agent Type | Source | Tokens |
`,e+=`|------------|--------|--------|
`;for(let n of k){let s;switch(n.source){case"projectSettings":s="Project";break;case"userSettings":s="User";break;case"localSettings":s="Local";break;case"flagSettings":s="Flag";break;case"policySettings":s="Policy";break;case"plugin":s="Plugin";break;case"built-in":s="Built-in";break;default:s=String(n.source)}e+=`| ${n.agentType} | ${s} | ${Jn(n.tokens)} |
`}e+=`
`}if(u.length>0){e+=`### Memory Files

`,e+=`| Type | Path | Tokens |
`,e+=`|------|------|--------|
`;for(let n of u)e+=`| ${n.type} | ${n.path} | ${Jn(n.tokens)} |
`;e+=`
`}if(p&&p.tokens>0&&p.skillFrontmatter.length>0){e+=`### Skills

`,e+=`| Skill | Source | Tokens |
`,e+=`|-------|--------|--------|
`;for(let n of p.skillFrontmatter){let s=fzt(n.source)+(n.pluginName?` (${n.pluginName})`:"");e+=`| ${n.name} | ${s} | ${$H(n.tokens)} |
`}e+=`
`}return e}async function FY(o){let{session:r,messages:t,getAppState:l,options:{mainLoopModel:i,tools:m,agentDefinitions:T,customSystemPrompt:u,appendSystemPrompt:g,systemPromptSnapshot:k,excludeDynamicSections:p},detail:d,terminalWidth:f}=o,c=Fi(t),e=l();return R0t(c,i,async()=>e.toolPermissionContext,m,T,{session:r,toolUseContext:{options:{customSystemPrompt:u,appendSystemPrompt:g,systemPromptSnapshot:k},getMcp:o.getMcp,storageV5:o.storageV5,credentials:o.credentials},originalMessages:c,configuredWindow:e.autoCompactWindow,excludeDynamicSections:p,detail:d,terminalWidth:f})}async function k4r(o,r){let t=await FY(r),l=vo(r.session),i=l?{...t,memoryFiles:[]}:t;return{type:"text",value:Okt(i,{skipCollapseStatus:l}),contextUsage:EWr(i)}}function EWr(o){let r=S(o);return{model:o.model,total_tokens:o.totalTokens,raw_max_tokens:o.rawMaxTokens,percentage:o.percentage,...r!==null&&{over_limit:{tokens_over:o.totalTokens-o.rawMaxTokens,kind:r}},categories:o.categories.map((t)=>({name:t.name,tokens:t.tokens,kind:t.kind})),mcp_tools:o.mcpTools.map((t)=>({name:t.name,server_name:t.serverName,tokens:t.tokens})),memory_files:o.memoryFiles.map((t)=>({path:t.path,type:t.type,tokens:t.tokens})),agents:o.agents.map((t)=>({agent_type:t.agentType,source:t.source,tokens:t.tokens})),...o.skills&&o.skills.skillFrontmatter.length>0&&{skills:o.skills.skillFrontmatter.map((t)=>({name:t.name,source:t.source,...t.pluginName!==void 0&&{plugin_name:t.pluginName},tokens:t.tokens}))}}}
export{Hkt,Okt,FY,k4r,EWr};
