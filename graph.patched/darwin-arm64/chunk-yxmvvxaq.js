// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{ye,hE,Kse}from"./chunk-hdbxv3pp.js";import{Jn}from"./chunk-5e3knf27.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function yW(t,r){return e.run({cwd:Jn(t)},r)}function $5(t,r){return yW(t??ne(),r)}function Pke(){return e.getStore()!==void 0}function iIn(t){let r=e.getStore();if(r)r.cwd=Jn(t);else Kse(t)}function sIn(){return e.getStore()?.cwd??hE()}function ne(){try{return sIn()}catch{return ye()}}
export{yW,$5,Pke,iIn,sIn,ne};
