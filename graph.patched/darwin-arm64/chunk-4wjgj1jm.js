// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Op}from"./chunk-e5371f2n.js";import{xe}from"./chunk-jr30bz1x.js";import{nJe,stn,sgo}from"./chunk-gee3t44w.js";import{aLe}from"./chunk-ysp03tvj.js";import{hm}from"./chunk-ga8a8mhv.js";function aio(o,e,t,n){return sgo(o.matcherFor(e),t,n,hm(o)?nJe:stn)}function Bi(o,e,t){let n=e&&aLe(o);return(t??xe().loadedModules).some((r)=>r.hooks(o)&&Op(r)&&(e===void 0||aio(r,o,e,n)))}
export{aio,Bi};
