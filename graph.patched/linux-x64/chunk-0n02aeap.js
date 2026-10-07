// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ge,ep,jn}from"./chunk-aywwjcwq.js";import{al}from"./chunk-9dnqpecd.js";import{mt,Ln,mr,FE,Ht}from"./chunk-m0sj7y8g.js";import{lk}from"./chunk-9wqh5j7s.js";import{vB}from"./chunk-dkj79ssj.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function edt(){return mt()&&Ln()?.billingType!=="usage_based"&&al()&&ep()&&!jn()&&!Ht()}function fre(e){return edt()&&vB(e)&&e.rateLimitType==="five_hour"}var r=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function Zsn(e){return edt()&&vB(e)&&e.rateLimitType!==void 0&&r.includes(e.rateLimitType)}function tdt(){switch(mr()){case"pro":return"pro";case"max":switch(FE()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function kYe(){lk({agentId:Ge(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{edt,fre,Zsn,tdt,kYe};
