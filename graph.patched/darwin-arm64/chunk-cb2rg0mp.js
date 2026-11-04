// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{F,di,ip}from"./chunk-ecyypctx.js";import{W}from"./chunk-8915xd28.js";import{de}from"./chunk-5nh49npx.js";import{L}from"./chunk-v07jm9dp.js";class i{directories=[];announced=new Set;get(){return this.directories}publish(o){let t=L([...o.additionalWorkingDirectories.values()].map((e)=>e.path)).sort(),n=this.directories;if(n.length===t.length&&n.every((e,s)=>e===t[s]))return!1;return this.directories=t,!0}noteAnnounced(o){for(let t of o)this.announced.add(t)}everAnnounced(){return[...this.announced]}reset(){this.directories=[],this.announced.clear()}}var d=new W(()=>new i);function r(){return d.of(F().host)}function Yae(){let o=r(),t=di(),n=ip();return o.noteAnnounced([...t===null?[]:[t],...n===null?[]:[n],...c(),...o.get()]),o.get()}function Aoi(){return r().everAnnounced()}function utr(o){return r().publish(o)}function c(){try{return[de().cwd()]}catch{return[]}}
export{Yae,Aoi,utr};
