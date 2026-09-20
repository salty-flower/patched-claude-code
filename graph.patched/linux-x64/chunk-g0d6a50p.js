// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{_e,SC,$Te}from"./chunk-txfrkyzp.js";import{ar}from"./chunk-gj513b2z.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function OL(t,r){return e.run({cwd:ar(t)},r)}function uZ(t,r){return OL(t??te(),r)}function dFe(){return e.getStore()!==void 0}function gQn(t){let r=e.getStore();if(r)r.cwd=ar(t);else $Te(t)}function hQn(){return e.getStore()?.cwd??SC()}function te(){try{return hQn()}catch{return _e()}}
export{OL,uZ,dFe,gQn,hQn,te};
