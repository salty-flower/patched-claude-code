// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i5}from"./chunk-axsjfnwn.js";import{f}from"./chunk-tkh9f09d.js";import{JQ}from"./chunk-hc64a8r4.js";import{E,u}from"./chunk-97je7cvf.js";var o=60000,r=1800000,t=2592000000,i=f(()=>u({recurringFrac:E().min(0).max(1),recurringCapMs:E().int().min(0).max(r),oneShotMaxMs:E().int().min(0).max(r),oneShotFloorMs:E().int().min(0).max(r),oneShotMinuteMod:E().int().min(1).max(60),recurringMaxAgeMs:E().int().min(0).max(t).default(JQ.recurringMaxAgeMs),cacheLeadMs:E().int().min(0).max(60000).default(JQ.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function _J(){let n=i5("tengu_kairos_cron_config",JQ,o),e=i().safeParse(n);return e.success?e.data:JQ}
export{_J};
