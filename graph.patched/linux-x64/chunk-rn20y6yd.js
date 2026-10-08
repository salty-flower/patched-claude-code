// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ve,fp,$n}from"./chunk-g79wjybr.js";import{bl}from"./chunk-942093b7.js";import{_t,Hn,hr,sk,Lt}from"./chunk-cxjvwxsa.js";import{nN,Rk}from"./chunk-g263vvvn.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function yft(){return _t()&&Hn()?.billingType!=="usage_based"&&bl()&&fp()&&!$n()&&!Lt()}function Uoe(e){return yft()&&nN(e)&&e.rateLimitType==="five_hour"}var r=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function Edn(e){return yft()&&nN(e)&&e.rateLimitType!==void 0&&r.includes(e.rateLimitType)}function _ft(){switch(hr()){case"pro":return"pro";case"max":switch(sk()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function S9e(){Rk({agentId:Ve(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{yft,Uoe,Edn,_ft,S9e};
