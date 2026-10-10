// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{t}from"./chunk-gyf58rwf.js";import{fe,ft}from"./chunk-x0dc37w9.js";import{fIt,_r}from"./chunk-nrk8z90j.js";import{C2,kK}from"./chunk-n3ykh62m.js";import{aW,yUn}from"./chunk-19nwhq5q.js";async function X2e(){let o=ft(),n=[],r=kK();for(let[e,i]of Object.entries(r)){if(C2(e))continue;if(e.includes("@")&&i)n.push(e)}if(o.enabledPlugins)for(let[e,i]of Object.entries(o.enabledPlugins)){if(!e.includes("@"))continue;let c=C2(e)?yUn(e):i,s=n.indexOf(e);if(c){if(s===-1)n.push(e)}else if(s!==-1)n.splice(s,1)}return n}function Sq(){let o=new Map,n=kK();for(let[e,i]of Object.entries(n)){if(!e.includes("@"))continue;if(C2(e))continue;if(i===!0)o.set(e,"flag");else if(i===!1)o.delete(e)}let r=[{scope:"managed",source:"policySettings"},{scope:"user",source:"userSettings"},{scope:"project",source:"projectSettings"},{scope:"local",source:"localSettings"},{scope:"flag",source:"flagSettings"}];for(let{scope:e,source:i}of r){let c=fe(i);if(!c?.enabledPlugins)continue;for(let[s,u]of Object.entries(c.enabledPlugins)){if(!s.includes("@"))continue;if(s in n&&n[s]!==u)t(`Plugin ${s} from --add-dir (${n[s]}) overridden by ${i} (${u})`);if(!aW.includes(i)&&C2(s))continue;if(u===!0)o.set(s,e);else if(u===!1)o.delete(s)}}return t(`Found ${o.size} enabled plugins with scopes: ${Array.from(o.entries()).map(([e,i])=>`${e}(${i})`).join(", ")}`),o}function fjt(o,n){let r=o.get(n);if(r!==void 0||!fIt(n))return r;let e=_r(n);for(let[i,c]of o)if(_r(i)===e)return c;return}export{X2e,Sq,fjt};
