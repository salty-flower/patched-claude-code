// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ea,as}from"./chunk-gf0t3nd9.js";import{Nx,Zbe,m9e,B$,PW,WC}from"./chunk-9wqh5j7s.js";import{Ms}from"./chunk-j3629m0a.js";import{realpathSync as u}from"fs";var Y_e=(()=>{try{return u(process.cwd())}catch{return process.cwd()}})();function Z2n(r,e){let n=Nx(r),t=Nx(e);if(B$(n)||B$(t))return!0;if(n.skipped!==t.skipped)return!0;return Zbe(n,t)}function jFe(r,e){if(as(r)||Ea(r))return[];let n=Ms(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=WC(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>PW(o,e)!=="same")}function JYe(r,e){if(as(r)||Ea(r))return[];let n=Ms(r),t=n!==null&&n!==void 0?[n]:WC(r);return e===void 0?t:t.filter((s)=>PW(s,e)!=="same")}function pRe(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=PW(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!Z2n(s,r)}))return!1;if(n?.requireCovered===!0){let s=Nx(r);if(B$(s))return!1;let o=(a)=>a.some((c)=>{let i=Nx(c);if(B$(i))return!1;return m9e(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{Y_e,Z2n,jFe,JYe,pRe};
