// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{t}from"./chunk-84crg0gy.js";import{be,Je}from"./chunk-03hrg0m9.js";import{BM,RBt,ww,yde}from"./chunk-5e9qk3ys.js";import{ECe,N1e,fp}from"./chunk-ayb9ctga.js";async function Sce(){let n=Je(),i=[],r=yde();for(let[e,o]of Object.entries(r)){if(ww.isEnabledFromTrustedSettingsOnly(e))continue;if(e.includes("@")&&o)i.push(e)}if(n.enabledPlugins)for(let[e,o]of Object.entries(n.enabledPlugins)){if(!e.includes("@"))continue;let c=ww.isEnabledFromTrustedSettingsOnly(e)?RBt(e):o,s=i.indexOf(e);if(c){if(s===-1)i.push(e)}else if(s!==-1)i.splice(s,1)}return i}function CF(){let n=new Map,i=yde();for(let[e,o]of Object.entries(i)){if(!e.includes("@"))continue;if(ww.isEnabledFromTrustedSettingsOnly(e))continue;if(o===!0)n.set(e,"flag");else if(o===!1)n.delete(e)}let r=[{scope:"managed",source:"policySettings"},{scope:"user",source:"userSettings"},{scope:"project",source:"projectSettings"},{scope:"local",source:"localSettings"},{scope:"flag",source:"flagSettings"}];for(let{scope:e,source:o}of r){let c=be(o);if(!c?.enabledPlugins)continue;for(let[s,u]of Object.entries(c.enabledPlugins)){if(!s.includes("@"))continue;if(s in i&&i[s]!==u)t(`Plugin ${s} from --add-dir (${i[s]}) overridden by ${o} (${u})`);if(!BM.includes(o)&&ww.isEnabledFromTrustedSettingsOnly(s))continue;if(u===!0)n.set(s,e);else if(u===!1)n.delete(s)}}return t(`Found ${n.size} enabled plugins with scopes: ${Array.from(n.entries()).map(([e,o])=>`${e}(${o})`).join(", ")}`),n}function M3e(n,i){let r=n.get(i);if(r!==void 0||!ECe(i))return r;let e=fp(i);for(let[o,c]of n)if(fp(o)===e)return c;return}function yHr(n){return N1e[n]}
export{Sce,CF,M3e,yHr};
