// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{EMe}from"./chunk-1xqd80pz.js";import{f}from"./chunk-wp37h1qm.js";import{o,E,M,u,z,R}from"./chunk-6kgnb6mn.js";var d=2147483647;var bEr=2,c=64,y=/^(?:[0-9a-f]{40}|[0-9a-f]{64})$/,s=f(()=>E().int().min(0).max(d)),p=f(()=>u({side:z(["device","cloud"]),generation:s(),tree:o().regex(y).nullable(),appliedGeneration:s(),mayHaveUnuploadedChanges:M(),shipping:s().nullable(),appliesOtherSide:M(),instanceId:o().regex(EMe),sequence:E().int().min(0).max(d)})),m=["shipped","shipping","unchanged","deferred","kept_here","failed","not_running"],S=(n)=>o().max(n).regex(/^[a-z0-9_]+$/),l=f(()=>S(c)),g=f(()=>u({v:R(bEr),frame:p(),outcome:u({kind:z(m),reason:l().optional()}),ask_id:o().regex(EMe).optional()}));function Vwo(n){let r=g().safeParse(n);if(!r.success)return null;let{v:i,frame:e,outcome:t,ask_id:a}=r.data;if(e.side!=="device")return null;return{v:i,frame:e,outcome:{kind:t.kind,...t.reason!==void 0&&{reason:t.reason}},...a!==void 0&&{askId:a}}}function Kwo(n){let r=l().safeParse(n.outcome.reason);return{v:n.v,frame:n.frame,outcome:{kind:n.outcome.kind,...r.success&&{reason:r.data}},...n.askId!==void 0&&{ask_id:n.askId}}}var v={frame:null,heardAt:null,stale:!0};function rOt(){let n=new Map,r=(e)=>`${e.source}:${e.name}`,i=(e)=>{let t=n.get(r(e));return t!==void 0&&t.servingEpoch===e.description?.epoch?t.value:void 0};return{of:i,file(e,t){let a=e.description?.epoch;if(a!==void 0)n.set(r(e),{servingEpoch:a,value:t(i(e))})}}}function Ywo(){let n=rOt(),r=0;return{peer(i){let e=n.of(i);return e===void 0?v:{frame:e.frame,heardAt:e.heardAt,stale:e.era<r}},heard(i,e,t){n.file(i,(a)=>a===void 0||a.frame.instanceId!==e.instanceId||e.sequence>a.frame.sequence?{frame:e,heardAt:t,era:r}:a)},invalidateAll(){r+=1}}}
export{bEr,Vwo,Kwo,rOt,Ywo};
