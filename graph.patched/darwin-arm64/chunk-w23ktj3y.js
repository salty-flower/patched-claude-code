// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{qe,jd,Vn}from"./chunk-s8xs8s76.js";import{Jl}from"./chunk-m9hfdm3b.js";import{pt,xn,Xn,Xk,At}from"./chunk-twxt3h9y.js";import{xE}from"./chunk-h3bc7dkc.js";import{xW}from"./chunk-8hkr03zv.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function dYe(){return pt()&&xn()?.billingType!=="usage_based"&&Jl()&&jd()&&!Vn()&&!At()}function MX(e){return dYe()&&xW(e)&&e.rateLimitType==="five_hour"}var r=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function U2t(e){return dYe()&&xW(e)&&e.rateLimitType!==void 0&&r.includes(e.rateLimitType)}function uYe(){switch(Xn()){case"pro":return"pro";case"max":switch(Xk()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function D1e(){xE({agentId:qe(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{dYe,MX,U2t,uYe,D1e};
