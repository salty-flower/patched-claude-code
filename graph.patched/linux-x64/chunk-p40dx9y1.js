// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{T3o}from"./chunk-6arex0x2.js";import{hl,zs}from"./chunk-h9cj3xp8.js";import{iM,Kxe,$lt,uj,BV,oI}from"./chunk-rncrmfyt.js";import{ii}from"./chunk-32vra4sg.js";var CRe=(()=>{try{return T3o(process.cwd())}catch{return process.cwd()}})();function Bur(r,e){let n=iM(r),t=iM(e);if(uj(n)||uj(t))return!0;if(n.skipped!==t.skipped)return!0;return Kxe(n,t)}function w4e(r,e){if(zs(r)||hl(r))return[];let n=ii(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=oI(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>BV(o,e)!=="same")}function Bst(r,e){if(zs(r)||hl(r))return[];let n=ii(r),t=n!==null&&n!==void 0?[n]:oI(r);return e===void 0?t:t.filter((s)=>BV(s,e)!=="same")}function HNe(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=BV(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!Bur(s,r)}))return!1;if(n?.requireCovered===!0){let s=iM(r);if(uj(s))return!1;let o=(a)=>a.some((u)=>{let i=iM(u);if(uj(i))return!1;return $lt(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{CRe,Bur,w4e,Bst,HNe};
