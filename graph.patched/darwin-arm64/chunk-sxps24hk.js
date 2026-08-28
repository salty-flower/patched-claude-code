// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Fn}from"./chunk-g4zaymy2.js";class n{implementation=null;register(e){this.implementation=e}isPlanArtifactEnabled(){return this.implementation===null?!1:this.implementation.isPlanArtifactEnabled()}publishPlanArtifact(e,t,i){if(this.implementation===null)return Promise.resolve({url:null,slug:null,version:null,err:"plan-artifact slot not registered"});return this.implementation.publishPlanArtifact(e,t,i)}workshopVerifiedSlugsWith(e,t){return this.implementation===null?null:this.implementation.workshopVerifiedSlugsWith(e,t)}}var xNe=new n;function Akn(e){xNe.register(e)}class LTt extends Error{constructor(){super("set_permission_mode push not acknowledged in time");this.name="ModePushTimeoutError"}}class o{pending=[];register(e,t){let{promise:i,resolve:r,reject:a}=Promise.withResolvers(),s={mode:e,resolve:r,reject:a,timer:void 0};return s.timer=setTimeout(u,t,this,s),this.pending.push(s),i}settle(e,t){let i=this.pending.filter((r)=>r.mode===e);this.pending=this.pending.filter((r)=>r.mode!==e);for(let r of i)if(clearTimeout(r.timer),t)r.reject(t);else r.resolve()}}var l=new Fn(()=>new o);function MTt(e,t,i){l.of(e).settle(t,i)}function kkn(e,t,i){return l.of(e).register(t,i)}function u(e,t){e.pending=e.pending.filter((i)=>i!==t),t.reject(new LTt)}
export{xNe,Akn,LTt,MTt,kkn};
