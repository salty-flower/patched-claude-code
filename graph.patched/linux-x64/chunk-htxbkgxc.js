// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import"./chunk-b7wdy41p.js";import"./chunk-918t5khf.js";import"./chunk-aywwjcwq.js";import"./chunk-f16c4jnr.js";import"./chunk-yffha6me.js";import"./chunk-fdatg9ax.js";import"./chunk-0mwsqxme.js";import"./chunk-gf0t3nd9.js";import"./chunk-z9b8syjk.js";import"./chunk-bpkzpttw.js";import"./chunk-zs0343th.js";import"./chunk-gvn18sr5.js";import"./chunk-0z5rjdcn.js";import"./chunk-ky8zgwyh.js";import"./chunk-z6am4wsr.js";import"./chunk-6rzcw8g2.js";import"./chunk-869zfth6.js";import"./chunk-jb4eqyjv.js";import"./chunk-pvw1e2q4.js";import{Oi}from"./chunk-ch8aw0k0.js";import"./chunk-yh6kwat0.js";import"./chunk-pak71jg1.js";import{Kr}from"./chunk-ezzp0jec.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${Kr([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${Oi(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
