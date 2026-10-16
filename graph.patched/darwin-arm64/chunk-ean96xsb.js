// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Bo}from"./chunk-jybqja29.js";import{me}from"./chunk-61p68esv.js";import{yc,yw,wx}from"./chunk-jmghkf3s.js";var $G=["userSettings","flagSettings","policySettings"];function Eme(t){let i=new Set(Bo()),e=$ae(t),n,r;for(let s of $G){if(!i.has(s))continue;let g=me(s)?.pluginConfigs;for(let u of e){let o=g?.[u];if(o?.options)n={...n,...o.options};if(o?.mcpServers){r=r??{};for(let[l,c]of Object.entries(o.mcpServers))r[l]={...r[l],...c}}}}return{options:n,mcpServers:r}}function $ae(t){let i=wx(t);if(i.length>0)return[...i.toReversed(),t];let e=`@${yc}`,n=t.endsWith(e)?t.slice(0,-e.length):"";return n!==""&&!n.includes("@")?[n,t]:[t]}function wqn(t){let i=new Set(Bo()),e;for(let n of $G){if(!i.has(n))continue;let r=D5(me(n)?.enabledPlugins,t);if(r!==void 0)e=r}return e}function XNt(t,i){let e=yw(i),n=wx(e);if(n.length===0)return{deciding:i,written:i,replaced:[]};let r=n.filter((s)=>t?.[s]!==void 0);return{deciding:t?.[e]===void 0?r[0]??e:e,written:e,replaced:r}}function D5(t,i){let e=yw(i);return[e,...wx(e),i].map((n)=>t?.[n]).find((n)=>n!==void 0)}
export{$G,Eme,$ae,wqn,XNt,D5};
