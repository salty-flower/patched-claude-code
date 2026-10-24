// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{ue}from"./chunk-27xjmczp.js";import{t}from"./chunk-d7b0m8qy.js";import{Vp,On}from"./chunk-qnvapa9t.js";import{Sp}from"./chunk-2nbdxfp7.js";import{rL,iL}from"./chunk-bp7z975p.js";import{ytr}from"./chunk-hxt89a41.js";import{hDo,E4n,v4n,wDo}from"./chunk-9xx8r7sg.js";var d=14,f=10;async function d8e(){try{let e=ytr();if(e===void 0)return[];if(iL()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Sp(),l=rL(),c=ue().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=On(n.repository);if(!o||Vp(o))continue;if(wDo(n,u,l)!=="user-install")continue;if(p(n))continue;let i=E4n(n.repository);if(!i)continue;if(hDo(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=v4n(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function Hks(e){if(iL()!==null)return null;let s=E4n(e);if(!s)return null;if(hDo(e))return 0;return v4n(s,ue().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{d8e,Hks};
