// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ue}from"./chunk-bvn0epzr.js";import{t}from"./chunk-tdxkq523.js";import{Op,Cn}from"./chunk-gzssw8ss.js";import{Cp}from"./chunk-53cx5fek.js";import{NH,UH}from"./chunk-xw74sg2f.js";import{g3n}from"./chunk-m0prcny9.js";import{jCo,tGn,nGn,VCo}from"./chunk-z3na6jb1.js";var d=14,f=10;async function zqe(){try{let e=g3n();if(e===void 0)return[];if(UH()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Cp(),l=NH(),c=ue().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=Cn(n.repository);if(!o||Op(o))continue;if(VCo(n,u,l)!=="user-install")continue;if(p(n))continue;let i=tGn(n.repository);if(!i)continue;if(jCo(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=nGn(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function qcs(e){if(UH()!==null)return null;let s=tGn(e);if(!s)return null;if(jCo(e))return 0;return nGn(s,ue().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{zqe,qcs};
