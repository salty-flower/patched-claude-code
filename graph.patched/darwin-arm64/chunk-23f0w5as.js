// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ze,ep,jn}from"./chunk-8mvda08c.js";import{al}from"./chunk-sac2pmqn.js";import{mt,Ln,cr,jv,Mt}from"./chunk-s46qgfx7.js";import{uC}from"./chunk-y0b3kvx1.js";import{MU}from"./chunk-kxtf34ha.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function udt(){return mt()&&Ln()?.billingType!=="usage_based"&&al()&&ep()&&!jn()&&!Mt()}function wre(e){return udt()&&MU(e)&&e.rateLimitType==="five_hour"}var r=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function _in(e){return udt()&&MU(e)&&e.rateLimitType!==void 0&&r.includes(e.rateLimitType)}function pdt(){switch(cr()){case"pro":return"pro";case"max":switch(jv()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function O5e(){uC({agentId:ze(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{udt,wre,_in,pdt,O5e};
