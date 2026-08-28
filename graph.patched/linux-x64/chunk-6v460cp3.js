// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{fn,ze,W,Rt,N}from"./chunk-q0z49y3j.js";import{V8n}from"./chunk-3ebcpkcn.js";N();var rX=fn(null);function r(){let t=ze(rX);if(!t)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return t}function j(t){let e=r(),o=()=>{let s=e.getState();return t(s)};return Rt(e.subscribe,o,o)}function yt(){return r().setState}function gZe(){let t=r();return W(()=>V8n(t.setState),[t])}function Xn(){return r()}var p=()=>()=>{};function Bke(){return ze(rX)?.setState}function mi(t){let e=ze(rX);return Rt(e?e.subscribe:p,()=>e?t(e.getState()):void 0)}
export{rX,j,yt,gZe,Xn,Bke,mi};
