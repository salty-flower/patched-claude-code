// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{ie}from"./chunk-vtwn1md5.js";import{t}from"./chunk-84crg0gy.js";import{PN}from"./chunk-e789chw0.js";import{mv,Yt}from"./chunk-me1zssgs.js";import{jd,rfn,Xmt,Ymt,ifn}from"./chunk-5e9qk3ys.js";import{sc,Zt}from"./chunk-ayb9ctga.js";var d=14,f=10;async function _ce(){try{let e=Yt().pluginLoadCacheOnly;if(e===void 0)return[];if(PN()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=jd(),l=mv(),g=ie().numStartups,c=Date.now(),r=[];for(let n of s){let{marketplace:o}=Zt(n.repository);if(!o||sc(o))continue;if(ifn(n,u,l)!=="user-install")continue;if(p(n))continue;let i=Xmt(n.repository);if(!i)continue;if(rfn(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=Ymt(i,g,c);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function o6n(e){if(PN()!==null)return null;let s=Xmt(e);if(!s)return null;if(rfn(e))return 0;return Ymt(s,ie().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{_ce,o6n};
