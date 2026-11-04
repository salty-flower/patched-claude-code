// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Dr}from"./chunk-62j6znyn.js";import{A}from"./chunk-sktwb66b.js";import{Ro}from"./chunk-fz08tv6f.js";import{Ym,Dt}from"./chunk-8xtprj2q.js";import{X}from"./chunk-bgsak306.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function y3s(e,r){if(X()&&r!==void 0&&Dr(e)){await n(r,{namespace:"job",jobId:e});return}await i(Ro(e),{recursive:!0})}async function UKe(e,r){if(X()&&r!==void 0&&Dr(e)){await n(r,c(e));return}await i(a(Ro(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=Ym(o.error);throw Object.assign(new A(`job folder not made (${Dt(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{y3s,UKe};
