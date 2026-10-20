// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{D,j,pi,Ru}from"./chunk-dxktn51d.js";import{W}from"./chunk-2fbnw5gg.js";import{ie}from"./chunk-n5v91jc3.js";class i{directories=[];announced=new Set;get(){return this.directories}publish(o){let t=D([...o.additionalWorkingDirectories.values()].map((e)=>e.path)).sort(),n=this.directories;if(n.length===t.length&&n.every((e,s)=>e===t[s]))return!1;return this.directories=t,!0}noteAnnounced(o){for(let t of o)this.announced.add(t)}everAnnounced(){return[...this.announced]}reset(){this.directories=[],this.announced.clear()}}var d=new W(()=>new i);function r(){return d.of(j().host)}function cZ(){let o=r(),t=pi(),n=Ru();return o.noteAnnounced([...t===null?[]:[t],...n===null?[]:[n],...c(),...o.get()]),o.get()}function sms(){return r().everAnnounced()}function CHn(o){return r().publish(o)}function c(){try{return[ie().cwd()]}catch{return[]}}
export{cZ,sms,CHn};
