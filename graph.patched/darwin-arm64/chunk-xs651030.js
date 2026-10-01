// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{ve,Of,zR,VBe}from"./chunk-a7cah040.js";import{kn}from"./chunk-2j7zyd8v.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function _C(t,r){return e.run({cwd:kn(t)},r)}function HSe(t,r){return _C(t??oe(),r)}function Eue(){return e.getStore()!==void 0}function wjt(t){let r=e.getStore();if(r)r.cwd=kn(t);else VBe(t)}function Ejt(){return e.getStore()?.cwd??zR()}function nm(){if(e.getStore()?.cwd===void 0&&Of()===null)return null;return oe()}function oe(){try{return Ejt()}catch{return ve()}}
export{_C,HSe,Eue,wjt,Ejt,nm,oe};
