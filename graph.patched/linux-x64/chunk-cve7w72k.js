// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{ye,EH,ehe}from"./chunk-bj7g1p32.js";import{jn}from"./chunk-mnk1rjxv.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function CG(t,r){return e.run({cwd:jn(t)},r)}function i3(t,r){return CG(t??Q(),r)}function WTe(){return e.getStore()!==void 0}function hRn(t){let r=e.getStore();if(r)r.cwd=jn(t);else ehe(t)}function yRn(){return e.getStore()?.cwd??EH()}function Q(){try{return yRn()}catch{return ye()}}
export{CG,i3,WTe,hRn,yRn,Q};
