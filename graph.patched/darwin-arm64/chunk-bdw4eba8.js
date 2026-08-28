// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ut,Te}from"./chunk-e5bq01yj.js";var o="Invalid SemVer: <redacted>";function n(r,t){try{return Bun.semver.order(r,t)}catch(e){throw ut(Te(e),o)}}function Pp(r,t){return n(r,t)===1}function $g(r,t){return n(r,t)>=0}function DN(r,t){return n(r,t)===-1}function XK(r,t){return n(r,t)<=0}function $pn(r,t){return Bun.semver.satisfies(r,t)}var i=/^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/;function $ee(r){return typeof r==="string"&&i.test(r)}
export{Pp,$g,DN,XK,$pn,$ee};
