// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Gp,EL}from"./chunk-qx925reg.js";import{zd,uue,joe,F8,Tz}from"./chunk-38nf1dnm.js";function s(o,t){let c=Gp(),e=zd(o),n=F8(e,t),a=Tz(e,t),r=!(EL()&&!uue(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:joe(e,t)}}function zVo(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&dWr(t,n))return;t=n,o(n)},reset(){t=void 0}}}function dWr(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{zVo,dWr};
