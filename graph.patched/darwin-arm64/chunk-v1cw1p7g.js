// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Da,ys}from"./chunk-9exgg8sx.js";import{lP,aEe,vJe,z$,QW,wR}from"./chunk-nwqfvmza.js";import{Vs}from"./chunk-yj45yszw.js";import{realpathSync as u}from"fs";var iwe=(()=>{try{return u(process.cwd())}catch{return process.cwd()}})();function g5n(r,e){let n=lP(r),t=lP(e);if(z$(n)||z$(t))return!0;if(n.skipped!==t.skipped)return!0;return aEe(n,t)}function SBe(r,e){if(ys(r)||Da(r))return[];let n=Vs(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=wR(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>QW(o,e)!=="same")}function rXe(r,e){if(ys(r)||Da(r))return[];let n=Vs(r),t=n!==null&&n!==void 0?[n]:wR(r);return e===void 0?t:t.filter((s)=>QW(s,e)!=="same")}function RPe(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=QW(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!g5n(s,r)}))return!1;if(n?.requireCovered===!0){let s=lP(r);if(z$(s))return!1;let o=(a)=>a.some((c)=>{let i=lP(c);if(z$(i))return!1;return vJe(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{iwe,g5n,SBe,rXe,RPe};
