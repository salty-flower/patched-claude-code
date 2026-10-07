// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{yt,F}from"./chunk-aywwjcwq.js";import{t}from"./chunk-gvn18sr5.js";var r=new yt(()=>({store:void 0})),n={maxBytes:0,save:async()=>null};function n6r(e){return r.peek(e)?.store??(e.host.launchOptions.diskless()?n:void 0)}function wb(){return n6r(F())}async function MWe(e,o){try{return await e.save(o)}catch{return t("A result could not be saved where the model reads files",{level:"error"}),null}}
export{n6r,wb,MWe};
