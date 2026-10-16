// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{t}from"./chunk-cwsn6mdf.js";import{uB}from"./chunk-yfyzz0k6.js";import{Ce}from"./chunk-38nf1dnm.js";import{i6e}from"./chunk-xhd8rxkk.js";import{BAe}from"./chunk-9dpqqwvz.js";import{js}from"./chunk-f7hb96sp.js";function Jrr(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:i6e(a.messages,r)}))}function DVt(e,r,s,a){let n=s.get(e);if(!n||js(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:i6e(m.messages,Ce({content:r,origin:a}))}))}function V6r(e,r,s){let a=BAe(uB(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{Jrr,DVt,V6r};
