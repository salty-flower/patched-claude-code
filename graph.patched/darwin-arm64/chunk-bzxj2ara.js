// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import"./chunk-ypa64mmn.js";import"./chunk-g5e6pf8s.js";import"./chunk-a7cah040.js";import"./chunk-nynxm73s.js";import"./chunk-g9zw99sb.js";import"./chunk-hs50vfa7.js";import"./chunk-jm8r4kd0.js";import"./chunk-2j7zyd8v.js";import"./chunk-zwbw6dvp.js";import"./chunk-h1eby6n2.js";import"./chunk-vmffs68f.js";import"./chunk-3wz0srxw.js";import"./chunk-dard33vx.js";import"./chunk-62dhtzrb.js";import"./chunk-dsp1md5e.js";import"./chunk-sxefq60x.js";import"./chunk-1fpwxv0g.js";import"./chunk-mbr6m81k.js";import"./chunk-pnss6pgj.js";import{bi}from"./chunk-kt9hyg55.js";import"./chunk-ya4yfeap.js";import"./chunk-vc06pma6.js";import"./chunk-5yg4avpf.js";import{Vr}from"./chunk-q6w20s82.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${Vr([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${bi(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
