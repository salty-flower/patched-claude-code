// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ue}from"./chunk-k16gymf7.js";import{t}from"./chunk-cwsn6mdf.js";import{Vp,Cn}from"./chunk-hc3mrz77.js";import{dp}from"./chunk-t30p3a9r.js";import{zGn}from"./chunk-cr3hvp1y.js";import{tD,rD}from"./chunk-5745m8g4.js";import{qfo,N$n,$$n,Qfo}from"./chunk-nazzqhcs.js";var d=14,f=10;async function yKe(){try{let e=zGn();if(e===void 0)return[];if(rD()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=dp(),l=tD(),c=ue().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=Cn(n.repository);if(!o||Vp(o))continue;if(Qfo(n,u,l)!=="user-install")continue;if(p(n))continue;let i=N$n(n.repository);if(!i)continue;if(qfo(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=$$n(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function _Zo(e){if(rD()!==null)return null;let s=N$n(e);if(!s)return null;if(qfo(e))return 0;return $$n(s,ue().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{yKe,_Zo};
