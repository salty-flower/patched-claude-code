// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{$e}from"./chunk-bjnpzyk4.js";import{mr,p2}from"./chunk-6pw3jyf9.js";import{Jmn}from"./chunk-58pv6r0f.js";import{Ls,Z$n}from"./chunk-na9nw575.js";import{_Gn,Eo}from"./chunk-nd8fwjnz.js";function iIn(o){let a=C(o);if(a===null)return null;let n=mr(o.totalTokens-o.rawMaxTokens),i=mr(o.rawMaxTokens);if(a==="hard_limit"){let p=$e(process.env.DISABLE_COMPACT)?"/clear":"/compact or /clear";return`Context exceeds the ${i}-token limit by ${n} tokens \u2014 run ${p} to continue.`}let m=$e(process.env.DISABLE_COMPACT)?"/clear":"/compact";return`Context is ${n} tokens past the ${i}-token compaction window \u2014 run ${m} to reduce usage.`}function C(o){if(o.totalTokens<=o.rawMaxTokens)return null;return o.autocompactSource==="auto"?"hard_limit":"compaction_window"}function aIn(o){let{categories:a,totalTokens:n,rawMaxTokens:i,percentage:m,model:p,memoryFiles:u,mcpTools:k,agents:g,skills:l,messageBreakdown:y,systemTools:f,systemPromptSections:T}=o,e=`## Context Usage

`;e+=`**Model:** ${p}  
`,e+=`**Tokens:** ${mr(n)} / ${mr(i)} (${m}%)
`;let d=iIn(o);if(d)e+=`**Over limit:** ${d}
`;e+=`
`;let c=a.filter((t)=>t.tokens>0&&t.name!=="Free space"&&t.name!=="Autocompact buffer");if(c.length>0){e+=`### Estimated usage by category

`,e+=`| Category | Tokens | Percentage |
`,e+=`|----------|--------|------------|
`;for(let r of c){let x=(r.tokens/i*100).toFixed(1);e+=`| ${r.name} | ${mr(r.tokens)} | ${x}% |
`}let t=a.find((r)=>r.name==="Free space");if(t&&t.tokens>0){let r=(t.tokens/i*100).toFixed(1);e+=`| Free space | ${mr(t.tokens)} | ${r}% |
`}let s=a.find((r)=>r.name==="Autocompact buffer");if(s&&s.tokens>0){let r=(s.tokens/i*100).toFixed(1);e+=`| Autocompact buffer | ${mr(s.tokens)} | ${r}% |
`}e+=`
`}if(k.length>0){e+=`### MCP Tools

`,e+=`| Tool | Server | Tokens |
`,e+=`|------|--------|--------|
`;for(let t of k)e+=`| ${t.name} | ${t.serverName} | ${mr(t.tokens)} |
`;e+=`
`}if(f&&f.length>0,T&&T.length>0,g.length>0){e+=`### Custom Agents

`,e+=`| Agent Type | Source | Tokens |
`,e+=`|------------|--------|--------|
`;for(let t of g){let s;switch(t.source){case"projectSettings":s="Project";break;case"userSettings":s="User";break;case"localSettings":s="Local";break;case"flagSettings":s="Flag";break;case"policySettings":s="Policy";break;case"plugin":s="Plugin";break;case"built-in":s="Built-in";break;default:s=String(t.source)}e+=`| ${t.agentType} | ${s} | ${mr(t.tokens)} |
`}e+=`
`}if(u.length>0){e+=`### Memory Files

`,e+=`| Type | Path | Tokens |
`,e+=`|------|------|--------|
`;for(let t of u)e+=`| ${t.type} | ${t.path} | ${mr(t.tokens)} |
`;e+=`
`}if(l&&l.tokens>0&&l.skillFrontmatter.length>0){e+=`### Skills

`,e+=`| Skill | Source | Tokens |
`,e+=`|-------|--------|--------|
`;for(let t of l.skillFrontmatter){let s=Jmn(t.source)+(t.pluginName?` (${t.pluginName})`:"");e+=`| ${t.name} | ${s} | ${p2(t.tokens)} |
`}e+=`
`}return e}async function Lue(o){let{session:a,messages:n,getAppState:i,options:{mainLoopModel:m,tools:p,agentDefinitions:u,customSystemPrompt:k,appendSystemPrompt:g,systemPromptSnapshot:l,excludeDynamicSections:y,mcpClients:f},detail:T,terminalWidth:e,localPaths:d}=o,c=Ls(n),t=i(),s=await Z$n(c,m,async()=>t.toolPermissionContext,p,u,{session:a,toolUseContext:{options:{customSystemPrompt:k,appendSystemPrompt:g,systemPromptSnapshot:l,mcpClients:f},getMcp:o.getMcp,storageV5:o.storageV5,credentials:o.credentials},originalMessages:c,configuredWindow:t.autoCompactWindow,excludeDynamicSections:y,detail:T,terminalWidth:e,localPaths:d});return _Gn(a)?{...s,deferredBuiltinTools:void 0,systemTools:void 0,systemPromptSections:void 0}:s}async function cui(o,a){let n=await Lue(a),m=Eo(a.session)?{...n,memoryFiles:[]}:n;return{type:"text",value:aIn(_Gn(a.session)?{...m,messageBreakdown:void 0}:m),contextUsage:hti(m)}}function hti(o){let a=C(o);return{model:o.model,total_tokens:o.totalTokens,raw_max_tokens:o.rawMaxTokens,percentage:o.percentage,...a!==null&&{over_limit:{tokens_over:o.totalTokens-o.rawMaxTokens,kind:a}},categories:o.categories.map((n)=>({name:n.name,tokens:n.tokens,kind:n.kind})),mcp_tools:o.mcpTools.map((n)=>({name:n.name,server_name:n.serverName,tokens:n.tokens})),memory_files:o.memoryFiles.map((n)=>({path:n.path,type:n.type,tokens:n.tokens})),agents:o.agents.map((n)=>({agent_type:n.agentType,source:n.source,tokens:n.tokens})),...o.skills&&o.skills.skillFrontmatter.length>0&&{skills:o.skills.skillFrontmatter.map((n)=>({name:n.name,source:n.source,...n.pluginName!==void 0&&{plugin_name:n.pluginName},tokens:n.tokens}))}}}
export{iIn,aIn,Lue,cui,hti};
