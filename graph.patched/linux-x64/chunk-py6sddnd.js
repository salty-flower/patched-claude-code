// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{JU,tAe,Ene}from"./chunk-aywwjcwq.js";import{Tr}from"./chunk-bpkzpttw.js";import{Wr}from"./chunk-rvdjk62s.js";import{iF}from"./chunk-qvhckzw0.js";import{_y,ysr,AXr,NS,F9}from"./chunk-ab4khrmp.js";function s9(o){if(Wr("hooks"))return[];let e=JU()?.[o]??[];if(NS())return e.filter((n)=>!("pluginRoot"in n)&&!("deviceOwner"in n));let i=a(),{managedOnly:t,managedPluginIds:s}=i,r=AXr(),l=tAe();return[...F9()?.[o]??[],...t?[]:Ene()?.[o]??[],...e.filter((n)=>c(n)&&l?.holds(n.pluginId)===!0?!(ysr()&&!s?.has(n.pluginId)):(!("pluginRoot"in n)||p(n.pluginId,i))&&!(r&&("deviceOwner"in n)))]}function c(o){return"pluginRoot"in o&&o.hooks.every((e)=>e.type==="command")}function a(){let o=_y();return{managedOnly:o,managedPluginIds:o&&!Tr()?iF():null}}function p(o,{managedOnly:e,managedPluginIds:i}){return!e||i?.has(o)===!0}function O4r(){return!Wr("hooks")&&!NS()&&!Tr()}var jzt=(o)=>o.mcpInfo?.effectiveMaxPermission==="ask"?{ceiling:"ask"}:{};var x_t=(o)=>({tool:o.name,ceiling:jzt(o).ceiling});export{s9,O4r,jzt,x_t};
