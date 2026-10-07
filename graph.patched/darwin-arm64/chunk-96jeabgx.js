// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ca,as}from"./chunk-5qeme8w3.js";import{Ux,sbe,EYe,JF,B2,qT}from"./chunk-y0b3kvx1.js";import{Hs}from"./chunk-ts0309p1.js";import{realpathSync as u}from"fs";var nSe=(()=>{try{return u(process.cwd())}catch{return process.cwd()}})();function kzn(r,e){let n=Ux(r),t=Ux(e);if(JF(n)||JF(t))return!0;if(n.skipped!==t.skipped)return!0;return sbe(n,t)}function J$e(r,e){if(as(r)||Ca(r))return[];let n=Hs(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=qT(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>B2(o,e)!=="same")}function l9e(r,e){if(as(r)||Ca(r))return[];let n=Hs(r),t=n!==null&&n!==void 0?[n]:qT(r);return e===void 0?t:t.filter((s)=>B2(s,e)!=="same")}function ERe(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=B2(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!kzn(s,r)}))return!1;if(n?.requireCovered===!0){let s=Ux(r);if(JF(s))return!1;let o=(a)=>a.some((c)=>{let i=Ux(c);if(JF(i))return!1;return EYe(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{nSe,kzn,J$e,l9e,ERe};
