// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ue}from"./chunk-7p6jp6kj.js";import{t}from"./chunk-n5v91jc3.js";import{Mp,Tn}from"./chunk-ww4tybgt.js";import{Ap}from"./chunk-0nrx1yfa.js";import{MD,LD}from"./chunk-n6s5n8rn.js";import{J4n}from"./chunk-d4ftdked.js";import{mTo,$Gn,FGn,_To}from"./chunk-166ekv9c.js";var d=14,f=10;async function $4e(){try{let e=J4n();if(e===void 0)return[];if(LD()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Ap(),l=MD(),c=ue().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=Tn(n.repository);if(!o||Mp(o))continue;if(_To(n,u,l)!=="user-install")continue;if(p(n))continue;let i=$Gn(n.repository);if(!i)continue;if(mTo(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=FGn(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function gcs(e){if(LD()!==null)return null;let s=$Gn(e);if(!s)return null;if(mTo(e))return 0;return FGn(s,ue().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{$4e,gcs};
