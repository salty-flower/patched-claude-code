// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{aU,lAe,Ine}from"./chunk-8mvda08c.js";import{kr}from"./chunk-xbg4a11x.js";import{Wr}from"./chunk-n8x5cq4e.js";import{h$}from"./chunk-kxmkxnwc.js";import{Sy,Fsr,e7r,Fb,VY}from"./chunk-7ewj4b02.js";function gY(o){if(Wr("hooks"))return[];let e=aU()?.[o]??[];if(Fb())return e.filter((n)=>!("pluginRoot"in n)&&!("deviceOwner"in n));let i=a(),{managedOnly:t,managedPluginIds:s}=i,r=e7r(),l=lAe();return[...VY()?.[o]??[],...t?[]:Ine()?.[o]??[],...e.filter((n)=>c(n)&&l?.holds(n.pluginId)===!0?!(Fsr()&&!s?.has(n.pluginId)):(!("pluginRoot"in n)||p(n.pluginId,i))&&!(r&&("deviceOwner"in n)))]}function c(o){return"pluginRoot"in o&&o.hooks.every((e)=>e.type==="command")}function a(){let o=Sy();return{managedOnly:o,managedPluginIds:o&&!kr()?h$():null}}function p(o,{managedOnly:e,managedPluginIds:i}){return!e||i?.has(o)===!0}function m3r(){return!Wr("hooks")&&!Fb()&&!kr()}var pGt=(o)=>o.mcpInfo?.effectiveMaxPermission==="ask"?{ceiling:"ask"}:{};var W_t=(o)=>({tool:o.name,ceiling:pGt(o).ceiling});export{gY,m3r,pGt,W_t};
