// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Se,HE,Bae}from"./chunk-yhfssb7x.js";import{Jn}from"./chunk-h4q6j5r2.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function jW(t,r){return e.run({cwd:Jn(t)},r)}function y8(t,r){return jW(t??ne(),r)}function Kxe(){return e.getStore()!==void 0}function sDn(t){let r=e.getStore();if(r)r.cwd=Jn(t);else Bae(t)}function aDn(){return e.getStore()?.cwd??HE()}function ne(){try{return aDn()}catch{return Se()}}
export{jW,y8,Kxe,sDn,aDn,ne};
