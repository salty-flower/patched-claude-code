// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{DH}from"./chunk-bsdtxcdc.js";import{m}from"./chunk-asme1eq2.js";import{AM}from"./chunk-tgq24z72.js";import{v,f}from"./chunk-skrj2yn0.js";var o=60000,r=1800000,t=2592000000,i=m(()=>f({recurringFrac:v().min(0).max(1),recurringCapMs:v().int().min(0).max(r),oneShotMaxMs:v().int().min(0).max(r),oneShotFloorMs:v().int().min(0).max(r),oneShotMinuteMod:v().int().min(1).max(60),recurringMaxAgeMs:v().int().min(0).max(t).default(AM.recurringMaxAgeMs),cacheLeadMs:v().int().min(0).max(60000).default(AM.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function wte(){let n=DH("tengu_kairos_cron_config",AM,o),e=i().safeParse(n);return e.success?e.data:AM}
export{wte};
