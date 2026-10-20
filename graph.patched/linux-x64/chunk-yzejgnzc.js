// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import"./chunk-grpzqw3p.js";import"./chunk-8nra9hkj.js";import"./chunk-dxktn51d.js";import"./chunk-6arex0x2.js";import"./chunk-m3epja3j.js";import"./chunk-ekgz6skk.js";import"./chunk-wk0rbc8w.js";import"./chunk-h9cj3xp8.js";import"./chunk-2fbnw5gg.js";import"./chunk-jkcb7qdd.js";import"./chunk-jbgr14ef.js";import"./chunk-59xd6a0a.js";import"./chunk-n5v91jc3.js";import"./chunk-nvrstjfg.js";import"./chunk-nt1g7asm.js";import"./chunk-pbkqy204.js";import"./chunk-cd1a8ced.js";import"./chunk-tbekftmt.js";import"./chunk-jf4xjz28.js";import"./chunk-4ccvyrtz.js";import"./chunk-zjcj7ams.js";import"./chunk-pja9erbz.js";import{Di}from"./chunk-293nkhh0.js";import"./chunk-bvydn19x.js";import"./chunk-segx3fdf.js";import{go}from"./chunk-40hga2nz.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${go([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${Di(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
