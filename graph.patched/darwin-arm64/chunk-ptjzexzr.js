// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{WO}from"./chunk-g4c6ggz4.js";import{f}from"./chunk-67jj8qay.js";import{TU}from"./chunk-cpmvkw4j.js";import{v,u}from"./chunk-s6d8yza1.js";var o=60000,r=1800000,t=2592000000,i=f(()=>u({recurringFrac:v().min(0).max(1),recurringCapMs:v().int().min(0).max(r),oneShotMaxMs:v().int().min(0).max(r),oneShotFloorMs:v().int().min(0).max(r),oneShotMinuteMod:v().int().min(1).max(60),recurringMaxAgeMs:v().int().min(0).max(t).default(TU.recurringMaxAgeMs),cacheLeadMs:v().int().min(0).max(60000).default(TU.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function cde(){let n=WO("tengu_kairos_cron_config",TU,o),e=i().safeParse(n);return e.success?e.data:TU}
export{cde};
