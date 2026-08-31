// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{et,zu,$n}from"./chunk-38213y7h.js";import{wt,Tt,Dn,Fn,mw}from"./chunk-bsdtxcdc.js";import{zg}from"./chunk-znxmbm58.js";import{gE}from"./chunk-fy12d89p.js";import{rxt}from"./chunk-t0drmbm8.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function GYt(){return Tt()&&Dn()?.billingType!=="usage_based"&&zg()&&zu()&&!$n()&&!wt()}function bse(e){return GYt()&&rxt(e)&&e.rateLimitType==="five_hour"}function Xnt(){switch(Fn()){case"pro":return"pro";case"max":switch(mw()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function T2e(){gE({agentId:et(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{GYt,bse,Xnt,T2e};
