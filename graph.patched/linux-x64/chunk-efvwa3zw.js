// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import"./chunk-bfqfmbd0.js";import"./chunk-rs6p8dg3.js";import"./chunk-eqmywwjn.js";import"./chunk-qeqy4res.js";import"./chunk-fr28a3he.js";import"./chunk-w7m8nded.js";import"./chunk-r2xfgg0x.js";import"./chunk-pzq28dp7.js";import"./chunk-9pt2nr7j.js";import"./chunk-c61xdsy8.js";import"./chunk-8fqmxv14.js";import"./chunk-cwsn6mdf.js";import"./chunk-xc4b32zy.js";import"./chunk-b9getfsf.js";import"./chunk-63mtweh2.js";import"./chunk-xwn0mfnc.js";import"./chunk-m1dg0rsv.js";import"./chunk-73603qq3.js";import"./chunk-en4g449d.js";import"./chunk-bsdd04br.js";import{wi}from"./chunk-8g5pckzs.js";import"./chunk-4z1qxvsq.js";import"./chunk-6z47rnsq.js";import{go}from"./chunk-tbpj9c0e.js";import"./chunk-29rv67gt.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${go([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${wi(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
