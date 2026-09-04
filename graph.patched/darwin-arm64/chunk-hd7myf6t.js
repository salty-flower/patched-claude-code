// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{z,q}from"./chunk-yhfssb7x.js";import{te}from"./chunk-dq6z3q3h.js";class e{directories=[];get(){return this.directories}publish(o){let i=te([...o.additionalWorkingDirectories.values()].map((t)=>t.path)).sort(),r=this.directories;if(r.length===i.length&&r.every((t,s)=>t===i[s]))return!1;return this.directories=i,!0}reset(){this.directories=[]}}var a=new z(()=>new e);function n(){return a.of(q().host)}function Dce(){return n().get()}function XLt(o){return n().publish(o)}
export{Dce,XLt};
