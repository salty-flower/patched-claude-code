// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Wo}from"./chunk-2r0ph8pf.js";import{me}from"./chunk-48by85wp.js";import{Ed,vb,ET}from"./chunk-zza0b6kj.js";var Jj=["userSettings","flagSettings","policySettings"];function $le(t){let i=new Set(Wo()),e=Rne(t),n,r;for(let s of Jj){if(!i.has(s))continue;let g=me(s)?.pluginConfigs;for(let u of e){let o=g?.[u];if(o?.options)n={...n,...o.options};if(o?.mcpServers){r=r??{};for(let[l,c]of Object.entries(o.mcpServers))r[l]={...r[l],...c}}}}return{options:n,mcpServers:r}}function Rne(t){let i=ET(t);if(i.length>0)return[...i.toReversed(),t];let e=`@${Ed}`,n=t.endsWith(e)?t.slice(0,-e.length):"";return n!==""&&!n.includes("@")?[n,t]:[t]}function KHn(t){let i=new Set(Wo()),e;for(let n of Jj){if(!i.has(n))continue;let r=sK(me(n)?.enabledPlugins,t);if(r!==void 0)e=r}return e}function NAt(t,i){let e=vb(i),n=ET(e);if(n.length===0)return{deciding:i,written:i,replaced:[]};let r=n.filter((s)=>t?.[s]!==void 0);return{deciding:t?.[e]===void 0?r[0]??e:e,written:e,replaced:r}}function sK(t,i){let e=vb(i);return[e,...ET(e),i].map((n)=>t?.[n]).find((n)=>n!==void 0)}
export{Jj,$le,Rne,KHn,NAt,sK};
