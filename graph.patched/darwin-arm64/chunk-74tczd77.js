// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import"./chunk-sgamszzq.js";import"./chunk-vx7e38ke.js";import"./chunk-n93bke93.js";import"./chunk-q2h0fawe.js";import"./chunk-vzm3bfp5.js";import"./chunk-jxdnn2j1.js";import"./chunk-tq3ft6e6.js";import"./chunk-qq9jq5dz.js";import"./chunk-k6smmjsm.js";import"./chunk-qmm87fyw.js";import"./chunk-pfxvy4ay.js";import"./chunk-67jj8qay.js";import"./chunk-7greh2d8.js";import"./chunk-wkhfcbsj.js";import"./chunk-hxn1me4q.js";import"./chunk-jmhxqcfx.js";import{vs}from"./chunk-pgetpn99.js";import"./chunk-nxhd1nfq.js";import"./chunk-m1s552da.js";import"./chunk-en8ntyde.js";import{ho}from"./chunk-185p2t3c.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${ho([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${vs(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
