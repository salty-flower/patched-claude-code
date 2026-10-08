// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{yr}from"./chunk-ce4b81xm.js";import{a}from"./chunk-70qqbqq4.js";import{ok}from"./chunk-y54dhc9s.js";function bd(){return ok().backgroundTasksDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||yr()}function kmr(){let n=ok();return n.backgroundTasksDisabled&&n.backgroundLaunchRule===void 0||n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||yr()}function une(){return bd()||ok().backgroundAgentLaunchDisabled}function yds(){return ok().backgroundLaunchRule!==void 0&&!kmr()}
export{bd,kmr,une,yds};
