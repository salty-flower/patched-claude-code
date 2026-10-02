// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{as}from"./chunk-vratfdfe.js";import{ge}from"./chunk-e561d543.js";import{Dd,U_,sA}from"./chunk-tzrm2y8w.js";var F$=["userSettings","flagSettings","policySettings"];function Ene(t){let i=new Set(as()),e=Vce(t),n,r;for(let s of F$){if(!i.has(s))continue;let g=ge(s)?.pluginConfigs;for(let u of e){let o=g?.[u];if(o?.options)n={...n,...o.options};if(o?.mcpServers){r=r??{};for(let[l,c]of Object.entries(o.mcpServers))r[l]={...r[l],...c}}}}return{options:n,mcpServers:r}}function Vce(t){let i=sA(t);if(i.length>0)return[...i.toReversed(),t];let e=`@${Dd}`,n=t.endsWith(e)?t.slice(0,-e.length):"";return n!==""&&!n.includes("@")?[n,t]:[t]}function Xpn(t){let i=new Set(as()),e;for(let n of F$){if(!i.has(n))continue;let r=v6(ge(n)?.enabledPlugins,t);if(r!==void 0)e=r}return e}function Cpt(t,i){let e=U_(i),n=sA(e);if(n.length===0)return{deciding:i,written:i,replaced:[]};let r=n.filter((s)=>t?.[s]!==void 0);return{deciding:t?.[e]===void 0?r[0]??e:e,written:e,replaced:r}}function v6(t,i){let e=U_(i);return[e,...sA(e),i].map((n)=>t?.[n]).find((n)=>n!==void 0)}
export{F$,Ene,Vce,Xpn,Cpt,v6};
