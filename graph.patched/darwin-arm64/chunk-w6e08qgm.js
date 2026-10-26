// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ro}from"./chunk-t4r22my8.js";import{nu,jw,xI}from"./chunk-qnvapa9t.js";import{fe}from"./chunk-32v5ghb4.js";var NV=["userSettings","flagSettings","policySettings"];function N_e(t){let i=new Set(Ro()),e=gue(t),n,r;for(let s of NV){if(!i.has(s))continue;let g=fe(s)?.pluginConfigs;for(let u of e){let o=g?.[u];if(o?.options)n={...n,...o.options};if(o?.mcpServers){r=r??{};for(let[l,c]of Object.entries(o.mcpServers))r[l]={...r[l],...c}}}}return{options:n,mcpServers:r}}function gue(t){let i=xI(t);if(i.length>0)return[...i.toReversed(),t];let e=`@${nu}`,n=t.endsWith(e)?t.slice(0,-e.length):"";return n!==""&&!n.includes("@")?[n,t]:[t]}function gtr(t){let i=new Set(Ro()),e;for(let n of NV){if(!i.has(n))continue;let r=TY(fe(n)?.enabledPlugins,t);if(r!==void 0)e=r}return e}function hzt(t,i){let e=jw(i),n=xI(e);if(n.length===0)return{deciding:i,written:i,replaced:[]};let r=n.filter((s)=>t?.[s]!==void 0);return{deciding:t?.[e]===void 0?r[0]??e:e,written:e,replaced:r}}function TY(t,i){let e=jw(i);return[e,...xI(e),i].map((n)=>t?.[n]).find((n)=>n!==void 0)}
export{NV,N_e,gue,gtr,hzt,TY};
