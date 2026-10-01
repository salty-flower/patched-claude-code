// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{ce}from"./chunk-er6f56rj.js";import{t}from"./chunk-3wz0srxw.js";import{fp,or}from"./chunk-tzrm2y8w.js";import{ih}from"./chunk-gf1t3q9p.js";import{JC}from"./chunk-rfw62dar.js";import{pD}from"./chunk-xrbxbnf2.js";import{mdn}from"./chunk-8e0p2krp.js";import{bSr,rQt,oQt,vSr}from"./chunk-59zy4j10.js";var d=14,f=10;async function mHe(){try{let e=mdn();if(e===void 0)return[];if(pD()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=ih(),l=JC(),c=ce().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=or(n.repository);if(!o||fp(o))continue;if(vSr(n,u,l)!=="user-install")continue;if(p(n))continue;let i=rQt(n.repository);if(!i)continue;if(bSr(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=oQt(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function $oo(e){if(pD()!==null)return null;let s=rQt(e);if(!s)return null;if(bSr(e))return 0;return oQt(s,ce().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{mHe,$oo};
