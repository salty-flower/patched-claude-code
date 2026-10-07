// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import"./chunk-12mdvf4x.js";import"./chunk-29aedz4e.js";import"./chunk-8mvda08c.js";import"./chunk-ht3pd6g4.js";import"./chunk-hdvxmrfb.js";import"./chunk-fqsygynq.js";import"./chunk-ws170zqm.js";import"./chunk-5qeme8w3.js";import"./chunk-qfs4y3ww.js";import"./chunk-xbg4a11x.js";import"./chunk-yfyrtrqq.js";import"./chunk-f8eqwxpt.js";import"./chunk-sgznn49v.js";import"./chunk-pey4mmsy.js";import"./chunk-fqzh3zpr.js";import"./chunk-ym46rm1e.js";import"./chunk-j77txbjn.js";import"./chunk-napcsc17.js";import"./chunk-44myv9zp.js";import{Hi}from"./chunk-p7dmh6b6.js";import"./chunk-5bwrderf.js";import"./chunk-zgcypqv5.js";import{Kr}from"./chunk-ezzp0jec.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${Kr([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${Hi(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
