// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{G,U}from"./chunk-bj7g1p32.js";import{J}from"./chunk-fbm6dgf7.js";class e{directories=[];get(){return this.directories}publish(o){let i=J([...o.additionalWorkingDirectories.values()].map((t)=>t.path)).sort(),r=this.directories;if(r.length===i.length&&r.every((t,s)=>t===i[s]))return!1;return this.directories=i,!0}reset(){this.directories=[]}}var a=new G(()=>new e);function n(){return a.of(U().host)}function lle(){return n().get()}function eDt(o){return n().publish(o)}
export{lle,eDt};
