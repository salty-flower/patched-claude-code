// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ve,qS,Bne}from"./chunk-g4zaymy2.js";import{jn}from"./chunk-g1zprvx2.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function vq(t,r){return e.run({cwd:jn(t)},r)}function wq(t,r){return vq(t??te(),r)}function Ywe(){return e.getStore()!==void 0}function Avn(t){let r=e.getStore();if(r)r.cwd=jn(t);else Bne(t)}function kvn(){return e.getStore()?.cwd??qS()}function te(){try{return kvn()}catch{return ve()}}
export{vq,wq,Ywe,Avn,kvn,te};
