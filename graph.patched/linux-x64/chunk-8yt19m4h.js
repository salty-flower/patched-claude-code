// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{t}from"./chunk-cmg3b5hg.js";import{ye,qe}from"./chunk-sp4f0zv3.js";import{hL,LQt}from"./chunk-k24n8ymg.js";import{nP,ofe}from"./chunk-2byjyg85.js";import{vWe,ys}from"./chunk-b84ke5ee.js";async function sde(){let o=qe(),n=[],r=ofe();for(let[e,i]of Object.entries(r)){if(nP(e))continue;if(e.includes("@")&&i)n.push(e)}if(o.enabledPlugins)for(let[e,i]of Object.entries(o.enabledPlugins)){if(!e.includes("@"))continue;let c=nP(e)?LQt(e):i,s=n.indexOf(e);if(c){if(s===-1)n.push(e)}else if(s!==-1)n.splice(s,1)}return n}function IU(){let o=new Map,n=ofe();for(let[e,i]of Object.entries(n)){if(!e.includes("@"))continue;if(nP(e))continue;if(i===!0)o.set(e,"flag");else if(i===!1)o.delete(e)}let r=[{scope:"managed",source:"policySettings"},{scope:"user",source:"userSettings"},{scope:"project",source:"projectSettings"},{scope:"local",source:"localSettings"},{scope:"flag",source:"flagSettings"}];for(let{scope:e,source:i}of r){let c=ye(i);if(!c?.enabledPlugins)continue;for(let[s,u]of Object.entries(c.enabledPlugins)){if(!s.includes("@"))continue;if(s in n&&n[s]!==u)t(`Plugin ${s} from --add-dir (${n[s]}) overridden by ${i} (${u})`);if(!hL.includes(i)&&nP(s))continue;if(u===!0)o.set(s,e);else if(u===!1)o.delete(s)}}return t(`Found ${o.size} enabled plugins with scopes: ${Array.from(o.entries()).map(([e,i])=>`${e}(${i})`).join(", ")}`),o}function I4e(o,n){let r=o.get(n);if(r!==void 0||!vWe(n))return r;let e=ys(n);for(let[i,c]of o)if(ys(i)===e)return c;return}export{sde,IU,I4e};
