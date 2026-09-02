// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{n}from"./chunk-ynzt0fm1.js";import{ye,Je}from"./chunk-cx07awjk.js";import{PL,QMt,PS,mle}from"./chunk-fy12d89p.js";import{mwe,HDe,dp}from"./chunk-h4hvhzbw.js";async function Tse(){let t=Je(),i=[],r=mle();for(let[e,o]of Object.entries(r)){if(PS(e))continue;if(e.includes("@")&&o)i.push(e)}if(t.enabledPlugins)for(let[e,o]of Object.entries(t.enabledPlugins)){if(!e.includes("@"))continue;let c=PS(e)?QMt(e):o,s=i.indexOf(e);if(c){if(s===-1)i.push(e)}else if(s!==-1)i.splice(s,1)}return i}function f1(){let t=new Map,i=mle();for(let[e,o]of Object.entries(i)){if(!e.includes("@"))continue;if(PS(e))continue;if(o===!0)t.set(e,"flag");else if(o===!1)t.delete(e)}let r=[{scope:"managed",source:"policySettings"},{scope:"user",source:"userSettings"},{scope:"project",source:"projectSettings"},{scope:"local",source:"localSettings"},{scope:"flag",source:"flagSettings"}];for(let{scope:e,source:o}of r){let c=ye(o);if(!c?.enabledPlugins)continue;for(let[s,u]of Object.entries(c.enabledPlugins)){if(!s.includes("@"))continue;if(s in i&&i[s]!==u)n(`Plugin ${s} from --add-dir (${i[s]}) overridden by ${o} (${u})`);if(!PL.includes(o)&&PS(s))continue;if(u===!0)t.set(s,e);else if(u===!1)t.delete(s)}}return n(`Found ${t.size} enabled plugins with scopes: ${Array.from(t.entries()).map(([e,o])=>`${e}(${o})`).join(", ")}`),t}function R2e(t,i){let r=t.get(i);if(r!==void 0||!mwe(i))return r;let e=dp(i);for(let[o,c]of t)if(dp(o)===e)return c;return}function JTr(t){return HDe[t]}
export{Tse,f1,R2e,JTr};
