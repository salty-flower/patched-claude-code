// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{he,uv,F_e}from"./chunk-cet8na02.js";import{zn}from"./chunk-3k7pa7mk.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function TM(t,r){return e.run({cwd:zn(t)},r)}function mY(t,r){return TM(t??Q(),r)}function KHe(){return e.getStore()!==void 0}function LMn(t){let r=e.getStore();if(r)r.cwd=zn(t);else F_e(t)}function MMn(){return e.getStore()?.cwd??uv()}function Q(){try{return MMn()}catch{return he()}}
export{TM,mY,KHe,LMn,MMn,Q};
