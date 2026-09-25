// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import"./chunk-kp7gknaw.js";import"./chunk-4a5nddj6.js";import"./chunk-cqc88nqm.js";import"./chunk-7yckkh1m.js";import"./chunk-rnxz8hs2.js";import"./chunk-2bj5eqbj.js";import"./chunk-7r0w3nmp.js";import"./chunk-35k7s716.js";import"./chunk-0n80jtth.js";import"./chunk-8bp13hnn.js";import"./chunk-dqhw8yqd.js";import"./chunk-wfscmafr.js";import"./chunk-kcjajdc8.js";import"./chunk-nqsdwfmt.js";import"./chunk-1y7zyxh8.js";import"./chunk-65nweewy.js";import"./chunk-ay603yys.js";import"./chunk-pwyp6fhc.js";import"./chunk-9c4ja01c.js";import{ri}from"./chunk-6j512bza.js";import"./chunk-5wq5hbjb.js";import"./chunk-hvxn56gd.js";import"./chunk-cft4wy8y.js";import{qr}from"./chunk-yg9a0wxc.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${qr([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${ri(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
