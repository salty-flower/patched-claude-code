// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{t}from"./chunk-wvb0gwjm.js";import{oO}from"./chunk-wjcvdctc.js";import{ke}from"./chunk-h3bc7dkc.js";import{Tle}from"./chunk-5j0zttkc.js";import{i0e}from"./chunk-ex6c1fj4.js";import{ti}from"./chunk-zbv3j381.js";function kfn(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:i0e(a.messages,r)}))}function Mpt(e,r,s,a){let n=s.get(e);if(!n||ti(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:i0e(m.messages,ke({content:r,origin:a}))}))}function l4n(e,r,s){let a=Tle(oO(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{kfn,Mpt,l4n};
