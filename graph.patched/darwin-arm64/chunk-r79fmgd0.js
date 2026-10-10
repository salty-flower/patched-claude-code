// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{qa,ks}from"./chunk-ae84tp6z.js";import{_I,Ake,Net,n1,yz,Tx}from"./chunk-sfn1dbxq.js";import{Fs}from"./chunk-bf3z2ftn.js";import{realpathSync as u}from"fs";var Ave=(()=>{try{return u(process.cwd())}catch{return process.cwd()}})();function Q7n(r,e){let n=_I(r),t=_I(e);if(n1(n)||n1(t))return!0;if(n.skipped!==t.skipped)return!0;return Ake(n,t)}function fWe(r,e){if(ks(r)||qa(r))return[];let n=Fs(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=Tx(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>yz(o,e)!=="same")}function hQe(r,e){if(ks(r)||qa(r))return[];let n=Fs(r),t=n!==null&&n!==void 0?[n]:Tx(r);return e===void 0?t:t.filter((s)=>yz(s,e)!=="same")}function a0e(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=yz(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!Q7n(s,r)}))return!1;if(n?.requireCovered===!0){let s=_I(r);if(n1(s))return!1;let o=(a)=>a.some((c)=>{let i=_I(c);if(n1(i))return!1;return Net(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{Ave,Q7n,fWe,hQe,a0e};
