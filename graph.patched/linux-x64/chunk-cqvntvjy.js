// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{al,Is}from"./chunk-pzq28dp7.js";import{BO,gRe,wit,I1,QV,LP}from"./chunk-38nf1dnm.js";import{Ys}from"./chunk-n1y0nb3t.js";import{realpathSync as u}from"fs";var yCe=(()=>{try{return u(process.cwd())}catch{return process.cwd()}})();function bar(r,e){let n=BO(r),t=BO(e);if(I1(n)||I1(t))return!0;if(n.skipped!==t.skipped)return!0;return gRe(n,t)}function MKe(r,e){if(Is(r)||al(r))return[];let n=Ys(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=LP(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>QV(o,e)!=="same")}function Xrt(r,e){if(Is(r)||al(r))return[];let n=Ys(r),t=n!==null&&n!==void 0?[n]:LP(r);return e===void 0?t:t.filter((s)=>QV(s,e)!=="same")}function mLe(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=QV(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!bar(s,r)}))return!1;if(n?.requireCovered===!0){let s=BO(r);if(I1(s))return!1;let o=(a)=>a.some((c)=>{let i=BO(c);if(I1(i))return!1;return wit(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{yCe,bar,MKe,Xrt,mLe};
