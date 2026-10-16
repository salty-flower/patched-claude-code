// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ue}from"./chunk-1901fdh6.js";import{t}from"./chunk-bnfhb7sj.js";import{Vp,Tn}from"./chunk-jmghkf3s.js";import{lp}from"./chunk-2pjfzhxh.js";import{lzn}from"./chunk-tbc65dc4.js";import{oM,iM}from"./chunk-chdmy0ef.js";import{vmo,r$n,o$n,Tmo}from"./chunk-t1evy9pr.js";var d=14,f=10;async function CVe(){try{let e=lzn();if(e===void 0)return[];if(iM()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=lp(),l=oM(),c=ue().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=Tn(n.repository);if(!o||Vp(o))continue;if(Tmo(n,u,l)!=="user-install")continue;if(p(n))continue;let i=r$n(n.repository);if(!i)continue;if(vmo(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=o$n(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function res(e){if(iM()!==null)return null;let s=r$n(e);if(!s)return null;if(vmo(e))return 0;return o$n(s,ue().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{CVe,res};
