// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{PO}from"./chunk-30p0nwys.js";import{f}from"./chunk-67jj8qay.js";import{yU}from"./chunk-cch7wh6r.js";import{E,u}from"./chunk-ehsmc9ae.js";var o=60000,r=1800000,t=2592000000,i=f(()=>u({recurringFrac:E().min(0).max(1),recurringCapMs:E().int().min(0).max(r),oneShotMaxMs:E().int().min(0).max(r),oneShotFloorMs:E().int().min(0).max(r),oneShotMinuteMod:E().int().min(1).max(60),recurringMaxAgeMs:E().int().min(0).max(t).default(yU.recurringMaxAgeMs),cacheLeadMs:E().int().min(0).max(60000).default(yU.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function nde(){let n=PO("tengu_kairos_cron_config",yU,o),e=i().safeParse(n);return e.success?e.data:yU}
export{nde};
