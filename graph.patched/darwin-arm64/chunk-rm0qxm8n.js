// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{ie}from"./chunk-g4c6ggz4.js";import{t}from"./chunk-qmm87fyw.js";import{og}from"./chunk-4yxzpjjz.js";import{EC}from"./chunk-msanejrk.js";import{sO}from"./chunk-668vktqp.js";import{dt}from"./chunk-enzwewwd.js";import{cLn,aHt,lHt,dLn}from"./chunk-nq62bgfy.js";import{Kc,Vn}from"./chunk-9ntt317t.js";var d=14,f=10;async function xye(){try{let e=dt().pluginLoadCacheOnly;if(e===void 0)return[];if(sO()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=og(),l=EC(),g=ie().numStartups,c=Date.now(),r=[];for(let n of s){let{marketplace:o}=Vn(n.repository);if(!o||Kc(o))continue;if(dLn(n,u,l)!=="user-install")continue;if(p(n))continue;let i=aHt(n.repository);if(!i)continue;if(cLn(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=lHt(i,g,c);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function Vcr(e){if(sO()!==null)return null;let s=aHt(e);if(!s)return null;if(cLn(e))return 0;return lHt(s,ie().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{xye,Vcr};
