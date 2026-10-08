// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{gu,im,vV,qse,Pyt,ZY,Vse}from"./chunk-g263vvvn.js";function s(o,t){let c=im(),e=gu(o),n=ZY(e,t),a=Vse(e,t),r=!(vV()&&!qse(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:Pyt(e,t)}}function WTo(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&nAr(t,n))return;t=n,o(n)},reset(){t=void 0}}}function nAr(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{WTo,nAr};
