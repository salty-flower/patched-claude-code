// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{X}from"./chunk-3rgses43.js";function wd(){if(typeof setImmediate==="function")return new Promise((e)=>setImmediate(e));if(typeof MessageChannel==="function")return new Promise((e)=>{let n=new MessageChannel;n.port1.onmessage=()=>{n.port1.close(),e()},n.port2.postMessage(null)});return X(0)}
export{wd};
