// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Qf}from"./chunk-mm7bhy7z.js";import{ye}from"./chunk-e44qnbvj.js";import{$it,h2e,T8n}from"./chunk-hp13vskm.js";import{Zke}from"./chunk-53fy94km.js";import{Up}from"./chunk-qvkahcn6.js";function tPo(o,e,t,n){return T8n(o.matcherFor(e),t,n,Up(o)?$it:h2e)}function Li(o,e,t){let n=e&&Zke(o);return(t??ye().loadedModules).some((r)=>r.hooks(o)&&Qf(r)&&(e===void 0||tPo(r,o,e,n)))}
export{tPo,Li};
