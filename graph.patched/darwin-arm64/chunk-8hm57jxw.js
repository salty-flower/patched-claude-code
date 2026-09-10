// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{he,AC,WSe}from"./chunk-sgyvc67j.js";import{Vn}from"./chunk-8yfx63va.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function VM(t,r){return e.run({cwd:Vn(t)},r)}function FY(t,r){return VM(t??Q(),r)}function EPe(){return e.getStore()!==void 0}function p$n(t){let r=e.getStore();if(r)r.cwd=Vn(t);else WSe(t)}function f$n(){return e.getStore()?.cwd??AC()}function Q(){try{return f$n()}catch{return he()}}
export{VM,FY,EPe,p$n,f$n,Q};
