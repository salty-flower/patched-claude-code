// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{k7}from"./chunk-a5a37ds7.js";import{p}from"./chunk-q8mq1ny3.js";import{wQ}from"./chunk-j5hmf9bk.js";import{E,u}from"./chunk-xrhk683g.js";var o=60000,r=1800000,t=2592000000,i=p(()=>u({recurringFrac:E().min(0).max(1),recurringCapMs:E().int().min(0).max(r),oneShotMaxMs:E().int().min(0).max(r),oneShotFloorMs:E().int().min(0).max(r),oneShotMinuteMod:E().int().min(1).max(60),recurringMaxAgeMs:E().int().min(0).max(t).default(wQ.recurringMaxAgeMs),cacheLeadMs:E().int().min(0).max(60000).default(wQ.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function H6(){let n=k7("tengu_kairos_cron_config",wQ,o),e=i().safeParse(n);return e.success?e.data:wQ}
export{H6};
