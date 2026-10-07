// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ce}from"./chunk-m0sj7y8g.js";import{t}from"./chunk-gvn18sr5.js";import{Qp,kn}from"./chunk-hyvfy8xz.js";import{Eu}from"./chunk-qvhckzw0.js";import{tO,nO}from"./chunk-x35ssz7t.js";import{KTn}from"./chunk-3ev0pkzh.js";import{N4r,Dwn,Lwn,B4r}from"./chunk-e7jmq0k6.js";var d=14,f=10;async function CFe(){try{let e=KTn();if(e===void 0)return[];if(nO()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Eu(),l=tO(),c=ce().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=kn(n.repository);if(!o||Qp(o))continue;if(B4r(n,u,l)!=="user-install")continue;if(p(n))continue;let i=Dwn(n.repository);if(!i)continue;if(N4r(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=Lwn(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function Dxo(e){if(nO()!==null)return null;let s=Dwn(e);if(!s)return null;if(N4r(e))return 0;return Lwn(s,ce().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{CFe,Dxo};
