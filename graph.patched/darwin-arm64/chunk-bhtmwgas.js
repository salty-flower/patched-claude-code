// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{t}from"./chunk-t2jwg94b.js";import{be,Je}from"./chunk-yhqjr2er.js";import{RM,v$t,JS,vue}from"./chunk-darxmw8c.js";import{rAe,nNe,sp}from"./chunk-zesc0ppt.js";async function Sle(){let n=Je(),i=[],r=vue();for(let[e,o]of Object.entries(r)){if(JS.isEnabledFromTrustedSettingsOnly(e))continue;if(e.includes("@")&&o)i.push(e)}if(n.enabledPlugins)for(let[e,o]of Object.entries(n.enabledPlugins)){if(!e.includes("@"))continue;let c=JS.isEnabledFromTrustedSettingsOnly(e)?v$t(e):o,s=i.indexOf(e);if(c){if(s===-1)i.push(e)}else if(s!==-1)i.splice(s,1)}return i}function aF(){let n=new Map,i=vue();for(let[e,o]of Object.entries(i)){if(!e.includes("@"))continue;if(JS.isEnabledFromTrustedSettingsOnly(e))continue;if(o===!0)n.set(e,"flag");else if(o===!1)n.delete(e)}let r=[{scope:"managed",source:"policySettings"},{scope:"user",source:"userSettings"},{scope:"project",source:"projectSettings"},{scope:"local",source:"localSettings"},{scope:"flag",source:"flagSettings"}];for(let{scope:e,source:o}of r){let c=be(o);if(!c?.enabledPlugins)continue;for(let[s,u]of Object.entries(c.enabledPlugins)){if(!s.includes("@"))continue;if(s in i&&i[s]!==u)t(`Plugin ${s} from --add-dir (${i[s]}) overridden by ${o} (${u})`);if(!RM.includes(o)&&JS.isEnabledFromTrustedSettingsOnly(s))continue;if(u===!0)n.set(s,e);else if(u===!1)n.delete(s)}}return t(`Found ${n.size} enabled plugins with scopes: ${Array.from(n.entries()).map(([e,o])=>`${e}(${o})`).join(", ")}`),n}function MWe(n,i){let r=n.get(i);if(r!==void 0||!rAe(i))return r;let e=sp(i);for(let[o,c]of n)if(sp(o)===e)return c;return}function Hvr(n){return nNe[n]}
export{Sle,aF,MWe,Hvr};
