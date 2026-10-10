// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ar}from"./chunk-cnq34fr6.js";import{uH,ce}from"./chunk-bk5ct2gw.js";import{t}from"./chunk-gyf58rwf.js";import{i}from"./chunk-4nygtnjw.js";import{p}from"./chunk-fdwn5gdv.js";import{o,v,A,u,C}from"./chunk-9cmjz7j9.js";import{createHash as l}from"crypto";var f=64,c=p(()=>u({generation:v().int().min(1),etag:o().optional(),allow:A(o()),at:v(),tried:C(!0).optional()}));function aVr(n){return l("sha256").update(n,"utf8").digest("hex").slice(0,32)}function m(n){return ar(n)}function NWt(n){let e=ce().remoteHomeSettingsSent?.[m(n)];if(e===void 0)return;let r=c().safeParse(e);return r.success?r.data:void 0}function t4o(n){let e=NWt(n);return e!==void 0&&e.tried!==!0}async function KQn(n,e,r){let s=m(n);if(!await uH((d)=>({...d,remoteHomeSettingsSent:w({...d.remoteHomeSettingsSent,[s]:S(d.remoteHomeSettingsSent?.[s],e)})}),r))i("tengu_home_seed_record_unwritten",{}),t("home settings: the record of what was sent could not be written",{level:"warn"})}function S(n,e){let r=c().safeParse(n).data,{tried:s,...a}=e,d=!e.etag&&(r?r.tried:e.tried);return{...a,...d&&{tried:!0},generation:Math.max(e.generation,r?.generation??0),allow:e.allow.filter((g)=>e.etag||!r||r.allow.includes(g))}}function w(n){let e=Object.entries(n).flatMap(([r,s])=>{let a=c().safeParse(s);return a.success&&Number.isFinite(a.data.at)?[[r,a.data]]:[]});return Object.fromEntries(e.toSorted(([,r],[,s])=>s.at-r.at).slice(0,f))}
export{aVr,NWt,t4o,KQn};
