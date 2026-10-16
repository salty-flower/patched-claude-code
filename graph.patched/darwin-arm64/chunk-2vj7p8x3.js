// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ne}from"./chunk-tbc65dc4.js";import{PE}from"./chunk-wsf8fmk0.js";import{V0e}from"./chunk-d9vq4daa.js";var Wtn=(o)=>o.name===V0e&&PE(o);var CU=(o)=>{let e=o.startsWith("classic.")||o==="tool.describe"||o==="tool.call"||o==="tool.check";return Ne().loadedModules.filter((t)=>!(e&&Wtn(t)))};export{Wtn,CU};
