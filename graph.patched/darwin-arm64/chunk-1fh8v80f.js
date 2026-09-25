// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{$N}from"./chunk-twxt3h9y.js";import{f}from"./chunk-1y7zyxh8.js";import{G6}from"./chunk-a22c5y56.js";import{C,d}from"./chunk-rvnav1yx.js";var o=60000,r=1800000,t=2592000000,i=f(()=>d({recurringFrac:C().min(0).max(1),recurringCapMs:C().int().min(0).max(r),oneShotMaxMs:C().int().min(0).max(r),oneShotFloorMs:C().int().min(0).max(r),oneShotMinuteMod:C().int().min(1).max(60),recurringMaxAgeMs:C().int().min(0).max(t).default(G6.recurringMaxAgeMs),cacheLeadMs:C().int().min(0).max(60000).default(G6.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function yhe(){let n=$N("tengu_kairos_cron_config",G6,o),e=i().safeParse(n);return e.success?e.data:G6}
export{yhe};
