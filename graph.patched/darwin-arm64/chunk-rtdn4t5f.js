// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{S,c}from"./chunk-ny2cqbmq.js";import{Xe,U}from"./chunk-nre716m4.js";import{W}from"./chunk-cne7d53x.js";import{g,m,p}from"./chunk-53e7d9dh.js";import{l}from"./chunk-277zhca1.js";import{Oi}from"./chunk-bvn0epzr.js";import{nOn}from"./chunk-2nean5zd.js";var n=[{kind:"ios_app",found:(t)=>t.has_ios_app_project},{kind:"android_app",found:(t)=>t.has_android_app_project}];class i{#t=0;#o=0;#e=new Map;get started(){return this.#t>0}start(){this.#t++,this.#r(!1)}conversationReset(){if(this.started)this.#t++,this.#r(!1)}directoryChanged(){if(!this.started){this.start();return}this.#r(!1)}turnStarting(){let t=this.#t;if(!this.started||this.#o===t)return;if(this.#o=t,n.some(({kind:e})=>this.#e.get(e)!==t))this.#r(!0)}#r(t){let e=this.#t;nOn({fresh:t}).then((r)=>{if(e!==this.#t||r===null)return;if(r.has_ios_app_project===null&&this.#e.get("ios_app")!==e)p("dev_intent_detect","project_unreadable",{kind:S("ios_app"),trigger:S("project_scan")});for(let{kind:o,found:s}of n)if(s(r)===!0&&this.#e.get(o)!==e)this.#e.set(o,e),this.#n(o)})}#n(t){try{Oi({type:"system",subtype:"dev_intent",kind:t,trigger:"project_scan"}),g("dev_intent_detect",{kind:c(t),trigger:S("project_scan")})}catch(e){l(Xe(U(e),"project dev intent send failed")),m("dev_intent_detect","project_send_threw",{kind:c(t),trigger:S("project_scan")})}}}var Tit=new W(()=>new i);
export{Tit};
