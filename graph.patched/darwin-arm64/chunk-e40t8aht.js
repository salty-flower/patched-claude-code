// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import"./chunk-nfna65jh.js";import"./chunk-fdxhcr6b.js";import"./chunk-4bw62nzm.js";import"./chunk-k1419ccf.js";import"./chunk-76anb6yt.js";import"./chunk-886tf6ja.js";import"./chunk-yjc18bey.js";import"./chunk-ae84tp6z.js";import"./chunk-gsnbskq4.js";import"./chunk-nqc6v990.js";import"./chunk-5b8s3gnd.js";import"./chunk-gyf58rwf.js";import"./chunk-tat46164.js";import"./chunk-ax7r0qj7.js";import"./chunk-phz47asr.js";import"./chunk-yvnhkg35.js";import"./chunk-mke1mg83.js";import"./chunk-p9frg3mj.js";import"./chunk-tadwrn0a.js";import"./chunk-g1yqb0n4.js";import{wi}from"./chunk-phm7wwmz.js";import"./chunk-ts42ykgs.js";import"./chunk-ngwfw4c8.js";import{so}from"./chunk-dyspjvns.js";import"./chunk-xaes9ysz.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${so([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${wi(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
