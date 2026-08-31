// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{be,RH,eie}from"./chunk-30zk17wm.js";import{tr}from"./chunk-er188mb2.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function A8(t,r){return e.run({cwd:tr(t)},r)}function v8(t,r){return A8(t??ee(),r)}function qve(){return e.getStore()!==void 0}function zTn(t){let r=e.getStore();if(r)r.cwd=tr(t);else eie(t)}function GTn(){return e.getStore()?.cwd??RH()}function ee(){try{return GTn()}catch{return be()}}
export{A8,v8,qve,zTn,GTn,ee};
