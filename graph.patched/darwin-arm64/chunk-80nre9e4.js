// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{pr}from"./chunk-nqc6v990.js";import{a}from"./chunk-yvnhkg35.js";import{Zh}from"./chunk-ezerben3.js";function Rd(){return Zh().backgroundTasksDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||pr()}function LPt(){let n=Zh();return n.backgroundTasksDisabled&&n.backgroundLaunchRule===void 0||n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||pr()}function aQ(){return Rd()||Zh().backgroundAgentLaunchDisabled}function Qat(){let n=Zh();if(!n.foregroundAgentMovesAdmitted)return aQ();return n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||pr()}function uws(){return Zh().backgroundLaunchRule!==void 0&&!LPt()}
export{Rd,LPt,aQ,Qat,uws};
