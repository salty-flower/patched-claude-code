// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-m8nhymg4.js";import{t}from"./chunk-bdfv2ky4.js";import{qe}from"./chunk-hqh4zzjp.js";var r=new qe(()=>({store:void 0})),s={maxBytes:0,save:async()=>null};function qWn(e){return r.peek(e)?.store??(e.host.launchOptions.diskless()?s:void 0)}function lv(){return qWn(F())}async function Bnt(e,o,n){try{return await e.save(o,n)}catch{return t("A result could not be saved where the model reads files",{level:"error"}),null}}
export{qWn,lv,Bnt};
