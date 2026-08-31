// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{oe}from"./chunk-1e5y3pjf.js";import{n}from"./chunk-d0cr5d2v.js";import{PM}from"./chunk-sng953xs.js";import{ZE,Jt}from"./chunk-n7pwnj71.js";import{Rd,jin,Sct,Hct,Gin}from"./chunk-h6btyxas.js";import{uc,qt}from"./chunk-esrvwhf8.js";var d=14,f=10;async function Hse(){try{let e=Jt().pluginLoadCacheOnly;if(e===void 0)return[];if(PM()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Rd(),l=ZE(),g=oe().numStartups,c=Date.now(),r=[];for(let t of s){let{marketplace:o}=qt(t.repository);if(!o||uc(o))continue;if(Gin(t,u,l)!=="user-install")continue;if(p(t))continue;let i=Sct(t.repository);if(!i)continue;if(jin(t.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=Hct(i,g,c);if(a>=d&&m>=f)r.push({pluginId:t.repository,name:t.name,daysSinceLastUse:a})}return r.sort((t,o)=>o.daysSinceLastUse-t.daysSinceLastUse),r}catch(e){return n(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function IOn(e){if(PM()!==null)return null;let s=Sct(e);if(!s)return null;if(jin(e))return 0;return Hct(s,oe().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{Hse,IOn};
