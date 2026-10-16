// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import"./chunk-bkygtq8f.js";import"./chunk-3mdayxq0.js";import"./chunk-xzypj06m.js";import"./chunk-278j353c.js";import"./chunk-dnq93t1z.js";import"./chunk-wkh5syvr.js";import"./chunk-54xe5s81.js";import"./chunk-r0a9v21k.js";import"./chunk-e666gr8q.js";import"./chunk-6dw7xt0q.js";import"./chunk-hbbqggzw.js";import"./chunk-bnfhb7sj.js";import"./chunk-6bcyaxwk.js";import"./chunk-btnsqe7h.js";import"./chunk-yh19hj71.js";import"./chunk-k4g6y57j.js";import"./chunk-1qxwm3cf.js";import"./chunk-73603qq3.js";import"./chunk-jn6attna.js";import"./chunk-rk99n4cg.js";import{Ei}from"./chunk-b39hwker.js";import"./chunk-nvfrrmwj.js";import"./chunk-zs3v19vj.js";import{go}from"./chunk-tbpj9c0e.js";import"./chunk-c1a9wnpp.js";function c(t,o,a,d){let e=(i,r)=>typeof i==="string"&&typeof r==="string"&&i===a(r),s=e(t.saved_pages_dir,o)?`[A quickstart in this conversation saved reference pages of this type on disk in ${go([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`:"";if(t.not_listed===!0)return s===""?"":`

${s}`;let n=s===""?"":` ${s}`;if(typeof t.saved_system==="string"&&e(t.saved_system_dir,t.saved_system))return`

[A quickstart in this conversation already listed the design systems and saved the files of ${Ei(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;return s===""?null:`${d}${n}`}export{c as afterQuickstartSavedLine};
