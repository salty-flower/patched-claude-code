// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{ne}from"./chunk-vryy7b5x.js";import{t}from"./chunk-w930ag8r.js";import{fT,Ot}from"./chunk-w32gvtac.js";import{S0}from"./chunk-508cw63b.js";import{gm,Ogn,lyt,cyt,Lgn}from"./chunk-tavwd3sq.js";import{ql,jn}from"./chunk-4r0kqv8e.js";var d=14,f=10;async function _ue(){try{let e=Ot().pluginLoadCacheOnly;if(e===void 0)return[];if(S0()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=gm(),l=fT(),g=ne().numStartups,c=Date.now(),r=[];for(let n of s){let{marketplace:o}=jn(n.repository);if(!o||ql(o))continue;if(Lgn(n,u,l)!=="user-install")continue;if(p(n))continue;let i=lyt(n.repository);if(!i)continue;if(Ogn(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=cyt(i,g,c);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function czn(e){if(S0()!==null)return null;let s=lyt(e);if(!s)return null;if(Ogn(e))return 0;return cyt(s,ne().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{_ue,czn};
