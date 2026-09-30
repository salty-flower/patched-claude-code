// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Vi,gs}from"./chunk-2j7zyd8v.js";import{NF,CDe,BRt,dL,EU,KA}from"./chunk-59zy4j10.js";import{ms}from"./chunk-a453ergf.js";import{realpathSync as u}from"fs";var hfe=(()=>{try{return u(process.cwd())}catch{return process.cwd()}})();function bPn(r,e){let n=NF(r),t=NF(e);if(dL(n)||dL(t))return!0;if(n.skipped!==t.skipped)return!0;return CDe(n,t)}function xHe(r,e){if(gs(r)||Vi(r))return[];let n=ms(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=KA(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>EU(o,e)!=="same")}function M6e(r,e){if(gs(r)||Vi(r))return[];let n=ms(r),t=n!==null&&n!==void 0?[n]:KA(r);return e===void 0?t:t.filter((s)=>EU(s,e)!=="same")}function rEe(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=EU(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!bPn(s,r)}))return!1;if(n?.requireCovered===!0){let s=NF(r);if(dL(s))return!1;let o=(a)=>a.some((c)=>{let i=NF(c);if(dL(i))return!1;return BRt(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{hfe,bPn,xHe,M6e,rEe};
