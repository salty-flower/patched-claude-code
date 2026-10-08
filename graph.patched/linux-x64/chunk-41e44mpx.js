// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{De}from"./chunk-ndcqd6bh.js";import{_r,AB}from"./chunk-hv4n1akt.js";import{NJt}from"./chunk-8ky01sys.js";import{OSn,gi}from"./chunk-g263vvvn.js";import{lar,Xo}from"./chunk-mzsbntyv.js";function Aun(o){let s=C(o);if(s===null)return null;let n=_r(o.totalTokens-o.rawMaxTokens),i=_r(o.rawMaxTokens);if(s==="hard_limit"){let p=De(process.env.DISABLE_COMPACT)?"/clear":"/compact or /clear";return`Context exceeds the ${i}-token limit by ${n} tokens \u2014 run ${p} to continue.`}let m=De(process.env.DISABLE_COMPACT)?"/clear":"/compact";return`Context is ${n} tokens past the ${i}-token compaction window \u2014 run ${m} to reduce usage.`}function C(o){if(o.totalTokens<=o.rawMaxTokens)return null;return o.autocompactSource==="auto"?"hard_limit":"compaction_window"}function Cun(o){let{categories:s,totalTokens:n,rawMaxTokens:i,percentage:m,model:p,memoryFiles:k,mcpTools:g,agents:f,skills:l,messageBreakdown:y,systemTools:T,systemPromptSections:d}=o,e=`## Context Usage

`;e+=`**Model:** ${p}  
`,e+=`**Tokens:** ${_r(n)} / ${_r(i)} (${m}%)
`;let c=Aun(o);if(c)e+=`**Over limit:** ${c}
`;e+=`
`;let u=s.filter((t)=>t.tokens>0&&t.name!=="Free space"&&t.name!=="Autocompact buffer");if(u.length>0){e+=`### Estimated usage by category

`,e+=`| Category | Tokens | Percentage |
`,e+=`|----------|--------|------------|
`;for(let r of u){let x=(r.tokens/i*100).toFixed(1);e+=`| ${r.name} | ${_r(r.tokens)} | ${x}% |
`}let t=s.find((r)=>r.name==="Free space");if(t&&t.tokens>0){let r=(t.tokens/i*100).toFixed(1);e+=`| Free space | ${_r(t.tokens)} | ${r}% |
`}let a=s.find((r)=>r.name==="Autocompact buffer");if(a&&a.tokens>0){let r=(a.tokens/i*100).toFixed(1);e+=`| Autocompact buffer | ${_r(a.tokens)} | ${r}% |
`}e+=`
`}if(g.length>0){e+=`### MCP Tools

`,e+=`| Tool | Server | Tokens |
`,e+=`|------|--------|--------|
`;for(let t of g)e+=`| ${t.name} | ${t.serverName} | ${_r(t.tokens)} |
`;e+=`
`}if(T&&T.length>0,d&&d.length>0,f.length>0){e+=`### Custom Agents

`,e+=`| Agent Type | Source | Tokens |
`,e+=`|------------|--------|--------|
`;for(let t of f){let a;switch(t.source){case"projectSettings":a="Project";break;case"userSettings":a="User";break;case"localSettings":a="Local";break;case"flagSettings":a="Flag";break;case"policySettings":a="Policy";break;case"plugin":a="Plugin";break;case"built-in":a="Built-in";break;default:a=String(t.source)}e+=`| ${t.agentType} | ${a} | ${_r(t.tokens)} |
`}e+=`
`}if(k.length>0){e+=`### Memory Files

`,e+=`| Type | Path | Tokens |
`,e+=`|------|------|--------|
`;for(let t of k)e+=`| ${t.type} | ${t.path} | ${_r(t.tokens)} |
`;e+=`
`}if(l&&l.tokens>0&&l.skillFrontmatter.length>0){e+=`### Skills

`,e+=`| Skill | Source | Tokens |
`,e+=`|-------|--------|--------|
`;for(let t of l.skillFrontmatter){let a=NJt(t.source)+(t.pluginName?` (${t.pluginName})`:"");e+=`| ${t.name} | ${a} | ${AB(t.tokens)} |
`}e+=`
`}return e}async function Voe(o){let{session:s,messages:n,getAppState:i,options:{mainLoopModel:m,tools:p,agentDefinitions:k,customSystemPrompt:g,appendSystemPrompt:f,systemPromptSnapshot:l,excludeDynamicSections:y,mcpClients:T},detail:d,terminalWidth:e}=o,c=gi(n),u=i(),t=await OSn(c,m,async()=>u.toolPermissionContext,p,k,{session:s,toolUseContext:{options:{customSystemPrompt:g,appendSystemPrompt:f,systemPromptSnapshot:l,mcpClients:T},getMcp:o.getMcp,storageV5:o.storageV5,credentials:o.credentials},originalMessages:c,configuredWindow:u.autoCompactWindow,excludeDynamicSections:y,detail:d,terminalWidth:e});return lar(s)?{...t,deferredBuiltinTools:void 0,systemTools:void 0,systemPromptSections:void 0}:t}async function AOs(o,s){let n=await Voe(s),m=Xo(s.session)?{...n,memoryFiles:[]}:n;return{type:"text",value:Cun(lar(s.session)?{...m,messageBreakdown:void 0}:m),contextUsage:iks(m)}}function iks(o){let s=C(o);return{model:o.model,total_tokens:o.totalTokens,raw_max_tokens:o.rawMaxTokens,percentage:o.percentage,...s!==null&&{over_limit:{tokens_over:o.totalTokens-o.rawMaxTokens,kind:s}},categories:o.categories.map((n)=>({name:n.name,tokens:n.tokens,kind:n.kind})),mcp_tools:o.mcpTools.map((n)=>({name:n.name,server_name:n.serverName,tokens:n.tokens})),memory_files:o.memoryFiles.map((n)=>({path:n.path,type:n.type,tokens:n.tokens})),agents:o.agents.map((n)=>({agent_type:n.agentType,source:n.source,tokens:n.tokens})),...o.skills&&o.skills.skillFrontmatter.length>0&&{skills:o.skills.skillFrontmatter.map((n)=>({name:n.name,source:n.source,...n.pluginName!==void 0&&{plugin_name:n.pluginName},tokens:n.tokens}))}}}
export{Aun,Cun,Voe,AOs,iks};
