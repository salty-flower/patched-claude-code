// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{t}from"./chunk-f8eqwxpt.js";import{me,ct}from"./chunk-861a7whf.js";import{_vt,Lr}from"./chunk-vhhr71m6.js";import{fB,Xz}from"./chunk-2s6nnhcv.js";import{VB,Uxn}from"./chunk-rv8wtx56.js";async function H$e(){let o=ct(),n=[],r=Xz();for(let[e,i]of Object.entries(r)){if(fB(e))continue;if(e.includes("@")&&i)n.push(e)}if(o.enabledPlugins)for(let[e,i]of Object.entries(o.enabledPlugins)){if(!e.includes("@"))continue;let c=fB(e)?Uxn(e):i,s=n.indexOf(e);if(c){if(s===-1)n.push(e)}else if(s!==-1)n.splice(s,1)}return n}function W6(){let o=new Map,n=Xz();for(let[e,i]of Object.entries(n)){if(!e.includes("@"))continue;if(fB(e))continue;if(i===!0)o.set(e,"flag");else if(i===!1)o.delete(e)}let r=[{scope:"managed",source:"policySettings"},{scope:"user",source:"userSettings"},{scope:"project",source:"projectSettings"},{scope:"local",source:"localSettings"},{scope:"flag",source:"flagSettings"}];for(let{scope:e,source:i}of r){let c=me(i);if(!c?.enabledPlugins)continue;for(let[s,u]of Object.entries(c.enabledPlugins)){if(!s.includes("@"))continue;if(s in n&&n[s]!==u)t(`Plugin ${s} from --add-dir (${n[s]}) overridden by ${i} (${u})`);if(!VB.includes(i)&&fB(s))continue;if(u===!0)o.set(s,e);else if(u===!1)o.delete(s)}}return t(`Found ${o.size} enabled plugins with scopes: ${Array.from(o.entries()).map(([e,i])=>`${e}(${i})`).join(", ")}`),o}function FMt(o,n){let r=o.get(n);if(r!==void 0||!_vt(n))return r;let e=Lr(n);for(let[i,c]of o)if(Lr(i)===e)return c;return}export{H$e,W6,FMt};
