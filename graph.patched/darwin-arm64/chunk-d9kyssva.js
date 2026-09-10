// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Q0}from"./chunk-vryy7b5x.js";import{m}from"./chunk-7tpgnqqk.js";import{wF}from"./chunk-f7wmxkyz.js";import{A,c}from"./chunk-5vjkaf25.js";var o=60000,r=1800000,t=2592000000,i=m(()=>c({recurringFrac:A().min(0).max(1),recurringCapMs:A().int().min(0).max(r),oneShotMaxMs:A().int().min(0).max(r),oneShotFloorMs:A().int().min(0).max(r),oneShotMinuteMod:A().int().min(1).max(60),recurringMaxAgeMs:A().int().min(0).max(t).default(wF.recurringMaxAgeMs),cacheLeadMs:A().int().min(0).max(60000).default(wF.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function zoe(){let n=Q0("tengu_kairos_cron_config",wF,o),e=i().safeParse(n);return e.success?e.data:wF}
export{zoe};
