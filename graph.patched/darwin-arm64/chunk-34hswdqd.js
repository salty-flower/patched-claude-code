// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{ZN,qht,tbe}from"./chunk-a7cah040.js";import{Sr}from"./chunk-h1eby6n2.js";import{Mr}from"./chunk-s7wnzvm5.js";import{Vh,Sqn,ZNr,JS,p5}from"./chunk-bbe2krkp.js";import{mS}from"./chunk-gf1t3q9p.js";function tAe(o){if(Mr("hooks"))return[];let e=ZN()?.[o]??[];if(JS())return e.filter((n)=>!("pluginRoot"in n)&&!("deviceOwner"in n));let i=g(),{managedOnly:t,managedPluginIds:r}=i,l=ZNr(),s=qht();return[...p5()?.[o]??[],...t?[]:tbe()?.[o]??[],...e.filter((n)=>a(n)&&s?.holds(n.pluginId)===!0?!(Sqn()&&!r?.has(n.pluginId)):(!("pluginRoot"in n)||u(n.pluginId,i))&&!(l&&("deviceOwner"in n)))]}function a(o){return"pluginRoot"in o&&o.hooks.every((e)=>e.type==="command")}function g(){let o=Vh();return{managedOnly:o,managedPluginIds:o&&!Sr()?mS():null}}function u(o,{managedOnly:e,managedPluginIds:i}){return!e||i?.has(o)===!0}function Zkr(){return!Mr("hooks")&&!JS()&&!Sr()}
export{tAe,Zkr};
