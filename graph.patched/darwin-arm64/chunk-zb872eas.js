// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{he,YP,VNe}from"./chunk-s8xs8s76.js";import{Hn}from"./chunk-w13amena.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function kU(t,r){return e.run({cwd:Hn(t)},r)}function Tae(t,r){return kU(t??ne(),r)}function wNe(){return e.getStore()!==void 0}function rMt(t){let r=e.getStore();if(r)r.cwd=Hn(t);else VNe(t)}function eDr(){return e.getStore()?.cwd??YP()}function ne(){try{return eDr()}catch{return he()}}
export{kU,Tae,wNe,rMt,eDr,ne};
