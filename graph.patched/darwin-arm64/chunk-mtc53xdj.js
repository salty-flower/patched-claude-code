// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{F}from"./chunk-ecyypctx.js";import{t}from"./chunk-5nh49npx.js";import{Je}from"./chunk-k6s5je75.js";var r=new Je(()=>({store:void 0})),s={maxBytes:0,save:async()=>null};function oPn(e){return r.peek(e)?.store??(e.host.launchOptions.diskless()?s:void 0)}function xg(){return oPn(F())}async function D8e(e,o){try{return await e.save(o)}catch{return t("A result could not be saved where the model reads files",{level:"error"}),null}}
export{oPn,xg,D8e};
