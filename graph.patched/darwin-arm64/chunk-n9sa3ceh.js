// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{rt,wu,Ln}from"./chunk-g4zaymy2.js";import{bt,St,In,An,AS}from"./chunk-ghnc2x4f.js";import{A_}from"./chunk-2d75qem6.js";import{vw}from"./chunk-j5h9ds58.js";import{$kt}from"./chunk-9yh64pnd.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function lVt(){return St()&&In()?.billingType!=="usage_based"&&A_()&&wu()&&!Ln()&&!bt()}function poe(e){return lVt()&&$kt(e)&&e.rateLimitType==="five_hour"}function jet(){switch(An()){case"pro":return"pro";case"max":switch(AS()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function a2e(){vw({agentId:rt(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{lVt,poe,jet,a2e};
