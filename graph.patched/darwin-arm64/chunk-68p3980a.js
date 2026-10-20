// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{_r}from"./chunk-jrcdjayr.js";import{a}from"./chunk-h422gpw8.js";import{wu}from"./chunk-ts26kr2k.js";function dp(){return wu().backgroundTasksDisabled||Tge()}function Tge(){return a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||_r()}function Uht(){let n=wu();return n.backgroundTasksDisabled&&!n.backgroundShellsKeptElsewhere||Tge()}function Bht(){let n=wu();return n.backgroundTasksDisabled&&n.backgroundLaunchRule===void 0||n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||_r()}function jte(){return dp()||wu().backgroundAgentLaunchDisabled}function jht(){let n=wu();if(!n.foregroundAgentMovesAdmitted)return jte();return n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||_r()}function Lzs(){let n=wu();return n.backgroundLaunchRule!==void 0&&!n.backgroundLaunchByDefault&&!Bht()}function Jdn(){return wu().backgroundLaunchByDefault&&!Bht()}
export{dp,Tge,Uht,Bht,jte,jht,Lzs,Jdn};
