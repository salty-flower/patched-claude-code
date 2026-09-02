// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{et,Wu,Fn}from"./chunk-30zk17wm.js";import{Ht,wt,Pn,Nn,mH}from"./chunk-1e5y3pjf.js";import{Vg}from"./chunk-4n7ktjmt.js";import{gE}from"./chunk-h6btyxas.js";import{oxt}from"./chunk-n8nmdgpp.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function BJt(){return wt()&&Pn()?.billingType!=="usage_based"&&Vg()&&Wu()&&!Fn()&&!Ht()}function gse(e){return BJt()&&oxt(e)&&e.rateLimitType==="five_hour"}function Wnt(){switch(Nn()){case"pro":return"pro";case"max":switch(mH()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function bje(){gE({agentId:et(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{BJt,gse,Wnt,bje};
