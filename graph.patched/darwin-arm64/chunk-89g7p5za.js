// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Xe,Op,jn}from"./chunk-4bw62nzm.js";import{Aa}from"./chunk-kvz2ymff.js";import{wt,Hn,Sr,jA,Nt}from"./chunk-bk5ct2gw.js";import{vI,bA}from"./chunk-sfn1dbxq.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function Cyt(){return wt()&&Hn()?.billingType!=="usage_based"&&Aa()&&Op()&&!jn()&&!Nt()}function z2e(e){return Cyt()&&vI(e)&&e.rateLimitType==="five_hour"}var r=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function Dhn(e){return Cyt()&&vI(e)&&e.rateLimitType!==void 0&&r.includes(e.rateLimitType)}function V2e(){switch(Sr()){case"pro":return"pro";case"max":switch(jA()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function VJe(){bA({agentId:Xe(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{Cyt,z2e,Dhn,V2e,VJe};
