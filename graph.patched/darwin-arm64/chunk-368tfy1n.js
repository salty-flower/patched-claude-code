// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import"./chunk-esv3b1gm.js";import"./chunk-bjnpzyk4.js";import"./chunk-kpqr86hf.js";import"./chunk-saccfcs4.js";import"./chunk-ny2cqbmq.js";import"./chunk-nre716m4.js";import"./chunk-2ckwvz0j.js";import"./chunk-f66mhvm1.js";import"./chunk-cne7d53x.js";import"./chunk-277zhca1.js";import"./chunk-jrcdjayr.js";import"./chunk-r22r6j92.js";import"./chunk-tdxkq523.js";import"./chunk-pmhx705f.js";import"./chunk-42txhxmf.js";import"./chunk-4nyg9560.js";import"./chunk-h422gpw8.js";import"./chunk-x352w4g5.js";import"./chunk-jy7b5szn.js";import"./chunk-4ccvyrtz.js";import"./chunk-pvfq0951.js";import"./chunk-jwx38c7d.js";import{Di}from"./chunk-rvawj5kr.js";import"./chunk-sm45d99b.js";import"./chunk-t3wkkqhe.js";import{go}from"./chunk-40hga2nz.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${go([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${Di(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
