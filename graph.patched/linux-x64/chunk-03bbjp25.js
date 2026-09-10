// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{he,wA,Nbe}from"./chunk-6n7yk222.js";import{Gn}from"./chunk-d8qjp6nk.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function $L(t,r){return e.run({cwd:Gn(t)},r)}function xY(t,r){return $L(t??Q(),r)}function cHe(){return e.getStore()!==void 0}function xFn(t){let r=e.getStore();if(r)r.cwd=Gn(t);else Nbe(t)}function IFn(){return e.getStore()?.cwd??wA()}function Q(){try{return IFn()}catch{return he()}}
export{$L,xY,cHe,xFn,IFn,Q};
