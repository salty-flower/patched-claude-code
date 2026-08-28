// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{fn,We,q,Pt,N}from"./chunk-5752v0zq.js";import{Q8n}from"./chunk-xc5hdwza.js";N();var aX=fn(null);function r(){let t=We(aX);if(!t)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return t}function j(t){let e=r(),o=()=>{let s=e.getState();return t(s)};return Pt(e.subscribe,o,o)}function yt(){return r().setState}function gZe(){let t=r();return q(()=>Q8n(t.setState),[t])}function Xn(){return r()}var p=()=>()=>{};function BCe(){return We(aX)?.setState}function mi(t){let e=We(aX);return Pt(e?e.subscribe:p,()=>e?t(e.getState()):void 0)}
export{aX,j,yt,gZe,Xn,BCe,mi};
