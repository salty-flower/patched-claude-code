// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-tdxkq523.js";import{aB}from"./chunk-drp9p5tr.js";import{Re}from"./chunk-na9nw575.js";import{x9e}from"./chunk-wapchjag.js";import{vRe}from"./chunk-a8gvfcn5.js";import{Zo}from"./chunk-jnkjbh3m.js";function Qdr(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:x9e(a.messages,r)}))}function R3t(e,r,s,a){let n=s.get(e);if(!n||Zo(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:x9e(m.messages,Re({content:r,origin:a}))}))}function _Qr(e,r,s){let a=vRe(aB(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{Qdr,R3t,_Qr};
