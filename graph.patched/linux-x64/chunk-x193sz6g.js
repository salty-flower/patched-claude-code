// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{GR}from"./chunk-3e93vkg3.js";import{m}from"./chunk-3qjd0g3g.js";import{VM}from"./chunk-cw93qbg0.js";import{w,c}from"./chunk-krs3sfpb.js";var o=60000,r=1800000,t=2592000000,i=m(()=>c({recurringFrac:w().min(0).max(1),recurringCapMs:w().int().min(0).max(r),oneShotMaxMs:w().int().min(0).max(r),oneShotFloorMs:w().int().min(0).max(r),oneShotMinuteMod:w().int().min(1).max(60),recurringMaxAgeMs:w().int().min(0).max(t).default(VM.recurringMaxAgeMs),cacheLeadMs:w().int().min(0).max(60000).default(VM.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function kne(){let n=GR("tengu_kairos_cron_config",VM,o),e=i().safeParse(n);return e.success?e.data:VM}
export{kne};
