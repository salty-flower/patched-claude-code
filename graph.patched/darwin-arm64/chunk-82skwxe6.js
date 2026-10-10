// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{rl}from"./chunk-vmgyazz0.js";function HWo(e){return()=>{let n=e(),t=rl();return t.disconnectedAnswerCount++,t.disconnectedAnswerTexts.add(n),n}}function uBr(){return rl().disconnectedAnswerCount}function MWo(e){return rl().disconnectedAnswerTexts.has(e)}function q1t(){let e=rl();return e.disconnectedAnswerCount>0||e.notConnectedSeenByPriorWorker}function DWo(){rl().notConnectedSeenByPriorWorker=!0}
export{HWo,uBr,MWo,q1t,DWo};
