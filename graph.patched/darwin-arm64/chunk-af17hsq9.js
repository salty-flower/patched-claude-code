// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ir}from"./chunk-7snmbrvc.js";import{AM,ue}from"./chunk-1901fdh6.js";import{t}from"./chunk-bnfhb7sj.js";import{i}from"./chunk-52pf9qag.js";import{f}from"./chunk-5r64b6x9.js";import{o,E,C,u,A}from"./chunk-82bgdty3.js";import{createHash as l}from"crypto";var S=64,c=f(()=>u({generation:E().int().min(1),etag:o().optional(),allow:C(o()),at:E(),tried:A(!0).optional()}));function WQr(n){return l("sha256").update(n,"utf8").digest("hex").slice(0,32)}function m(n){return ir(n)}function p4t(n){let e=ue().remoteHomeSettingsSent?.[m(n)];if(e===void 0)return;let r=c().safeParse(e);return r.success?r.data:void 0}function gss(n){let e=p4t(n);return e!==void 0&&e.tried!==!0}async function Fdr(n,e,r){let s=m(n);if(!await AM((d)=>({...d,remoteHomeSettingsSent:w({...d.remoteHomeSettingsSent,[s]:p(d.remoteHomeSettingsSent?.[s],e)})}),r))i("tengu_home_seed_record_unwritten",{}),t("home settings: the record of what was sent could not be written",{level:"warn"})}function p(n,e){let r=c().safeParse(n).data,{tried:s,...a}=e,d=!e.etag&&(r?r.tried:e.tried);return{...a,...d&&{tried:!0},generation:Math.max(e.generation,r?.generation??0),allow:e.allow.filter((g)=>e.etag||!r||r.allow.includes(g))}}function w(n){let e=Object.entries(n).flatMap(([r,s])=>{let a=c().safeParse(s);return a.success&&Number.isFinite(a.data.at)?[[r,a.data]]:[]});return Object.fromEntries(e.toSorted(([,r],[,s])=>s.at-r.at).slice(0,S))}
export{WQr,p4t,gss,Fdr};
