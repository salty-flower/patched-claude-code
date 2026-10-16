// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Le}from"./chunk-cr3hvp1y.js";import{xv}from"./chunk-zr9522zy.js";import{FMe}from"./chunk-9155m2kg.js";var Ttn=(o)=>o.name===FMe&&xv(o);var _U=(o)=>{let e=o.startsWith("classic.")||o==="tool.describe"||o==="tool.call"||o==="tool.check";return Le().loadedModules.filter((t)=>!(e&&Ttn(t)))};export{Ttn,_U};
