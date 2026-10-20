// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Ze,$u,On}from"./chunk-dxktn51d.js";import{sa}from"./chunk-pr2cfg7g.js";import{kt,mn,hr,rE,$t}from"./chunk-7p6jp6kj.js";import{$A,zE}from"./chunk-rncrmfyt.js";import{randomUUID as o}from"crypto";function t(e,r){switch(e){case"pro":return"pro";case"max":switch(r){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}var i="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function qoe(){return kt()&&mn()?.billingType!=="usage_based"&&sa()&&$u()&&!On()&&!$t()}function f4e(e){return qoe()&&$A(e)&&e.rateLimitType==="five_hour"}var n=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function p6t(e){return qoe()&&$A(e)&&e.rateLimitType!==void 0&&n.includes(e.rateLimitType)}function hbe(){return t(hr(),rE())}function Tst(){zE({agentId:Ze(),mode:"prompt",priority:"later",value:i,uuid:o(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{qoe,f4e,p6t,hbe,Tst};
