// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Se,xw,rie}from"./chunk-38213y7h.js";import{tr}from"./chunk-snzr790g.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function k5(t,r){return e.run({cwd:tr(t)},r)}function H5(t,r){return k5(t??ee(),r)}function YCe(){return e.getStore()!==void 0}function JRn(t){let r=e.getStore();if(r)r.cwd=tr(t);else rie(t)}function QRn(){return e.getStore()?.cwd??xw()}function ee(){try{return QRn()}catch{return Se()}}
export{k5,H5,YCe,JRn,QRn,ee};
