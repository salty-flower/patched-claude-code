// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Ip}from"./chunk-yhsnhder.js";import{Hp}from"./chunk-ck5cqg3e.js";function l1n(e){return{request:Ip(`?${e}$p`),match:(r)=>r.type==="decrpm"&&r.mode===e}}function c1n(){return{request:Ip("?6n"),match:(e)=>e.type==="cursorPosition"}}function u1n(e){return{request:Hp(e,"?"),match:(r)=>r.type==="osc"&&r.code===e}}function d1n(){return{request:Ip(">0q"),match:(e)=>e.type==="xtversion"}}var n=Ip("c");class lZt{stdout;queue=[];themeChangeSubscribers=new Set;constructor(e){this.stdout=e}subscribeThemeChange(e){return this.themeChangeSubscribers.add(e),()=>{this.themeChangeSubscribers.delete(e)}}send(e){return new Promise((r)=>{this.queue.push({kind:"query",match:e.match,resolve:(s)=>r(s)}),this.stdout.write(e.request)})}flush(){return new Promise((e)=>{this.queue.push({kind:"sentinel",resolve:e}),this.stdout.write(n)})}cancel(e){let r=this.queue.findIndex((t)=>t.kind==="query"&&t.match===e.match);if(r===-1)return;let[s]=this.queue.splice(r,1);if(s?.kind==="query")s.resolve(void 0)}onResponse(e){if(e.type==="themeNotify"){for(let s of this.themeChangeSubscribers)s();return}let r=this.queue.findIndex((s)=>s.kind==="query"&&s.match(e));if(r!==-1){let[s]=this.queue.splice(r,1);if(s?.kind==="query")s.resolve(e);return}if(e.type==="da1"){let s=this.queue.findIndex((t)=>t.kind==="sentinel");if(s===-1)return;for(let t of this.queue.splice(0,s+1))if(t.kind==="query")t.resolve(void 0);else t.resolve()}}}
export{l1n,c1n,u1n,d1n,lZt};
