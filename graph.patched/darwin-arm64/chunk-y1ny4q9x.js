// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{gr}from"./chunk-6dw7xt0q.js";import{a}from"./chunk-k4g6y57j.js";import{mm}from"./chunk-5kvhbyg2.js";function Qu(){return mm().backgroundTasksDisabled||IBe()}function IBe(){return a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||gr()}function nmt(){let n=mm();return n.backgroundTasksDisabled&&!n.backgroundShellsKeptElsewhere||IBe()}function rmt(){let n=mm();return n.backgroundTasksDisabled&&n.backgroundLaunchRule===void 0||n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||gr()}function Wee(){return Qu()||mm().backgroundAgentLaunchDisabled}function omt(){let n=mm();if(!n.foregroundAgentMovesAdmitted)return Wee();return n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||gr()}function PNs(){let n=mm();return n.backgroundLaunchRule!==void 0&&!n.backgroundLaunchByDefault&&!rmt()}function jsn(){return mm().backgroundLaunchByDefault&&!rmt()}
export{Qu,IBe,nmt,rmt,Wee,omt,PNs,jsn};
