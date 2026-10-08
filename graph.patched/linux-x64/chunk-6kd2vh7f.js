// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ce}from"./chunk-cxjvwxsa.js";import{t}from"./chunk-p46wpkfz.js";import{df,Tn}from"./chunk-wn3mk0qg.js";import{Hu}from"./chunk-gdbczw5p.js";import{xO,PO}from"./chunk-0avs5kwj.js";import{GPn}from"./chunk-fty280t7.js";import{hJr,uAn,pAn,SJr}from"./chunk-024q56rr.js";var d=14,f=10;async function YBe(){try{let e=GPn();if(e===void 0)return[];if(PO()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Hu(),l=xO(),c=ce().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=Tn(n.repository);if(!o||df(o))continue;if(SJr(n,u,l)!=="user-install")continue;if(p(n))continue;let i=uAn(n.repository);if(!i)continue;if(hJr(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=pAn(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function ANo(e){if(PO()!==null)return null;let s=uAn(e);if(!s)return null;if(hJr(e))return 0;return pAn(s,ce().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{YBe,ANo};
