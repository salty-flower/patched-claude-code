// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{qe,pu,Mn}from"./chunk-cet8na02.js";import{_t,gt,Hn,Vn,yA}from"./chunk-vryy7b5x.js";import{ed}from"./chunk-k2g2a0ht.js";import{a_}from"./chunk-tavwd3sq.js";import{iFt}from"./chunk-6ncymkhw.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function Usn(){return gt()&&Hn()?.billingType!=="usage_based"&&ed()&&pu()&&!Mn()&&!_t()}function yue(e){return Usn()&&iFt(e)&&e.rateLimitType==="five_hour"}function Out(){switch(Vn()){case"pro":return"pro";case"max":switch(yA()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function mVe(){a_({agentId:qe(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{Usn,yue,Out,mVe};
