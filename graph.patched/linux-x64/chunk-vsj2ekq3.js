// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{n}from"./chunk-d0cr5d2v.js";import{_e,Je}from"./chunk-30zpf1a7.js";import{x$,QMt,Lb,dle}from"./chunk-h6btyxas.js";import{uHe,T0e,df}from"./chunk-esrvwhf8.js";async function bse(){let t=Je(),i=[],r=dle();for(let[e,o]of Object.entries(r)){if(Lb(e))continue;if(e.includes("@")&&o)i.push(e)}if(t.enabledPlugins)for(let[e,o]of Object.entries(t.enabledPlugins)){if(!e.includes("@"))continue;let c=Lb(e)?QMt(e):o,s=i.indexOf(e);if(c){if(s===-1)i.push(e)}else if(s!==-1)i.splice(s,1)}return i}function fN(){let t=new Map,i=dle();for(let[e,o]of Object.entries(i)){if(!e.includes("@"))continue;if(Lb(e))continue;if(o===!0)t.set(e,"flag");else if(o===!1)t.delete(e)}let r=[{scope:"managed",source:"policySettings"},{scope:"user",source:"userSettings"},{scope:"project",source:"projectSettings"},{scope:"local",source:"localSettings"},{scope:"flag",source:"flagSettings"}];for(let{scope:e,source:o}of r){let c=_e(o);if(!c?.enabledPlugins)continue;for(let[s,u]of Object.entries(c.enabledPlugins)){if(!s.includes("@"))continue;if(s in i&&i[s]!==u)n(`Plugin ${s} from --add-dir (${i[s]}) overridden by ${o} (${u})`);if(!x$.includes(o)&&Lb(s))continue;if(u===!0)t.set(s,e);else if(u===!1)t.delete(s)}}return n(`Found ${t.size} enabled plugins with scopes: ${Array.from(t.entries()).map(([e,o])=>`${e}(${o})`).join(", ")}`),t}function Aje(t,i){let r=t.get(i);if(r!==void 0||!uHe(i))return r;let e=df(i);for(let[o,c]of t)if(df(o)===e)return c;return}function Gwr(t){return T0e[t]}
export{bse,fN,Aje,Gwr};
