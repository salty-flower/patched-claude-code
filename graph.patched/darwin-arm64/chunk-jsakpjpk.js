// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{o4t,CRt,TRt,s4t}from"./chunk-0x9x817t.js";function h(e,o){let p=TRt(e),s=Math.min(p.length,o4t());return 2+s4t(e,o).length+2+s+1}function Ijt(e,o,p){let s=new Map;for(let n of e){if(n.type!=="prompt"||n.disableModelInvocation)continue;let t=n.pluginInfo?.pluginManifest.name;if(!t)continue;let a=h(n,e),r=s.get(t)??[];r.push({name:n.name,chars:a,approxTokens:Math.round(a/o)}),s.set(t,r)}let m=[...s.entries()].map(([n,t])=>{t.sort((r,u)=>u.chars-r.chars);let a=t.reduce((r,u)=>r+u.chars,0);return{pluginName:n,skillCount:t.length,chars:a,approxTokens:Math.round(a/o),skills:t}}).sort((n,t)=>t.chars-n.chars),c=m.reduce((n,t)=>n+t.chars,0),i=CRt(p,o),l=c>i,g=l?i:c;return{byPlugin:m,totalChars:g,totalTokens:Math.round(g/o),overBudget:l,budgetTokens:Math.round(i/o)}}
export{Ijt};
