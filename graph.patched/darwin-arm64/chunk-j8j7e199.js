// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{le}from"./chunk-twxt3h9y.js";import{t}from"./chunk-wvb0gwjm.js";import{Tg}from"./chunk-vtrgktb7.js";import{mA}from"./chunk-jntb7pf7.js";import{LH}from"./chunk-8v03cpg7.js";import{ct}from"./chunk-82pgbtaq.js";import{Lor,Nqt,Fqt,For}from"./chunk-h3bc7dkc.js";import{Mu,ir}from"./chunk-entw02h6.js";var d=14,f=10;async function bRe(){try{let e=ct().pluginLoadCacheOnly;if(e===void 0)return[];if(LH()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Tg(),l=mA(),g=le().numStartups,c=Date.now(),r=[];for(let n of s){let{marketplace:o}=ir(n.repository);if(!o||Mu(o))continue;if(For(n,u,l)!=="user-install")continue;if(p(n))continue;let i=Nqt(n.repository);if(!i)continue;if(Lor(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=Fqt(i,g,c);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function uVr(e){if(LH()!==null)return null;let s=Nqt(e);if(!s)return null;if(Lor(e))return 0;return Fqt(s,le().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{bRe,uVr};
