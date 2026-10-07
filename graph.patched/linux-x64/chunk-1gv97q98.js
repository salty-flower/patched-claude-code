// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{sr}from"./chunk-cqa4khw0.js";import{hO,ce}from"./chunk-m0sj7y8g.js";import{t}from"./chunk-gvn18sr5.js";import{i}from"./chunk-s90w5q15.js";import{f}from"./chunk-wp37h1qm.js";import{o,E,C,u}from"./chunk-6kgnb6mn.js";import{createHash as g}from"crypto";var l=64,m=f(()=>u({generation:E().int().min(1),etag:o().optional(),allow:C(o()),at:E()}));function vDr(r){return g("sha256").update(r,"utf8").digest("hex").slice(0,32)}function c(r){return sr(r)}function Cdn(r){let n=ce().remoteHomeSettingsSent?.[c(r)];if(n===void 0)return;let e=m().safeParse(n);return e.success?e.data:void 0}async function qVn(r,n,e){let a=c(r);if(!await hO((d)=>({...d,remoteHomeSettingsSent:p({...d.remoteHomeSettingsSent,[a]:S(d.remoteHomeSettingsSent?.[a],n)})}),e))i("tengu_home_seed_record_unwritten",{}),t("home settings: the record of what was sent could not be written",{level:"warn"})}function S(r,n){let e=m().safeParse(r).data;return{...n,generation:Math.max(n.generation,e?.generation??0),allow:n.allow.filter((a)=>n.etag||!e||e.allow.includes(a))}}function p(r){let n=Object.entries(r).flatMap(([e,a])=>{let s=m().safeParse(a);return s.success&&Number.isFinite(s.data.at)?[[e,s.data]]:[]});return Object.fromEntries(n.toSorted(([,e],[,a])=>a.at-e.at).slice(0,l))}
export{vDr,Cdn,qVn};
