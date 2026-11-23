// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Pe}from"./chunk-732yb76j.js";import{dQn}from"./chunk-2vbvs9gw.js";import{Yr,S4}from"./chunk-hzf7t49x.js";import{UZe,oB,aCr}from"./chunk-zaxe68t4.js";import{B2n,jo}from"./chunk-devr3f6j.js";import{Oo}from"./chunk-qv40zzdt.js";function cyr(o){let r=h(o);if(r===null)return null;let t=Yr(o.totalTokens-o.rawMaxTokens),a=Yr(o.rawMaxTokens);if(r==="hard_limit"){let c=Pe(process.env.DISABLE_COMPACT)?"/clear":"/compact or /clear";return`Context exceeds the ${a}-token limit by ${t} tokens \u2014 run ${c} to continue.`}let m=Pe(process.env.DISABLE_COMPACT)?"/clear":"/compact";return`Context is ${t} tokens past the ${a}-token compaction window \u2014 run ${m} to reduce usage.`}function h(o){if(o.totalTokens<=o.rawMaxTokens)return null;return o.autocompactSource==="auto"?"hard_limit":"compaction_window"}var v=10;function uyr(o,{isBounded:r=!1,isTotalEstimated:t=!1}={}){let{categories:a,totalTokens:m,rawMaxTokens:c,percentage:p,model:u,memoryFiles:k,mcpTools:g,agents:C,skills:f,messageBreakdown:w,systemTools:S,systemPromptSections:x}=o,e=`## Context Usage

`;e+=`**Model:** ${u}  
`,e+=`**Tokens:** ${Yr(m)} / ${Yr(c)} (${p}%)
`;let d=cyr(o);if(d)e+=`**Over limit:** ${d}
`;if(e+=`
`,t)e+=`This token count is an estimate.

`;let T=a.filter((s)=>s.tokens>0&&s.name!=="Free space"&&s.name!=="Autocompact buffer");if(T.length>0){e+=`### Estimated usage by category

`,e+=`| Category | Tokens | Percentage |
`,e+=`|----------|--------|------------|
`;for(let n of T){let i=(n.tokens/c*100).toFixed(1);e+=`| ${n.name} | ${Yr(n.tokens)} | ${i}% |
`}let s=a.find((n)=>n.name==="Free space");if(s&&s.tokens>0){let n=(s.tokens/c*100).toFixed(1);e+=`| Free space | ${Yr(s.tokens)} | ${n}% |
`}let l=a.find((n)=>n.name==="Autocompact buffer");if(l&&l.tokens>0){let n=(l.tokens/c*100).toFixed(1);e+=`| Autocompact buffer | ${Yr(l.tokens)} | ${n}% |
`}e+=`
`}let M=r&&a.some((s)=>s.isDeferred&&s.name.includes("MCP")),P=M?g.filter((s)=>s.isLoaded!==!1):g;if(P.length>0){let{kept:s,moreRow:l}=y(P,r);e+=`### MCP Tools

`,e+=`| Tool | Server | Tokens |
`,e+=`|------|--------|--------|
`;for(let n of s)e+=`| ${n.name} | ${n.serverName} | ${Yr(n.tokens)} |
`;e+=l,e+=`
`}if(M){let s=b(g);if(s.length>0){let{kept:l,moreRow:n}=y(s,r);e+=`### Other MCP tools, by server

`,e+=`| Server | Tools | Tokens if all were loaded |
`,e+=`|--------|-------|---------------------------|
`;for(let i of l)e+=`| ${i.serverName} | ${i.count} | ${Yr(i.tokens)} |
`;e+=n,e+=`
`}}if(S&&S.length>0,x&&x.length>0,C.length>0){let{kept:s,moreRow:l}=y(C,r);e+=`### Custom Agents

`,e+=`| Agent Type | Source | Tokens |
`,e+=`|------------|--------|--------|
`;for(let n of s){let i;switch(n.source){case"projectSettings":i="Project";break;case"userSettings":i="User";break;case"localSettings":i="Local";break;case"flagSettings":i="Flag";break;case"policySettings":i="Policy";break;case"plugin":i="Plugin";break;case"built-in":i="Built-in";break;default:i=String(n.source)}e+=`| ${n.agentType} | ${i} | ${Yr(n.tokens)} |
`}e+=l,e+=`
`}if(k.length>0){let{kept:s,moreRow:l}=y(k,r);e+=`### Memory Files

`,e+=`| Type | Path | Tokens |
`,e+=`|------|------|--------|
`;for(let n of s)e+=`| ${n.type} | ${n.path} | ${Yr(n.tokens)} |
`;e+=l,e+=`
`}if(f&&f.tokens>0&&f.skillFrontmatter.length>0){let{kept:s,moreRow:l}=y(f.skillFrontmatter,r,S4);e+=`### Skills

`,e+=`| Skill | Source | Tokens |
`,e+=`|-------|--------|--------|
`;for(let n of s){let i=dQn(n.source)+(n.pluginName&&n.source!=="syncedSkills"?` (${n.pluginName})`:"");e+=`| ${n.name} | ${i} | ${S4(n.tokens)} |
`}e+=l,e+=`
`}return e}function y(o,r,t=Yr){if(!r||o.length<=v)return{kept:o,moreRow:""};let a=o.toSorted((p,u)=>u.tokens-p.tokens),m=a.slice(v),c=m.reduce((p,u)=>p+u.tokens,0);return{kept:a.slice(0,v),moreRow:`| and ${m.length} more |  | ${t(c)} |
`}}function b(o){let r=new Map;for(let t of o)if(t.isLoaded===!1){let a=r.get(t.serverName);r.set(t.serverName,{count:(a?.count??0)+1,tokens:(a?.tokens??0)+t.tokens})}return Array.from(r,([t,a])=>({serverName:t,...a}))}async function vRe(o){let{session:r,messages:t,getAppState:a,options:{mainLoopModel:m,tools:c,agentDefinitions:p,customSystemPrompt:u,appendSystemPrompt:k,systemPromptSnapshot:g,excludeDynamicSections:C,mcpClients:f},detail:w,terminalWidth:S,localPaths:x}=o,e=Oo(t),d=a(),T=await aCr(e,m,async()=>d.toolPermissionContext,c,p,{session:r,toolUseContext:{options:{customSystemPrompt:u,appendSystemPrompt:k,systemPromptSnapshot:g,mcpClients:f},getMcp:o.getMcp,storageV5:o.storageV5,credentials:o.credentials},originalMessages:e,configuredWindow:d.autoCompactWindow,excludeDynamicSections:C,detail:w,terminalWidth:S,localPaths:x});return B2n(r)?{...T,deferredBuiltinTools:void 0,systemTools:void 0,systemPromptSections:void 0}:T}async function v5a(o,r){let t=await vRe(r),m=jo(r.session)?{...t,memoryFiles:[]}:t,c=B2n(r.session),p=oB(Oo(r.messages)),u=m.categories.filter((k)=>k.kind==="used"&&k.id!=="messages").reduce((k,g)=>k+g.tokens,0);return{type:"text",value:uyr(c?{...m,messageBreakdown:void 0}:m,{isTotalEstimated:c&&(m.apiUsage===null||p?.handedOff===!0||u>UZe(m.apiUsage))}),contextUsage:yja(m)}}function yja(o){let r=h(o);return{model:o.model,total_tokens:o.totalTokens,raw_max_tokens:o.rawMaxTokens,percentage:o.percentage,...r!==null&&{over_limit:{tokens_over:o.totalTokens-o.rawMaxTokens,kind:r}},categories:o.categories.map((t)=>({name:t.name,tokens:t.tokens,kind:t.kind})),mcp_tools:o.mcpTools.map((t)=>({name:t.name,server_name:t.serverName,tokens:t.tokens})),memory_files:o.memoryFiles.map((t)=>({path:t.path,type:t.type,tokens:t.tokens})),agents:o.agents.map((t)=>({agent_type:t.agentType,source:t.source,tokens:t.tokens})),...o.skills&&o.skills.skillFrontmatter.length>0&&{skills:o.skills.skillFrontmatter.map((t)=>({name:t.name,source:t.source,...t.pluginName!==void 0&&{plugin_name:t.pluginName},tokens:t.tokens}))}}}
export{cyr,uyr,vRe,v5a,yja};
