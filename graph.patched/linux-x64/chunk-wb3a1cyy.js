// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ye}from"./chunk-a5a37ds7.js";import{hre}from"./chunk-w6hecz3q.js";import{Up}from"./chunk-qvkahcn6.js";function cre(o){return o.hookCaller===void 0&&o.pluginUnnamed===!0&&(ye().loadedModules.some((n)=>!Up(n))||hre())}var HMr="A plugin started or resumed this subagent, or the one that spawned it, and that plugin is not known in this session. It cannot schedule work: nothing would hold that work after a Stop.";
export{cre,HMr};
