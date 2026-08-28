// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{oe}from"./chunk-ghnc2x4f.js";import{n}from"./chunk-cmkfpkth.js";import{sL}from"./chunk-5p27pq72.js";import{M0,en}from"./chunk-0mw4xeyk.js";import{nd,Wen,sst,ast,qen}from"./chunk-j5h9ds58.js";import{Nl,Wt}from"./chunk-9e33b7k0.js";var d=14,f=10;async function hoe(){try{let e=en().pluginLoadCacheOnly;if(e===void 0)return[];if(sL()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=nd(),l=M0(),g=oe().numStartups,c=Date.now(),r=[];for(let t of s){let{marketplace:o}=Wt(t.repository);if(!o||Nl(o))continue;if(qen(t,u,l)!=="user-install")continue;if(p(t))continue;let i=sst(t.repository);if(!i)continue;if(Wen(t.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=ast(i,g,c);if(a>=d&&m>=f)r.push({pluginId:t.repository,name:t.name,daysSinceLastUse:a})}return r.sort((t,o)=>o.daysSinceLastUse-t.daysSinceLastUse),r}catch(e){return n(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function pPn(e){if(sL()!==null)return null;let s=sst(e);if(!s)return null;if(Wen(e))return 0;return ast(s,oe().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{hoe,pPn};
