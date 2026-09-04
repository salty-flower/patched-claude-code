// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Ze,rd,$n}from"./chunk-yhfssb7x.js";import{bt,Tt,Pn,Kn,dE}from"./chunk-vtwn1md5.js";import{bp}from"./chunk-wg76fyda.js";import{ob}from"./chunk-5e9qk3ys.js";import{FLt}from"./chunk-rrbmvjw6.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function grn(){return Tt()&&Pn()?.billingType!=="usage_based"&&bp()&&rd()&&!$n()&&!bt()}function hce(e){return grn()&&FLt(e)&&e.rateLimitType==="five_hour"}function mlt(){switch(Kn()){case"pro":return"pro";case"max":switch(dE()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function k3e(){ob({agentId:Ze(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{grn,hce,mlt,k3e};
