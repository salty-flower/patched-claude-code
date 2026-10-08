// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{t}from"./chunk-p46wpkfz.js";import{h$}from"./chunk-5pdrsybf.js";import{Re}from"./chunk-g263vvvn.js";import{gze}from"./chunk-gef68xj8.js";import{vSe}from"./chunk-n3q7bwqt.js";import{Fs}from"./chunk-0gv2h7jq.js";function uVn(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:gze(a.messages,r)}))}function CLt(e,r,s,a){let n=s.get(e);if(!n||Fs(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:gze(m.messages,Re({content:r,origin:a}))}))}function YHr(e,r,s){let a=vSe(h$(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{uVn,CLt,YHr};
