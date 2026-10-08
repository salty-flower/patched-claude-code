// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import"./chunk-28fj72x7.js";import"./chunk-ndcqd6bh.js";import"./chunk-g79wjybr.js";import"./chunk-4p5wb748.js";import"./chunk-bkr1h20c.js";import"./chunk-5g6j8x8p.js";import"./chunk-670y7hd9.js";import"./chunk-gwj7v27h.js";import"./chunk-3s94kw4m.js";import"./chunk-4z5wz91m.js";import"./chunk-941sa7c2.js";import"./chunk-p46wpkfz.js";import"./chunk-gx95ar6n.js";import"./chunk-j6z0j5vh.js";import"./chunk-2j48j0j1.js";import"./chunk-70ktd4rm.js";import"./chunk-rptge3r8.js";import"./chunk-025kqzfg.js";import"./chunk-7dchs7vj.js";import"./chunk-cjpd2k0t.js";import"./chunk-fs1m5djd.js";import{ui}from"./chunk-571ddenq.js";import"./chunk-ds5pk6ma.js";import"./chunk-c91vhg3c.js";import{eo}from"./chunk-8g1ghsbe.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${eo([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${ui(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
