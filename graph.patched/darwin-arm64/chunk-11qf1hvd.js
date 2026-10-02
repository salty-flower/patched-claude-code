// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{t}from"./chunk-3wz0srxw.js";import{zD}from"./chunk-fh513ghb.js";import{ke}from"./chunk-59zy4j10.js";import{GMe}from"./chunk-8b1dkx47.js";import{Qpe}from"./chunk-p4v87yfr.js";import{ni}from"./chunk-xs5gxdh4.js";function jkn(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:GMe(a.messages,r)}))}function sEt(e,r,s,a){let n=s.get(e);if(!n||ni(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:GMe(m.messages,ke({content:r,origin:a}))}))}function Car(e,r,s){let a=Qpe(zD(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{jkn,sEt,Car};
