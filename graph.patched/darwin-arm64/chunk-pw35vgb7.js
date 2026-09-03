// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{t}from"./chunk-t2jwg94b.js";import{yx}from"./chunk-h6md7820.js";import{ede,tY,xe}from"./chunk-darxmw8c.js";import{Fs}from"./chunk-parrwzzh.js";function yNt(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:ede(a.messages,r)}))}function LGe(e,r,s,a){let n=s.get(e);if(!n||Fs(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:ede(m.messages,xe({content:r,origin:a}))}))}function Rin(e,r,s){let a=tY(yx(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{yNt,LGe,Rin};
