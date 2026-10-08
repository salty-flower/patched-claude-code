// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ce}from"./chunk-gcyvvtkw.js";import{t}from"./chunk-b5feae42.js";import{df,Cn}from"./chunk-zza0b6kj.js";import{Hu}from"./chunk-x6r0vttx.js";import{OO,HO}from"./chunk-gt8bh0pr.js";import{cIn}from"./chunk-9nx4f2dn.js";import{Z7r,$An,UAn,rJr}from"./chunk-jr3n4w5s.js";var d=14,f=10;async function rBe(){try{let e=cIn();if(e===void 0)return[];if(HO()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Hu(),l=OO(),c=ce().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=Cn(n.repository);if(!o||df(o))continue;if(rJr(n,u,l)!=="user-install")continue;if(p(n))continue;let i=$An(n.repository);if(!i)continue;if(Z7r(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=UAn(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function dFo(e){if(HO()!==null)return null;let s=$An(e);if(!s)return null;if(Z7r(e))return 0;return UAn(s,ce().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{rBe,dFo};
