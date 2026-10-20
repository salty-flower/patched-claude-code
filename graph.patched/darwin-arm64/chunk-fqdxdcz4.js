// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{n8o}from"./chunk-saccfcs4.js";import{yl,zs}from"./chunk-f66mhvm1.js";import{cM,Zxe,Vlt,wj,XV,lI}from"./chunk-na9nw575.js";import{ai}from"./chunk-tx4cjw3a.js";var HRe=(()=>{try{return n8o(process.cwd())}catch{return process.cwd()}})();function spr(r,e){let n=cM(r),t=cM(e);if(wj(n)||wj(t))return!0;if(n.skipped!==t.skipped)return!0;return Zxe(n,t)}function xqe(r,e){if(zs(r)||yl(r))return[];let n=ai(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=lI(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>XV(o,e)!=="same")}function zst(r,e){if(zs(r)||yl(r))return[];let n=ai(r),t=n!==null&&n!==void 0?[n]:lI(r);return e===void 0?t:t.filter((s)=>XV(s,e)!=="same")}function GNe(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=XV(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!spr(s,r)}))return!1;if(n?.requireCovered===!0){let s=cM(r);if(wj(s))return!1;let o=(a)=>a.some((u)=>{let i=cM(u);if(wj(i))return!1;return Vlt(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{HRe,spr,xqe,zst,GNe};
