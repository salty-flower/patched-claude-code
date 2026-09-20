// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{ie}from"./chunk-30p0nwys.js";import{t}from"./chunk-847hpqqs.js";import{ng}from"./chunk-gvnjrkx9.js";import{bA}from"./chunk-9hxsj37m.js";import{K0}from"./chunk-dbac4y1a.js";import{dt}from"./chunk-ch29rnqb.js";import{LMn,WIt,GIt,$Mn}from"./chunk-v4zgc4qd.js";import{Kc,qn}from"./chunk-17gky2b0.js";var d=14,f=10;async function vye(){try{let e=dt().pluginLoadCacheOnly;if(e===void 0)return[];if(K0()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=ng(),l=bA(),g=ie().numStartups,c=Date.now(),r=[];for(let n of s){let{marketplace:o}=qn(n.repository);if(!o||Kc(o))continue;if($Mn(n,u,l)!=="user-install")continue;if(p(n))continue;let i=WIt(n.repository);if(!i)continue;if(LMn(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=GIt(i,g,c);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function gcr(e){if(K0()!==null)return null;let s=WIt(e);if(!s)return null;if(LMn(e))return 0;return GIt(s,ie().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{vye,gcr};
