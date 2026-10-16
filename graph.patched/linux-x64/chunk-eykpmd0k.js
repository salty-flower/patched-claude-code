// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{br}from"./chunk-c61xdsy8.js";import{a}from"./chunk-xwn0mfnc.js";import{mm}from"./chunk-vnekd4yc.js";function Qu(){return mm().backgroundTasksDisabled||x1e()}function x1e(){return a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||br()}function amt(){let n=mm();return n.backgroundTasksDisabled&&!n.backgroundShellsKeptElsewhere||x1e()}function lmt(){let n=mm();return n.backgroundTasksDisabled&&n.backgroundLaunchRule===void 0||n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||br()}function Fee(){return Qu()||mm().backgroundAgentLaunchDisabled}function dmt(){let n=mm();if(!n.foregroundAgentMovesAdmitted)return Fee();return n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||br()}function kNs(){let n=mm();return n.backgroundLaunchRule!==void 0&&!n.backgroundLaunchByDefault&&!lmt()}function qsn(){return mm().backgroundLaunchByDefault&&!lmt()}
export{Qu,x1e,amt,lmt,Fee,dmt,kNs,qsn};
