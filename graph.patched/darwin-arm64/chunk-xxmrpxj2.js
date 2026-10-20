// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Ii}from"./chunk-ya3ga87d.js";function yms(e){return()=>{let n=e(),t=Ii();return t.disconnectedAnswerCount++,t.disconnectedAnswerTexts.add(n),n}}function dao(){return Ii().disconnectedAnswerCount}function RMn(e){return Ii().disconnectedAnswerTexts.has(e)}function H8t(){let e=Ii();return e.disconnectedAnswerCount>0||e.notConnectedSeenByPriorWorker}function _ms(){Ii().notConnectedSeenByPriorWorker=!0}
export{yms,dao,RMn,H8t,_ms};
