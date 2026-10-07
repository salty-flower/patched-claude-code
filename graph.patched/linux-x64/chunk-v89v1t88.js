// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{bl}from"./chunk-ddx93fc3.js";function mRo(e){return()=>{let n=e(),t=bl();return t.disconnectedAnswerCount++,t.disconnectedAnswerTexts.add(n),n}}function SRr(){return bl().disconnectedAnswerCount}function gRo(e){return bl().disconnectedAnswerTexts.has(e)}function dHt(){let e=bl();return e.disconnectedAnswerCount>0||e.notConnectedSeenByPriorWorker}function hRo(){bl().notConnectedSeenByPriorWorker=!0}
export{mRo,SRr,gRo,dHt,hRo};
