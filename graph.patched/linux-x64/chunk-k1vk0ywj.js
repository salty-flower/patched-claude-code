// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{_C}from"./chunk-ns0ekkj0.js";import{h}from"./chunk-s0y4aasp.js";import{KP}from"./chunk-j2tb27zj.js";import{T,m}from"./chunk-kfr3f08h.js";var o=60000,r=1800000,t=2592000000,i=h(()=>m({recurringFrac:T().min(0).max(1),recurringCapMs:T().int().min(0).max(r),oneShotMaxMs:T().int().min(0).max(r),oneShotFloorMs:T().int().min(0).max(r),oneShotMinuteMod:T().int().min(1).max(60),recurringMaxAgeMs:T().int().min(0).max(t).default(KP.recurringMaxAgeMs),cacheLeadMs:T().int().min(0).max(60000).default(KP.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function XQ(){let n=_C("tengu_kairos_cron_config",KP,o),e=i().safeParse(n);return e.success?e.data:KP}
export{XQ};
