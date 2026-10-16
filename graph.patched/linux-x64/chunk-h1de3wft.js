// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ta}from"./chunk-s5z0amze.js";function PQo(e){return()=>{let n=e(),t=ta();return t.disconnectedAnswerCount++,t.disconnectedAnswerTexts.add(n),n}}function J5r(){return ta().disconnectedAnswerCount}function jEn(e){return ta().disconnectedAnswerTexts.has(e)}function yKt(){let e=ta();return e.disconnectedAnswerCount>0||e.notConnectedSeenByPriorWorker}function IQo(){ta().notConnectedSeenByPriorWorker=!0}
export{PQo,J5r,jEn,yKt,IQo};
