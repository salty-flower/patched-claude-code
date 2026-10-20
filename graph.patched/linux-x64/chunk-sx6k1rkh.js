// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Sr}from"./chunk-jbgr14ef.js";import{a}from"./chunk-cd1a8ced.js";import{Su}from"./chunk-k6w93v2g.js";function dp(){return Su().backgroundTasksDisabled||Age()}function Age(){return a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||Sr()}function Kht(){let n=Su();return n.backgroundTasksDisabled&&!n.backgroundShellsKeptElsewhere||Age()}function Vht(){let n=Su();return n.backgroundTasksDisabled&&n.backgroundLaunchRule===void 0||n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||Sr()}function Bte(){return dp()||Su().backgroundAgentLaunchDisabled}function qht(){let n=Su();if(!n.foregroundAgentMovesAdmitted)return Bte();return n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||Sr()}function I2s(){let n=Su();return n.backgroundLaunchRule!==void 0&&!n.backgroundLaunchByDefault&&!Vht()}function icn(){return Su().backgroundLaunchByDefault&&!Vht()}
export{dp,Age,Kht,Vht,Bte,qht,I2s,icn};
