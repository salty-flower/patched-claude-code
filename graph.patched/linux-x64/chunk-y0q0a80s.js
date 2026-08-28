// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{nt,Su,Mn}from"./chunk-2vv5hpw3.js";import{_t,vt,In,Tn,Tv}from"./chunk-ns0ekkj0.js";import{Tb}from"./chunk-ryvgd9z0.js";import{Sw}from"./chunk-hrvkymct.js";import{NHt}from"./chunk-cypew82r.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function s9t(){return vt()&&In()?.billingType!=="usage_based"&&Tb()&&Su()&&!Mn()&&!_t()}function loe(e){return s9t()&&NHt(e)&&e.rateLimitType==="five_hour"}function Bet(){switch(Tn()){case"pro":return"pro";case"max":switch(Tv()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function iBe(){Sw({agentId:nt(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{s9t,loe,Bet,iBe};
