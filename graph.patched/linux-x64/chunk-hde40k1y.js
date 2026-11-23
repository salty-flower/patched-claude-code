// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-r3adsed5.js";import{t}from"./chunk-ray9kegj.js";import{qe}from"./chunk-2xv5yvxr.js";var r=new qe(()=>({store:void 0})),s={maxBytes:0,save:async()=>null};function T2n(e){return r.peek(e)?.store??(e.host.launchOptions.diskless()?s:void 0)}function ak(){return T2n(F())}async function Ont(e,o,n){try{return await e.save(o,n)}catch{return t("A result could not be saved where the model reads files",{level:"error"}),null}}
export{T2n,ak,Ont};
