// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Vrn,b1t,w1t,qrn}from"./chunk-wqb2b4v0.js";function h(e,o){let p=w1t(e),s=Math.min(p.length,Vrn());return 2+qrn(e,o).length+2+s+1}function B7t(e,o,p){let s=new Map;for(let n of e){if(n.type!=="prompt"||n.disableModelInvocation)continue;let t=n.pluginInfo?.pluginManifest.name;if(!t)continue;let a=h(n,e),r=s.get(t)??[];r.push({name:n.name,chars:a,approxTokens:Math.round(a/o)}),s.set(t,r)}let u=[...s.entries()].map(([n,t])=>{t.sort((r,i)=>i.chars-r.chars);let a=t.reduce((r,i)=>r+i.chars,0);return{pluginName:n,skillCount:t.length,chars:a,approxTokens:Math.round(a/o),skills:t}}).sort((n,t)=>t.chars-n.chars),m=u.reduce((n,t)=>n+t.chars,0),c=b1t(p,o),l=m>c,g=l?c:m;return{byPlugin:u,totalChars:g,totalTokens:Math.round(g/o),overBudget:l}}
export{B7t};
