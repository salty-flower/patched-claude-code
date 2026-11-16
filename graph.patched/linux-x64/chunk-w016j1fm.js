// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ye}from"./chunk-a5a37ds7.js";import{PGn}from"./chunk-v6hpzj91.js";import{Up}from"./chunk-qvkahcn6.js";import{B9e}from"./chunk-374g520d.js";var Q$=(o)=>o.name===B9e&&Up(o);var PC=(o)=>{let t=o.startsWith("classic.")||o==="tool.describe"||o==="tool.call"||o==="tool.check";return ye().loadedModules.filter((e)=>!(t&&Q$(e))&&!(o==="tool.check"&&e.name===PGn&&Up(e)))};export{Q$,PC};
