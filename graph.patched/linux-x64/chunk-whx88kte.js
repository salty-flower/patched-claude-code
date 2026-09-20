// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import"./chunk-txfrkyzp.js";import"./chunk-gj513b2z.js";import"./chunk-qztrb7e5.js";import"./chunk-d3xvzk7s.js";import"./chunk-kh3dq6rw.js";import"./chunk-k4wnp212.js";import"./chunk-40wq8hf6.js";import"./chunk-cnzbk8gg.js";import"./chunk-p9tbyvzw.js";import"./chunk-847hpqqs.js";import"./chunk-hdk9febf.js";import"./chunk-67jj8qay.js";import"./chunk-q3f1bdx8.js";import"./chunk-q2vrcqny.js";import"./chunk-577jmkv2.js";import"./chunk-bb220g96.js";import{Es}from"./chunk-2n66rk9w.js";import"./chunk-b48ax99g.js";import"./chunk-d0bmg328.js";import"./chunk-7x5ref3k.js";import{ho}from"./chunk-185p2t3c.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${ho([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${Es(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
