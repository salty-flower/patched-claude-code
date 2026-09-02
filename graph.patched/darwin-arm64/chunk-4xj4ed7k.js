// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{oe}from"./chunk-bsdtxcdc.js";import{n}from"./chunk-ynzt0fm1.js";import{xM}from"./chunk-fys1x60x.js";import{QE,Jt}from"./chunk-09ppf9ea.js";import{Id,qin,Tct,Ect,zin}from"./chunk-fy12d89p.js";import{uc,Vt}from"./chunk-h4hvhzbw.js";var d=14,f=10;async function Ase(){try{let e=Jt().pluginLoadCacheOnly;if(e===void 0)return[];if(xM()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Id(),l=QE(),g=oe().numStartups,c=Date.now(),r=[];for(let t of s){let{marketplace:o}=Vt(t.repository);if(!o||uc(o))continue;if(zin(t,u,l)!=="user-install")continue;if(p(t))continue;let i=Tct(t.repository);if(!i)continue;if(qin(t.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=Ect(i,g,c);if(a>=d&&m>=f)r.push({pluginId:t.repository,name:t.name,daysSinceLastUse:a})}return r.sort((t,o)=>o.daysSinceLastUse-t.daysSinceLastUse),r}catch(e){return n(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function ONn(e){if(xM()!==null)return null;let s=Tct(e);if(!s)return null;if(qin(e))return 0;return Ect(s,oe().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{Ase,ONn};
