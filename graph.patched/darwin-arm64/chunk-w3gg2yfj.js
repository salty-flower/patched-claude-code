// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Fo}from"./chunk-58pv6r0f.js";import{Hc,Ww,hP}from"./chunk-gzssw8ss.js";import{me}from"./chunk-qwytg6a7.js";var xz=["userSettings","flagSettings","policySettings"];function jge(t){let i=new Set(Fo()),e=qle(t),n,r;for(let s of xz){if(!i.has(s))continue;let g=me(s)?.pluginConfigs;for(let u of e){let o=g?.[u];if(o?.options)n={...n,...o.options};if(o?.mcpServers){r=r??{};for(let[l,c]of Object.entries(o.mcpServers))r[l]={...r[l],...c}}}}return{options:n,mcpServers:r}}function qle(t){let i=hP(t);if(i.length>0)return[...i.toReversed(),t];let e=`@${Hc}`,n=t.endsWith(e)?t.slice(0,-e.length):"";return n!==""&&!n.includes("@")?[n,t]:[t]}function O9n(t){let i=new Set(Fo()),e;for(let n of xz){if(!i.has(n))continue;let r=R9(me(n)?.enabledPlugins,t);if(r!==void 0)e=r}return e}function XUt(t,i){let e=Ww(i),n=hP(e);if(n.length===0)return{deciding:i,written:i,replaced:[]};let r=n.filter((s)=>t?.[s]!==void 0);return{deciding:t?.[e]===void 0?r[0]??e:e,written:e,replaced:r}}function R9(t,i){let e=Ww(i);return[e,...hP(e),i].map((n)=>t?.[n]).find((n)=>n!==void 0)}
export{xz,jge,qle,O9n,XUt,R9};
