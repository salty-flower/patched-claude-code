// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{El}from"./chunk-p4arm49b.js";function eLo(e){return()=>{let n=e(),t=El();return t.disconnectedAnswerCount++,t.disconnectedAnswerTexts.add(n),n}}function zDr(){return El().disconnectedAnswerCount}function tLo(e){return El().disconnectedAnswerTexts.has(e)}function eNt(){let e=El();return e.disconnectedAnswerCount>0||e.notConnectedSeenByPriorWorker}function nLo(){El().notConnectedSeenByPriorWorker=!0}
export{eLo,zDr,tLo,eNt,nLo};
