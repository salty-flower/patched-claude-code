// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ll,Is}from"./chunk-r0a9v21k.js";import{GO,ERe,xit,BB,aV,UP}from"./chunk-996thspe.js";import{Xs}from"./chunk-td5pjp2j.js";import{realpathSync as u}from"fs";var kTe=(()=>{try{return u(process.cwd())}catch{return process.cwd()}})();function Bar(r,e){let n=GO(r),t=GO(e);if(BB(n)||BB(t))return!0;if(n.skipped!==t.skipped)return!0;return ERe(n,t)}function BVe(r,e){if(Is(r)||ll(r))return[];let n=Xs(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=UP(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>aV(o,e)!=="same")}function oot(r,e){if(Is(r)||ll(r))return[];let n=Xs(r),t=n!==null&&n!==void 0?[n]:UP(r);return e===void 0?t:t.filter((s)=>aV(s,e)!=="same")}function vLe(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=aV(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!Bar(s,r)}))return!1;if(n?.requireCovered===!0){let s=GO(r);if(BB(s))return!1;let o=(a)=>a.some((c)=>{let i=GO(c);if(BB(i))return!1;return xit(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{kTe,Bar,BVe,oot,vLe};
