// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f}from"./chunk-tkh9f09d.js";import{Bo}from"./chunk-c8ryve6d.js";import{B,ju}from"./chunk-97je7cvf.js";var mne=Bo({kind:"mcp_elicitation",payload:f(()=>ju((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>ju((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),eEe=Bo({kind:"mcp_elicitation_waiting",payload:f(()=>ju((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>B(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function gqo(t){return t===mne.kind||t===eEe.kind}
export{mne,eEe,gqo};
