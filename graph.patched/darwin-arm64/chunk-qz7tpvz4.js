// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{qe,fp,Fn}from"./chunk-vd0a9d2s.js";import{Sl}from"./chunk-fsnz81vy.js";import{_t,Mn,dr,lk,Lt}from"./chunk-gcyvvtkw.js";import{aN,Ik}from"./chunk-nwqfvmza.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function Rft(){return _t()&&Mn()?.billingType!=="usage_based"&&Sl()&&fp()&&!Fn()&&!Lt()}function Koe(e){return Rft()&&aN(e)&&e.rateLimitType==="five_hour"}var r=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function jdn(e){return Rft()&&aN(e)&&e.rateLimitType!==void 0&&r.includes(e.rateLimitType)}function xft(){switch(dr()){case"pro":return"pro";case"max":switch(lk()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function RYe(){Ik({agentId:qe(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{Rft,Koe,jdn,xft,RYe};
