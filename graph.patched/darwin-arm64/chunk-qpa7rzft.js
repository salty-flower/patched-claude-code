// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f2}from"./chunk-gcyvvtkw.js";import{f}from"./chunk-y575z4xw.js";import{o5}from"./chunk-62ps415m.js";import{v,u}from"./chunk-hcyr0654.js";var o=60000,r=1800000,t=2592000000,i=f(()=>u({recurringFrac:v().min(0).max(1),recurringCapMs:v().int().min(0).max(r),oneShotMaxMs:v().int().min(0).max(r),oneShotFloorMs:v().int().min(0).max(r),oneShotMinuteMod:v().int().min(1).max(60),recurringMaxAgeMs:v().int().min(0).max(t).default(o5.recurringMaxAgeMs),cacheLeadMs:v().int().min(0).max(60000).default(o5.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function Ibe(){let n=f2("tengu_kairos_cron_config",o5,o),e=i().safeParse(n);return e.success?e.data:o5}
export{Ibe};
