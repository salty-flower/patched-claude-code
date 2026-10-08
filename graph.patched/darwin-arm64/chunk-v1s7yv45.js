// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ir}from"./chunk-a7bs4sbc.js";import{YO,ce}from"./chunk-gcyvvtkw.js";import{t}from"./chunk-b5feae42.js";import{i}from"./chunk-ne43gjnt.js";import{f}from"./chunk-y575z4xw.js";import{o,v,A,u,R}from"./chunk-hcyr0654.js";import{createHash as l}from"crypto";var S=64,c=f(()=>u({generation:v().int().min(1),etag:o().optional(),allow:A(o()),at:v(),tried:R(!0).optional()}));function ABr(n){return l("sha256").update(n,"utf8").digest("hex").slice(0,32)}function m(n){return ir(n)}function ggn(n){let e=ce().remoteHomeSettingsSent?.[m(n)];if(e===void 0)return;let r=c().safeParse(e);return r.success?r.data:void 0}function Ujo(n){let e=ggn(n);return e!==void 0&&e.tried!==!0}async function u8n(n,e,r){let s=m(n);if(!await YO((d)=>({...d,remoteHomeSettingsSent:w({...d.remoteHomeSettingsSent,[s]:p(d.remoteHomeSettingsSent?.[s],e)})}),r))i("tengu_home_seed_record_unwritten",{}),t("home settings: the record of what was sent could not be written",{level:"warn"})}function p(n,e){let r=c().safeParse(n).data,{tried:s,...a}=e,d=!e.etag&&(r?r.tried:e.tried);return{...a,...d&&{tried:!0},generation:Math.max(e.generation,r?.generation??0),allow:e.allow.filter((g)=>e.etag||!r||r.allow.includes(g))}}function w(n){let e=Object.entries(n).flatMap(([r,s])=>{let a=c().safeParse(s);return a.success&&Number.isFinite(a.data.at)?[[r,a.data]]:[]});return Object.fromEntries(e.toSorted(([,r],[,s])=>s.at-r.at).slice(0,S))}
export{ABr,ggn,Ujo,u8n};
