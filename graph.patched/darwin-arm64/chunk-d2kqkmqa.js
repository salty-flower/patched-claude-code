// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{xe}from"./chunk-jr30bz1x.js";import{kOn}from"./chunk-7z36eekq.js";import{hm}from"./chunk-ga8a8mhv.js";import{Hze}from"./chunk-h21zbzen.js";var Vde=(o)=>o.name===Hze&&hm(o);var UC=(o)=>{let t=o.startsWith("classic.")||o==="tool.describe"||o==="tool.call"||o==="tool.check";return xe().loadedModules.filter((e)=>!(t&&Vde(e))&&!(o==="tool.check"&&e.name===kOn&&hm(e)))};export{Vde,UC};
