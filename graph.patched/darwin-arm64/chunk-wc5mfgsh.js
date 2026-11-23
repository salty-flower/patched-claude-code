// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{MY}from"./chunk-e44qnbvj.js";import{p}from"./chunk-7ap5zh1s.js";import{PQ}from"./chunk-ew2zgws6.js";import{k,u}from"./chunk-m507bxk0.js";var o=60000,r=1800000,t=2592000000,i=p(()=>u({recurringFrac:k().min(0).max(1),recurringCapMs:k().int().min(0).max(r),oneShotMaxMs:k().int().min(0).max(r),oneShotFloorMs:k().int().min(0).max(r),oneShotMinuteMod:k().int().min(1).max(60),recurringMaxAgeMs:k().int().min(0).max(t).default(PQ.recurringMaxAgeMs),cacheLeadMs:k().int().min(0).max(60000).default(PQ.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function Gq(){let n=MY("tengu_kairos_cron_config",PQ,o),e=i().safeParse(n);return e.success?e.data:PQ}
export{Gq};
