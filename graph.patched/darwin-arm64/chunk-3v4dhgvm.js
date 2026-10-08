// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{kl}from"./chunk-fq1mqfzx.js";function $Lo(e){return()=>{let n=e(),t=kl();return t.disconnectedAnswerCount++,t.disconnectedAnswerTexts.add(n),n}}function wDr(){return kl().disconnectedAnswerCount}function ULo(e){return kl().disconnectedAnswerTexts.has(e)}function yNt(){let e=kl();return e.disconnectedAnswerCount>0||e.notConnectedSeenByPriorWorker}function BLo(){kl().notConnectedSeenByPriorWorker=!0}
export{$Lo,wDr,ULo,yNt,BLo};
