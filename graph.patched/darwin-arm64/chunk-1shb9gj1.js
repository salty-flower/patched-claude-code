// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{RW}from"./chunk-bk5ct2gw.js";import{p}from"./chunk-fdwn5gdv.js";import{_9}from"./chunk-atzjaveb.js";import{v,u}from"./chunk-9cmjz7j9.js";var o=60000,r=1800000,t=2592000000,i=p(()=>u({recurringFrac:v().min(0).max(1),recurringCapMs:v().int().min(0).max(r),oneShotMaxMs:v().int().min(0).max(r),oneShotFloorMs:v().int().min(0).max(r),oneShotMinuteMod:v().int().min(1).max(60),recurringMaxAgeMs:v().int().min(0).max(t).default(_9.recurringMaxAgeMs),cacheLeadMs:v().int().min(0).max(60000).default(_9.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function QEe(){let n=RW("tengu_kairos_cron_config",_9,o),e=i().safeParse(n);return e.success?e.data:_9}
export{QEe};
