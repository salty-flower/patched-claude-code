// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{ze,td,Dn}from"./chunk-zhtwayh2.js";import{ht,gt,An,Bn,kT}from"./chunk-n495pc0t.js";import{bd}from"./chunk-d5e21f8p.js";import{kS}from"./chunk-1692k4g5.js";import{tOt}from"./chunk-wts8cfz5.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function XZt(){return gt()&&An()?.billingType!=="usage_based"&&bd()&&td()&&!Dn()&&!ht()}function Kae(e){return XZt()&&tOt(e)&&e.rateLimitType==="five_hour"}function Sit(){switch(Bn()){case"pro":return"pro";case"max":switch(kT()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function hWe(){kS({agentId:ze(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{XZt,Kae,Sit,hWe};
