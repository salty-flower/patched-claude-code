// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{mt,F}from"./chunk-g79wjybr.js";import{t}from"./chunk-p46wpkfz.js";var r=new mt(()=>({store:void 0})),n={maxBytes:0,save:async()=>null};function GQr(e){return r.peek(e)?.store??(e.host.launchOptions.diskless()?n:void 0)}function m_(){return GQr(F())}async function fHe(e,o){try{return await e.save(o)}catch{return t("A result could not be saved where the model reads files",{level:"error"}),null}}
export{GQr,m_,fHe};
