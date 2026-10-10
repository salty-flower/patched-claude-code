// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ce}from"./chunk-bk5ct2gw.js";import{t}from"./chunk-gyf58rwf.js";import{Up,En}from"./chunk-nrk8z90j.js";import{ju}from"./chunk-cx7rxhps.js";import{j0,W0}from"./chunk-s9zkj3fw.js";import{$Dn}from"./chunk-3ph567jx.js";import{Oro,gOn,hOn,Lro}from"./chunk-1n9rk9tp.js";var d=14,f=10;async function K2e(){try{let e=$Dn();if(e===void 0)return[];if(W0()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=ju(),l=j0(),c=ce().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=En(n.repository);if(!o||Up(o))continue;if(Lro(n,u,l)!=="user-install")continue;if(p(n))continue;let i=gOn(n.repository);if(!i)continue;if(Oro(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=hOn(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function bzo(e){if(W0()!==null)return null;let s=gOn(e);if(!s)return null;if(Oro(e))return 0;return hOn(s,ce().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{K2e,bzo};
