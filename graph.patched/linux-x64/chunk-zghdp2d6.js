// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{br}from"./chunk-4z5wz91m.js";import{a}from"./chunk-rptge3r8.js";import{tk}from"./chunk-89sgksq8.js";function bd(){return tk().backgroundTasksDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||br()}function rmr(){let n=tk();return n.backgroundTasksDisabled&&n.backgroundLaunchRule===void 0||n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||br()}function sne(){return bd()||tk().backgroundAgentLaunchDisabled}function Mcs(){return tk().backgroundLaunchRule!==void 0&&!rmr()}
export{bd,rmr,sne,Mcs};
