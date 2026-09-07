// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{ee}from"./chunk-3e93vkg3.js";import{t}from"./chunk-1tk5haqn.js";import{BM}from"./chunk-xab6507j.js";import{_v,Ft}from"./chunk-19n8eqxk.js";import{Td,_cn,Kft,Yft,Scn}from"./chunk-y3swhsrk.js";import{ql,qn}from"./chunk-hpw0xsgw.js";var d=14,f=10;async function Gae(){try{let e=Ft().pluginLoadCacheOnly;if(e===void 0)return[];if(BM()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Td(),l=_v(),g=ee().numStartups,c=Date.now(),r=[];for(let n of s){let{marketplace:o}=qn(n.repository);if(!o||ql(o))continue;if(Scn(n,u,l)!=="user-install")continue;if(p(n))continue;let i=Kft(n.repository);if(!i)continue;if(_cn(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=Yft(i,g,c);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function FFn(e){if(BM()!==null)return null;let s=Kft(e);if(!s)return null;if(_cn(e))return 0;return Yft(s,ee().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{Gae,FFn};
