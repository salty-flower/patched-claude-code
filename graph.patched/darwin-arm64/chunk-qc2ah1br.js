// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import"./chunk-9sbknd2z.js";import"./chunk-9s1z8ttt.js";import"./chunk-ersar6wn.js";import"./chunk-kqpf5fh3.js";import"./chunk-ydpbzmt4.js";import"./chunk-36ysyspx.js";import"./chunk-3kevgx4j.js";import"./chunk-gp4v3dbd.js";import"./chunk-3y73jbfr.js";import"./chunk-thm21ca7.js";import"./chunk-21mz1tvc.js";import"./chunk-ke15dgmq.js";import"./chunk-d7b0m8qy.js";import"./chunk-x6r6k81p.js";import"./chunk-p1qnbfcw.js";import"./chunk-j79dwkaq.js";import"./chunk-nrx8c90j.js";import"./chunk-9a41hw1t.js";import"./chunk-dz0rx1wn.js";import"./chunk-cg45s1mf.js";import"./chunk-4kxy1036.js";import"./chunk-we9anmwe.js";import"./chunk-vf2gp3w9.js";import{Xi}from"./chunk-hxm5yqk0.js";import"./chunk-nfgwaxf2.js";import"./chunk-zmrs49f3.js";import{wo}from"./chunk-rnxkk435.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${wo([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${Xi(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
