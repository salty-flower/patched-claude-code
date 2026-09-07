// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Ve,ed,Dn}from"./chunk-bj7g1p32.js";import{ht,gt,An,Yn,Tw}from"./chunk-3e93vkg3.js";import{bd}from"./chunk-0558tzyr.js";import{Tb}from"./chunk-y3swhsrk.js";import{NPt}from"./chunk-q2ys7ygz.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function CZt(){return gt()&&An()?.billingType!=="usage_based"&&bd()&&ed()&&!Dn()&&!ht()}function jae(e){return CZt()&&NPt(e)&&e.rateLimitType==="five_hour"}function ait(){switch(Yn()){case"pro":return"pro";case"max":switch(Tw()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function aWe(){Tb({agentId:Ve(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{CZt,jae,ait,aWe};
