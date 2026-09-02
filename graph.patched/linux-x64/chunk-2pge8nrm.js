// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{gA,Em,ju,El}from"./chunk-vv42w3zb.js";import{we}from"./chunk-wsjwtx5h.js";import{Kn,IAt}from"./chunk-cn7kmt56.js";import{$u}from"./chunk-2d4sqmsz.js";import{join as i}from"path";function r4(n){return/^[A-Za-z0-9_-]{1,128}$/.test(n)?n:gA(n)}async function Kat(n,t,e){return i(ju(await El(n,$u(e))),T$t(t))}async function $ae(n,t,e){let r=await El(n,$u(e)),a=i(ju(r),T$t(t)),o=e===void 0?void 0:Trn(Em(r),t);return{path:a,v5:e===void 0||o===void 0?void 0:{backend:e,key:o}}}function Trn(n,t){let e=we.dirSyncRecord(n,r4(t));return Kn(e)===void 0?e:void 0}function T$t(n){return`${r4(n)}${IAt}`}
export{r4,Kat,$ae,Trn,T$t};
