// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{w0}from"./chunk-h6md7820.js";import{m}from"./chunk-ffgkv432.js";import{xN}from"./chunk-mpbkz05d.js";import{A,c}from"./chunk-rwtwjs93.js";var o=60000,r=1800000,t=2592000000,i=m(()=>c({recurringFrac:A().min(0).max(1),recurringCapMs:A().int().min(0).max(r),oneShotMaxMs:A().int().min(0).max(r),oneShotFloorMs:A().int().min(0).max(r),oneShotMinuteMod:A().int().min(1).max(60),recurringMaxAgeMs:A().int().min(0).max(t).default(xN.recurringMaxAgeMs),cacheLeadMs:A().int().min(0).max(60000).default(xN.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function fre(){let n=w0("tengu_kairos_cron_config",xN,o),e=i().safeParse(n);return e.success?e.data:xN}
export{fre};
