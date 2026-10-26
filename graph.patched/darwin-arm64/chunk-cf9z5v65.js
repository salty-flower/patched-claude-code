// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{nt,U}from"./chunk-ersar6wn.js";import{t}from"./chunk-d7b0m8qy.js";var r=new nt(()=>({store:void 0})),n={maxBytes:0,save:async()=>null};function fLo(e){return r.peek(e)?.store??(e.host.launchOptions.diskless()?n:void 0)}function uS(){return fLo(U())}async function sGe(e,o){try{return await e.save(o)}catch{return t("A result could not be saved where the model reads files",{level:"error"}),null}}
export{fLo,uS,sGe};
