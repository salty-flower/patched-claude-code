// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{ki,$o}from"./chunk-w13amena.js";import{EM,wPe,Kbt,lD,y$,jC}from"./chunk-h3bc7dkc.js";import{Fr}from"./chunk-5cz12mxk.js";import{realpathSync as u}from"fs";var Pce=(()=>{try{return u(process.cwd())}catch{return process.cwd()}})();function Awn(r,e){let n=EM(r),t=EM(e);if(lD(n)||lD(t))return!0;if(n.skipped!==t.skipped)return!0;return wPe(n,t)}function hxe(r,e){if($o(r)||ki(r))return[];let n=Fr(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=jC(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>y$(o,e)!=="same")}function rBe(r,e){if($o(r)||ki(r))return[];let n=Fr(r),t=n!==null&&n!==void 0?[n]:jC(r);return e===void 0?t:t.filter((s)=>y$(s,e)!=="same")}function a_e(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=y$(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!Awn(s,r)}))return!1;if(n?.requireCovered===!0){let s=EM(r);if(lD(s))return!1;let o=(a)=>a.some((c)=>{let i=EM(c);if(lD(i))return!1;return Kbt(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{Pce,Awn,hxe,rBe,a_e};
