// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Ze,Fu,On}from"./chunk-kpqr86hf.js";import{sa}from"./chunk-gsezw0ay.js";import{kt,mn,gr,ov,Ft}from"./chunk-bvn0epzr.js";import{BT,Vv}from"./chunk-na9nw575.js";import{randomUUID as o}from"crypto";function t(e,r){switch(e){case"pro":return"pro";case"max":switch(r){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}var i="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function tse(){return kt()&&mn()?.billingType!=="usage_based"&&sa()&&Fu()&&!On()&&!Ft()}function bqe(e){return tse()&&BT(e)&&e.rateLimitType==="five_hour"}var n=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function w4t(e){return tse()&&BT(e)&&e.rateLimitType!==void 0&&n.includes(e.rateLimitType)}function wSe(){return t(gr(),ov())}function xst(){Vv({agentId:Ze(),mode:"prompt",priority:"later",value:i,uuid:o(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{tse,bqe,w4t,wSe,xst};
