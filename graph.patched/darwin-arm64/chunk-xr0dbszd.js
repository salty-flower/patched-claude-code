// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{na}from"./chunk-jrxa6de6.js";function hQo(e){return()=>{let n=e(),t=na();return t.disconnectedAnswerCount++,t.disconnectedAnswerTexts.add(n),n}}function x9r(){return na().disconnectedAnswerCount}function dkn(e){return na().disconnectedAnswerTexts.has(e)}function MVt(){let e=na();return e.disconnectedAnswerCount>0||e.notConnectedSeenByPriorWorker}function yQo(){na().notConnectedSeenByPriorWorker=!0}
export{hQo,x9r,dkn,MVt,yQo};
