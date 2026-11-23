// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Tn}from"./chunk-wgs1m56y.js";function S8({onClose:t,onBack:n,onKill:o,onEnter:i}){return Tn({"confirm:yes":i??t},{context:"Confirmation"}),function(e){if(e.key===" ")e.preventDefault(),t();else if(e.key==="left"&&n)e.preventDefault(),n();else if(e.key==="x"&&!e.ctrl&&!e.meta&&o)e.preventDefault(),o()}}
export{S8};
