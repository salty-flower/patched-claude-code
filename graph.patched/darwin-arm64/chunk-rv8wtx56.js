// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Fo}from"./chunk-9s9xt61j.js";import{me}from"./chunk-861a7whf.js";import{dd,db,jA}from"./chunk-vhhr71m6.js";var VB=["userSettings","flagSettings","policySettings"];function rae(t){let i=new Set(Fo()),e=rte(t),n,r;for(let s of VB){if(!i.has(s))continue;let g=me(s)?.pluginConfigs;for(let u of e){let o=g?.[u];if(o?.options)n={...n,...o.options};if(o?.mcpServers){r=r??{};for(let[l,c]of Object.entries(o.mcpServers))r[l]={...r[l],...c}}}}return{options:n,mcpServers:r}}function rte(t){let i=jA(t);if(i.length>0)return[...i.toReversed(),t];let e=`@${dd}`,n=t.endsWith(e)?t.slice(0,-e.length):"";return n!==""&&!n.includes("@")?[n,t]:[t]}function Uxn(t){let i=new Set(Fo()),e;for(let n of VB){if(!i.has(n))continue;let r=XV(me(n)?.enabledPlugins,t);if(r!==void 0)e=r}return e}function hvt(t,i){let e=db(i),n=jA(e);if(n.length===0)return{deciding:i,written:i,replaced:[]};let r=n.filter((s)=>t?.[s]!==void 0);return{deciding:t?.[e]===void 0?r[0]??e:e,written:e,replaced:r}}function XV(t,i){let e=db(i);return[e,...jA(e),i].map((n)=>t?.[n]).find((n)=>n!==void 0)}
export{VB,rae,rte,Uxn,hvt,XV};
