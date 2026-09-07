// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{ze,ld,Nn}from"./chunk-2x3q7cfh.js";import{_t,gt,vn,qn,UT}from"./chunk-419zdfz3.js";import{Wu}from"./chunk-3msq3jt8.js";import{BS}from"./chunk-wmzgeczq.js";import{iLt}from"./chunk-wyzjbwp5.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function rnn(){return gt()&&vn()?.billingType!=="usage_based"&&Wu()&&ld()&&!Nn()&&!_t()}function Mle(e){return rnn()&&iLt(e)&&e.rateLimitType==="five_hour"}function rlt(){switch(qn()){case"pro":return"pro";case"max":switch(UT()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function V9e(){BS({agentId:ze(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{rnn,Mle,rlt,V9e};
