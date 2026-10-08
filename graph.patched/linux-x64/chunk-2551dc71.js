// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ha,ys}from"./chunk-gwj7v27h.js";import{sP,eve,gQe,DF,Bz,yR}from"./chunk-g263vvvn.js";import{qs}from"./chunk-amnc8bbv.js";import{realpathSync as u}from"fs";var QSe=(()=>{try{return u(process.cwd())}catch{return process.cwd()}})();function V6n(r,e){let n=sP(r),t=sP(e);if(DF(n)||DF(t))return!0;if(n.skipped!==t.skipped)return!0;return eve(n,t)}function d1e(r,e){if(ys(r)||Ha(r))return[];let n=qs(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=yR(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>Bz(o,e)!=="same")}function q9e(r,e){if(ys(r)||Ha(r))return[];let n=qs(r),t=n!==null&&n!==void 0?[n]:yR(r);return e===void 0?t:t.filter((s)=>Bz(s,e)!=="same")}function yPe(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=Bz(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!V6n(s,r)}))return!1;if(n?.requireCovered===!0){let s=sP(r);if(DF(s))return!1;let o=(a)=>a.some((c)=>{let i=sP(c);if(DF(i))return!1;return gQe(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{QSe,V6n,d1e,q9e,yPe};
