// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{XTe}from"./chunk-q01dwdda.js";import{p}from"./chunk-dsp1md5e.js";import{o,A,O,d,G,R}from"./chunk-g4gq2k0z.js";var s=2147483647;var lsr=2,y=64,u=/^(?:[0-9a-f]{40}|[0-9a-f]{64})$/,l=p(()=>A().int().min(0).max(s)),m=p(()=>d({side:G(["device","cloud"]),generation:l(),tree:o().regex(u).nullable(),appliedGeneration:l(),mayHaveUnuploadedChanges:O(),shipping:l().nullable(),appliesOtherSide:O(),instanceId:o().regex(XTe),sequence:A().int().min(0).max(s)})),S=["shipped","shipping","unchanged","deferred","kept_here","failed","not_running"],f=(n)=>o().max(n).regex(/^[a-z0-9_]+$/),c=p(()=>f(y)),g=p(()=>d({v:R(lsr),frame:m(),outcome:d({kind:G(S),reason:c().optional()}),ask_id:o().regex(XTe).optional()}));function ueo(n){let r=g().safeParse(n);if(!r.success)return null;let{v:i,frame:e,outcome:t,ask_id:a}=r.data;if(e.side!=="device")return null;return{v:i,frame:e,outcome:{kind:t.kind,...t.reason!==void 0&&{reason:t.reason}},...a!==void 0&&{askId:a}}}function peo(n){let r=c().safeParse(n.outcome.reason);return{v:n.v,frame:n.frame,outcome:{kind:n.outcome.kind,...r.success&&{reason:r.data}},...n.askId!==void 0&&{ask_id:n.askId}}}var v={frame:null,heardAt:null,stale:!0};function CTn(){let n=new Map,r=(e)=>`${e.source}:${e.name}`,i=(e)=>{let t=n.get(r(e));return t!==void 0&&t.servingEpoch===e.description?.epoch?t.value:void 0};return{of:i,file(e,t){let a=e.description?.epoch;if(a!==void 0)n.set(r(e),{servingEpoch:a,value:t(i(e))})}}}function feo(){let n=CTn(),r=0;return{peer(i){let e=n.of(i);return e===void 0?v:{frame:e.frame,heardAt:e.heardAt,stale:e.era<r}},heard(i,e,t){n.file(i,(a)=>a===void 0||a.frame.instanceId!==e.instanceId||e.sequence>a.frame.sequence?{frame:e,heardAt:t,era:r}:a)},invalidateAll(){r+=1}}}
export{lsr,ueo,peo,CTn,feo};
