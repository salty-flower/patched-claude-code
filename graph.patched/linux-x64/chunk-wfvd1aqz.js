// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Qf}from"./chunk-p409tc2k.js";import{ye}from"./chunk-a5a37ds7.js";import{xit,fje,t9n}from"./chunk-n2k3k98h.js";import{zEe}from"./chunk-tjwpqnr0.js";import{Up}from"./chunk-qvkahcn6.js";function Rxo(o,e,t,n){return t9n(o.matcherFor(e),t,n,Up(o)?xit:fje)}function Di(o,e,t){let n=e&&zEe(o);return(t??ye().loadedModules).some((r)=>r.hooks(o)&&Qf(r)&&(e===void 0||Rxo(r,o,e,n)))}
export{Rxo,Di};
