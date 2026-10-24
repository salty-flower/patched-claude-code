// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Sis}from"./chunk-kqpf5fh3.js";import{hl,Vs}from"./chunk-gp4v3dbd.js";import{v0,rMe,Zft,f2,Xq,hO}from"./chunk-31gxg38t.js";import{oi}from"./chunk-vh7e37w8.js";var MIe=(()=>{try{return Sis(process.cwd())}catch{return process.cwd()}})();function xwr(r,e){let n=v0(r),t=v0(e);if(f2(n)||f2(t))return!0;if(n.skipped!==t.skipped)return!0;return rMe(n,t)}function j9e(r,e){if(Vs(r)||hl(r))return[];let n=oi(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=hO(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>Xq(o,e)!=="same")}function Vct(r,e){if(Vs(r)||hl(r))return[];let n=oi(r),t=n!==null&&n!==void 0?[n]:hO(r);return e===void 0?t:t.filter((s)=>Xq(s,e)!=="same")}function h1e(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=Xq(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!xwr(s,r)}))return!1;if(n?.requireCovered===!0){let s=v0(r);if(f2(s))return!1;let o=(a)=>a.some((u)=>{let i=v0(u);if(f2(i))return!1;return Zft(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{MIe,xwr,j9e,Vct,h1e};
