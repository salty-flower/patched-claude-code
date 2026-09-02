// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{hA,Am,Wu,El}from"./chunk-4ngx0mjr.js";import{Te}from"./chunk-8ath6mn8.js";import{Kn,PAt}from"./chunk-1hpjnncp.js";import{Mu}from"./chunk-xn9j1h6b.js";import{join as i}from"path";function sG(n){return/^[A-Za-z0-9_-]{1,128}$/.test(n)?n:hA(n)}async function qat(n,t,e){return i(Wu(await El(n,Mu(e))),wLt(t))}async function Bae(n,t,e){let r=await El(n,Mu(e)),a=i(Wu(r),wLt(t)),o=e===void 0?void 0:Rrn(Am(r),t);return{path:a,v5:e===void 0||o===void 0?void 0:{backend:e,key:o}}}function Rrn(n,t){let e=Te.dirSyncRecord(n,sG(t));return Kn(e)===void 0?e:void 0}function wLt(n){return`${sG(n)}${PAt}`}
export{sG,qat,Bae,Rrn,wLt};
