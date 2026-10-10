// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ef,a$}from"./chunk-14rnebpd.js";import{Xd,Xae,BHe,w5,E5}from"./chunk-sfn1dbxq.js";function s(o,t){let c=ef(),e=Xd(o),n=w5(e,t),a=E5(e,t),r=!(a$()&&!Xae(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:BHe(e,t)}}function dMo(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&c0r(t,n))return;t=n,o(n)},reset(){t=void 0}}}function c0r(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{dMo,c0r};
