// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import"./chunk-drh3s4e9.js";import"./chunk-63vja5td.js";import"./chunk-vd0a9d2s.js";import"./chunk-a48152q4.js";import"./chunk-eak61y8v.js";import"./chunk-tnh13g2g.js";import"./chunk-k2e8p61g.js";import"./chunk-9exgg8sx.js";import"./chunk-tdmgys2e.js";import"./chunk-ce4b81xm.js";import"./chunk-y208484s.js";import"./chunk-b5feae42.js";import"./chunk-xaschh52.js";import"./chunk-cy0s0eq1.js";import"./chunk-v2r1tbj3.js";import"./chunk-dqm3tjsh.js";import"./chunk-70qqbqq4.js";import"./chunk-zttk1yx5.js";import"./chunk-7dchs7vj.js";import"./chunk-pf8p4bsg.js";import"./chunk-ccbm7724.js";import{ui}from"./chunk-rh7py0tc.js";import"./chunk-dryq126j.js";import"./chunk-jkhz8ejr.js";import{eo}from"./chunk-8g1ghsbe.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${eo([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${ui(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
