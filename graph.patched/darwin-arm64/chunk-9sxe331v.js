// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{t}from"./chunk-d7b0m8qy.js";import{zj}from"./chunk-esvzd004.js";import{Oe}from"./chunk-31gxg38t.js";import{Yu,J7e}from"./chunk-m7a8prrc.js";import{SIe}from"./chunk-30bjr4gf.js";import{us}from"./chunk-e4p6qc31.js";function kSr(e,a,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(n)=>({...n,messages:J7e(n.messages,a)}))}function JIt(e,a,s,n){let o=s.get(e);if(!o||us(o.status)){t(`Dropping message for teammate task ${e}: task status is "${o?.status}"`);return}s.update(e,(r)=>({...r,pendingUserMessages:[...r.pendingUserMessages,{text:a,origin:n}]})),s.updateTranscript(e,(r)=>({...r,messages:J7e(r.messages,Oe({content:a,origin:n}))}))}function Edo(e,a){let s=a.get(e);if(!Yu(s)||!s.awaitingPlanApproval)return;a.update(e,(n)=>({...n,awaitingPlanApproval:!1,pendingPlanApproval:void 0})),JIt(e,"The person moved you out of plan mode. Continue your work.",a,{kind:"task-notification"})}function vdo(e,a,s){let n=SIe(zj(a,s),e);if(n?.status==="running")n.retryWake?.emit()}
export{kSr,JIt,Edo,vdo};
