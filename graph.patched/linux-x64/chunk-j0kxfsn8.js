// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Se,Wv,Dne}from"./chunk-2vv5hpw3.js";import{jn}from"./chunk-xxprnjcc.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function gV(t,r){return e.run({cwd:jn(t)},r)}function yV(t,r){return gV(t??te(),r)}function Vwe(){return e.getStore()!==void 0}function bSn(t){let r=e.getStore();if(r)r.cwd=jn(t);else Dne(t)}function _Sn(){return e.getStore()?.cwd??Wv()}function te(){try{return _Sn()}catch{return Se()}}
export{gV,yV,Vwe,bSn,_Sn,te};
