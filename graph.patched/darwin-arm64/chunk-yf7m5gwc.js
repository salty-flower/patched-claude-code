// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ye}from"./chunk-e44qnbvj.js";import{Z6n}from"./chunk-5ha8r349.js";import{Up}from"./chunk-qvkahcn6.js";import{q8e}from"./chunk-gywtf5sd.js";var e$=(o)=>o.name===q8e&&Up(o);var IA=(o)=>{let t=o.startsWith("classic.")||o==="tool.describe"||o==="tool.call"||o==="tool.check";return ye().loadedModules.filter((e)=>!(t&&e$(e))&&!(o==="tool.check"&&e.name===Z6n&&Up(e)))};export{e$,IA};
