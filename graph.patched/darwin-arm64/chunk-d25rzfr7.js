// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{tt,zc,Pn}from"./chunk-ersar6wn.js";import{Qs}from"./chunk-psq3t7gj.js";import{vt,gn,or,iT,Ut}from"./chunk-27xjmczp.js";import{$A,Mk}from"./chunk-31gxg38t.js";import{randomUUID as o}from"crypto";function t(e,r){switch(e){case"pro":return"pro";case"max":switch(r){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}var i="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function Cae(){return vt()&&gn()?.billingType!=="usage_based"&&Qs()&&zc()&&!Pn()&&!Ut()}function O9e(e){return Cae()&&$A(e)&&e.rateLimitType==="five_hour"}var n=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function oJt(e){return Cae()&&$A(e)&&e.rateLimitType!==void 0&&n.includes(e.rateLimitType)}function hEe(){return t(or(),iT())}function xct(){Mk({agentId:tt(),mode:"prompt",priority:"later",value:i,uuid:o(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{Cae,O9e,oJt,hEe,xct};
