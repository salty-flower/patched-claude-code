// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{We,Su,$n}from"./chunk-a7cah040.js";import{Bl}from"./chunk-ntsbwr3d.js";import{ut,Cn,rr,nE,Tt}from"./chunk-er6f56rj.js";import{xE}from"./chunk-59zy4j10.js";import{rz}from"./chunk-fc3zb1k0.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function iet(){return ut()&&Cn()?.billingType!=="usage_based"&&Bl()&&Su()&&!$n()&&!Tt()}function VQ(e){return iet()&&rz(e)&&e.rateLimitType==="five_hour"}var r=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function XKt(e){return iet()&&rz(e)&&e.rateLimitType!==void 0&&r.includes(e.rateLimitType)}function aet(){switch(rr()){case"pro":return"pro";case"max":switch(nE()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function s6e(){xE({agentId:We(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{iet,VQ,XKt,aet,s6e};
