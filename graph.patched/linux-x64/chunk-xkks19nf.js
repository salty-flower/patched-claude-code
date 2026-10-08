// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Wo}from"./chunk-8ky01sys.js";import{me}from"./chunk-gsa86a2x.js";import{wd,vS,bC}from"./chunk-wn3mk0qg.js";var $j=["userSettings","flagSettings","policySettings"];function Ole(t){let i=new Set(Wo()),e=vne(t),n,r;for(let s of $j){if(!i.has(s))continue;let g=me(s)?.pluginConfigs;for(let u of e){let o=g?.[u];if(o?.options)n={...n,...o.options};if(o?.mcpServers){r=r??{};for(let[l,c]of Object.entries(o.mcpServers))r[l]={...r[l],...c}}}}return{options:n,mcpServers:r}}function vne(t){let i=bC(t);if(i.length>0)return[...i.toReversed(),t];let e=`@${wd}`,n=t.endsWith(e)?t.slice(0,-e.length):"";return n!==""&&!n.includes("@")?[n,t]:[t]}function PHn(t){let i=new Set(Wo()),e;for(let n of $j){if(!i.has(n))continue;let r=QK(me(n)?.enabledPlugins,t);if(r!==void 0)e=r}return e}function AAt(t,i){let e=vS(i),n=bC(e);if(n.length===0)return{deciding:i,written:i,replaced:[]};let r=n.filter((s)=>t?.[s]!==void 0);return{deciding:t?.[e]===void 0?r[0]??e:e,written:e,replaced:r}}function QK(t,i){let e=vS(i);return[e,...bC(e),i].map((n)=>t?.[n]).find((n)=>n!==void 0)}
export{$j,Ole,vne,PHn,AAt,QK};
