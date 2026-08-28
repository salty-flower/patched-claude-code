// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ut,Ee}from"./chunk-7h2h1m4y.js";var o="Invalid SemVer: <redacted>";function n(r,t){try{return Bun.semver.order(r,t)}catch(e){throw ut(Ee(e),o)}}function Rp(r,t){return n(r,t)===1}function Ng(r,t){return n(r,t)>=0}function L1(r,t){return n(r,t)===-1}function qK(r,t){return n(r,t)<=0}function Opn(r,t){return Bun.semver.satisfies(r,t)}var i=/^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/;function Mee(r){return typeof r==="string"&&i.test(r)}
export{Rp,Ng,L1,qK,Opn,Mee};
