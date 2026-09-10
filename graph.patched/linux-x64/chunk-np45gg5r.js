// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{ne}from"./chunk-ce4ppmnp.js";import{t}from"./chunk-cmg3b5hg.js";import{nm}from"./chunk-a5j1fwc7.js";import{AT,xt}from"./chunk-fmywrxn6.js";import{kP}from"./chunk-ptc1f3y2.js";import{Syn,T_t,C_t,vyn}from"./chunk-2byjyg85.js";import{Zl,jn}from"./chunk-b84ke5ee.js";var d=14,f=10;async function ade(){try{let e=xt().pluginLoadCacheOnly;if(e===void 0)return[];if(kP()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=nm(),l=AT(),g=ne().numStartups,c=Date.now(),r=[];for(let n of s){let{marketplace:o}=jn(n.repository);if(!o||Zl(o))continue;if(vyn(n,u,l)!=="user-install")continue;if(p(n))continue;let i=T_t(n.repository);if(!i)continue;if(Syn(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=C_t(i,g,c);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function LVn(e){if(kP()!==null)return null;let s=T_t(e);if(!s)return null;if(Syn(e))return 0;return C_t(s,ne().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{ade,LVn};
