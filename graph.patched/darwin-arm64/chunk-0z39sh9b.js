// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Ze,qu,Mn}from"./chunk-hdbxv3pp.js";import{bt,wt,On,Xn,Qw}from"./chunk-h6md7820.js";import{mp}from"./chunk-j64ncx4g.js";import{QS}from"./chunk-darxmw8c.js";import{yOt}from"./chunk-4j30jhq0.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function Aen(){return wt()&&On()?.billingType!=="usage_based"&&mp()&&qu()&&!Mn()&&!bt()}function hle(e){return Aen()&&yOt(e)&&e.rateLimitType==="five_hour"}function Est(){switch(Xn()){case"pro":return"pro";case"max":switch(Qw()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function IWe(){QS({agentId:Ze(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{Aen,hle,Est,IWe};
