// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ze,Sp,Un}from"./chunk-xzypj06m.js";import{xa}from"./chunk-nvk7bh0e.js";import{kt,vn,vr,FA,Ut}from"./chunk-1901fdh6.js";import{KO,pA}from"./chunk-996thspe.js";import{randomUUID as o}from"crypto";function t(e,r){switch(e){case"pro":return"pro";case"max":switch(r){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}var i="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function Ekt(){return kt()&&vn()?.billingType!=="usage_based"&&xa()&&Sp()&&!Un()&&!Ut()}function bVe(e){return Ekt()&&KO(e)&&e.rateLimitType==="five_hour"}var n=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function ZCn(e){return Ekt()&&KO(e)&&e.rateLimitType!==void 0&&n.includes(e.rateLimitType)}function wVe(){return t(vr(),FA())}function Mrt(){pA({agentId:Ze(),mode:"prompt",priority:"later",value:i,uuid:o(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{Ekt,bVe,ZCn,wVe,Mrt};
