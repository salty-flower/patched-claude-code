// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{O0e}from"./chunk-ax2crbgp.js";import{f}from"./chunk-2pfss7d0.js";import{o,v,H,u,G,R}from"./chunk-seb9y51t.js";var d=2147483647;var lCr=2,c=64,y=/^(?:[0-9a-f]{40}|[0-9a-f]{64})$/,s=f(()=>v().int().min(0).max(d)),p=f(()=>u({side:G(["device","cloud"]),generation:s(),tree:o().regex(y).nullable(),appliedGeneration:s(),mayHaveUnuploadedChanges:H(),shipping:s().nullable(),appliesOtherSide:H(),instanceId:o().regex(O0e),sequence:v().int().min(0).max(d)})),m=["shipped","shipping","unchanged","deferred","kept_here","failed","not_running"],S=(n)=>o().max(n).regex(/^[a-z0-9_]+$/),l=f(()=>S(c)),g=f(()=>u({v:R(lCr),frame:p(),outcome:u({kind:G(m),reason:l().optional()}),ask_id:o().regex(O0e).optional()}));function WEo(n){let r=g().safeParse(n);if(!r.success)return null;let{v:i,frame:e,outcome:t,ask_id:a}=r.data;if(e.side!=="device")return null;return{v:i,frame:e,outcome:{kind:t.kind,...t.reason!==void 0&&{reason:t.reason}},...a!==void 0&&{askId:a}}}function GEo(n){let r=l().safeParse(n.outcome.reason);return{v:n.v,frame:n.frame,outcome:{kind:n.outcome.kind,...r.success&&{reason:r.data}},...n.askId!==void 0&&{ask_id:n.askId}}}var h={frame:null,heardAt:null,stale:!0};function SOt(){let n=new Map,r=(e)=>`${e.source}:${e.name}`,i=(e)=>{let t=n.get(r(e));return t!==void 0&&t.servingEpoch===e.description?.epoch?t.value:void 0};return{of:i,file(e,t){let a=e.description?.epoch;if(a!==void 0)n.set(r(e),{servingEpoch:a,value:t(i(e))})}}}function zEo(){let n=SOt(),r=0;return{peer(i){let e=n.of(i);return e===void 0?h:{frame:e.frame,heardAt:e.heardAt,stale:e.era<r}},heard(i,e,t){n.file(i,(a)=>a===void 0||a.frame.instanceId!==e.instanceId||e.sequence>a.frame.sequence?{frame:e,heardAt:t,era:r}:a)},invalidateAll(){r+=1}}}
export{lCr,WEo,GEo,SOt,zEo};
