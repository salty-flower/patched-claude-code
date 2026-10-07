// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ce}from"./chunk-s46qgfx7.js";import{t}from"./chunk-f8eqwxpt.js";import{Qp,Cn}from"./chunk-vhhr71m6.js";import{Eu}from"./chunk-kxmkxnwc.js";import{oO,sO}from"./chunk-qdb771kt.js";import{pAn}from"./chunk-pnnj0wrk.js";import{a3r,qwn,Kwn,u3r}from"./chunk-673m5wx4.js";var d=14,f=10;async function D$e(){try{let e=pAn();if(e===void 0)return[];if(sO()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Eu(),l=oO(),c=ce().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=Cn(n.repository);if(!o||Qp(o))continue;if(u3r(n,u,l)!=="user-install")continue;if(p(n))continue;let i=qwn(n.repository);if(!i)continue;if(a3r(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=Kwn(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function SPo(e){if(sO()!==null)return null;let s=qwn(e);if(!s)return null;if(a3r(e))return 0;return Kwn(s,ce().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{D$e,SPo};
