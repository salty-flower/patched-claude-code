// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{qe,yu,$n}from"./chunk-sgyvc67j.js";import{_t,gt,Pn,jn,PA}from"./chunk-e02s7cks.js";import{nd}from"./chunk-xsncbnja.js";import{d_}from"./chunk-e55d0yhx.js";import{a$t}from"./chunk-jzyf086v.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function eln(){return gt()&&Pn()?.billingType!=="usage_based"&&nd()&&yu()&&!$n()&&!_t()}function pde(e){return eln()&&a$t(e)&&e.rateLimitType==="five_hour"}function _pt(){switch(jn()){case"pro":return"pro";case"max":switch(PA()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function $4e(){d_({agentId:qe(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{eln,pde,_pt,$4e};
