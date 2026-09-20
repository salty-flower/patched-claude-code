// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{lt,de}from"./chunk-cnzbk8gg.js";import{b,c}from"./chunk-p9tbyvzw.js";import{G}from"./chunk-txfrkyzp.js";import{_,p,g}from"./chunk-61g2sn1g.js";import{m}from"./chunk-kh3dq6rw.js";import{wl}from"./chunk-30p0nwys.js";import{kkt}from"./chunk-vn7prcb8.js";var n=[{kind:"ios_app",found:(t)=>t.has_ios_app_project},{kind:"android_app",found:(t)=>t.has_android_app_project}];class i{#t=0;#r=0;#e=new Map;get started(){return this.#t>0}start(){this.#t++,this.#o(!1)}conversationReset(){if(this.started)this.#t++,this.#o(!1)}turnStarting(){let t=this.#t;if(!this.started||this.#r===t)return;if(this.#r=t,n.some(({kind:e})=>this.#e.get(e)!==t))this.#o(!0)}#o(t){let e=this.#t;kkt({fresh:t}).then((o)=>{if(e!==this.#t||o===null)return;if(o.has_ios_app_project===null&&this.#e.get("ios_app")!==e)g("dev_intent_detect","project_unreadable",{kind:b("ios_app"),trigger:b("project_scan")});for(let{kind:r,found:s}of n)if(s(o)===!0&&this.#e.get(r)!==e)this.#e.set(r,e),this.#n(r)})}#n(t){try{wl({type:"system",subtype:"dev_intent",kind:t,trigger:"project_scan"}),_("dev_intent_detect",{kind:c(t),trigger:b("project_scan")})}catch(e){m(lt(de(e),"project dev intent send failed")),p("dev_intent_detect","project_send_threw",{kind:c(t),trigger:b("project_scan")})}}}var DBe=new G(()=>new i);
export{DBe};
