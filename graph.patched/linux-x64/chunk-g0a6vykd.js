// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Ve,hu,Fn}from"./chunk-6n7yk222.js";import{_t,gt,Pn,Vn,IE}from"./chunk-ce4ppmnp.js";import{td}from"./chunk-dqr9knfd.js";import{l_}from"./chunk-2byjyg85.js";import{WFt}from"./chunk-nj585ctd.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function Aan(){return gt()&&Pn()?.billingType!=="usage_based"&&td()&&hu()&&!Fn()&&!_t()}function rde(e){return Aan()&&WFt(e)&&e.rateLimitType==="five_hour"}function Xdt(){switch(Vn()){case"pro":return"pro";case"max":switch(IE()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function T4e(){l_({agentId:Ve(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{Aan,rde,Xdt,T4e};
