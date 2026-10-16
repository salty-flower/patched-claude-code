// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Bo}from"./chunk-9t95885m.js";import{me}from"./chunk-a502zyxr.js";import{yc,hw,_x}from"./chunk-hc3mrz77.js";var xG=["userSettings","flagSettings","policySettings"];function gme(t){let i=new Set(Bo()),e=Mae(t),n,r;for(let s of xG){if(!i.has(s))continue;let g=me(s)?.pluginConfigs;for(let u of e){let o=g?.[u];if(o?.options)n={...n,...o.options};if(o?.mcpServers){r=r??{};for(let[l,c]of Object.entries(o.mcpServers))r[l]={...r[l],...c}}}}return{options:n,mcpServers:r}}function Mae(t){let i=_x(t);if(i.length>0)return[...i.toReversed(),t];let e=`@${yc}`,n=t.endsWith(e)?t.slice(0,-e.length):"";return n!==""&&!n.includes("@")?[n,t]:[t]}function rqn(t){let i=new Set(Bo()),e;for(let n of xG){if(!i.has(n))continue;let r=R5(me(n)?.enabledPlugins,t);if(r!==void 0)e=r}return e}function FNt(t,i){let e=hw(i),n=_x(e);if(n.length===0)return{deciding:i,written:i,replaced:[]};let r=n.filter((s)=>t?.[s]!==void 0);return{deciding:t?.[e]===void 0?r[0]??e:e,written:e,replaced:r}}function R5(t,i){let e=hw(i);return[e,..._x(e),i].map((n)=>t?.[n]).find((n)=>n!==void 0)}
export{xG,gme,Mae,rqn,FNt,R5};
