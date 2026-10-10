// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{kUe}from"./chunk-3cynezh1.js";class o{converted=new WeakMap;lookup(e){return this.converted.get(e)}remember(e,t){this.converted.set(e,t)}reset(){this.converted=new WeakMap}}var n=new o;function T0(e){let t=n.lookup(e);if(t)return t;let r=kUe(e,{unrepresentable:"throw"});return n.remember(e,r),r}var HVe="attached:",MVe="created:";function DVe(e){return e.startsWith("created:")}var R2="opened:";function uce(e){return e.startsWith("attached:")||e.startsWith("created:")||e.startsWith(R2)}function R0(e){return Object.entries(e).filter(([t])=>!t.startsWith(R2))}function VIn(e){return{url:e.url,title:e.title,favicon:e.favicon,kind:"frame",updated_at:new Date(e.updatedAt).toISOString()}}
export{T0,HVe,MVe,DVe,R2,uce,R0,VIn};
