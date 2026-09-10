// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{ne}from"./chunk-e02s7cks.js";import{t}from"./chunk-wbbe5mtc.js";import{rm}from"./chunk-k4d6gvbd.js";import{kT,xt}from"./chunk-9bqt43xx.js";import{D0}from"./chunk-my1f3y0m.js";import{qyn,j_t,W_t,Yyn}from"./chunk-e55d0yhx.js";import{ec,Wn}from"./chunk-8yp693fz.js";var d=14,f=10;async function fde(){try{let e=xt().pluginLoadCacheOnly;if(e===void 0)return[];if(D0()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=rm(),l=kT(),g=ne().numStartups,c=Date.now(),r=[];for(let n of s){let{marketplace:o}=Wn(n.repository);if(!o||ec(o))continue;if(Yyn(n,u,l)!=="user-install")continue;if(p(n))continue;let i=j_t(n.repository);if(!i)continue;if(qyn(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=W_t(i,g,c);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function nVn(e){if(D0()!==null)return null;let s=j_t(e);if(!s)return null;if(qyn(e))return 0;return W_t(s,ne().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{fde,nVn};
