// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{$o}from"./chunk-4v4w26w4.js";import{Mc,jw,pP}from"./chunk-ww4tybgt.js";import{me}from"./chunk-merbp8kx.js";var b2=["userSettings","flagSettings","policySettings"];function Dge(t){let i=new Set($o()),e=jle(t),n,r;for(let s of b2){if(!i.has(s))continue;let g=me(s)?.pluginConfigs;for(let u of e){let o=g?.[u];if(o?.options)n={...n,...o.options};if(o?.mcpServers){r=r??{};for(let[l,c]of Object.entries(o.mcpServers))r[l]={...r[l],...c}}}}return{options:n,mcpServers:r}}function jle(t){let i=pP(t);if(i.length>0)return[...i.toReversed(),t];let e=`@${Mc}`,n=t.endsWith(e)?t.slice(0,-e.length):"";return n!==""&&!n.includes("@")?[n,t]:[t]}function m3n(t){let i=new Set($o()),e;for(let n of b2){if(!i.has(n))continue;let r=w3(me(n)?.enabledPlugins,t);if(r!==void 0)e=r}return e}function FUt(t,i){let e=jw(i),n=pP(e);if(n.length===0)return{deciding:i,written:i,replaced:[]};let r=n.filter((s)=>t?.[s]!==void 0);return{deciding:t?.[e]===void 0?r[0]??e:e,written:e,replaced:r}}function w3(t,i){let e=jw(i);return[e,...pP(e),i].map((n)=>t?.[n]).find((n)=>n!==void 0)}
export{b2,Dge,jle,m3n,FUt,w3};
