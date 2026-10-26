// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{L,U,ci,ou}from"./chunk-ersar6wn.js";import{W}from"./chunk-3y73jbfr.js";import{ie}from"./chunk-d7b0m8qy.js";class i{directories=[];announced=new Set;get(){return this.directories}publish(o){let t=L([...o.additionalWorkingDirectories.values()].map((e)=>e.path)).sort(),n=this.directories;if(n.length===t.length&&n.every((e,s)=>e===t[s]))return!1;return this.directories=t,!0}noteAnnounced(o){for(let t of o)this.announced.add(t)}everAnnounced(){return[...this.announced]}reset(){this.directories=[],this.announced.clear()}}var d=new W(()=>new i);function r(){return d.of(U().host)}function Fte(){let o=r(),t=ci(),n=ou();return o.noteAnnounced([...t===null?[]:[t],...n===null?[]:[n],...c(),...o.get()]),o.get()}function HRs(){return r().everAnnounced()}function w1n(o){return r().publish(o)}function c(){try{return[ie().cwd()]}catch{return[]}}
export{Fte,HRs,w1n};
