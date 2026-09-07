// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{ee}from"./chunk-n495pc0t.js";import{t}from"./chunk-5q90j22t.js";import{KM}from"./chunk-j5bqrd6w.js";import{bC,$t}from"./chunk-1nccnwh0.js";import{Rd,Gcn,uft,dft,zcn}from"./chunk-1692k4g5.js";import{zl,Kn}from"./chunk-q2df50y4.js";var d=14,f=10;async function Qae(){try{let e=$t().pluginLoadCacheOnly;if(e===void 0)return[];if(KM()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Rd(),l=bC(),g=ee().numStartups,c=Date.now(),r=[];for(let n of s){let{marketplace:o}=Kn(n.repository);if(!o||zl(o))continue;if(zcn(n,u,l)!=="user-install")continue;if(p(n))continue;let i=uft(n.repository);if(!i)continue;if(Gcn(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=dft(i,g,c);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function A$n(e){if(KM()!==null)return null;let s=uft(e);if(!s)return null;if(Gcn(e))return 0;return dft(s,ee().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{Qae,A$n};
