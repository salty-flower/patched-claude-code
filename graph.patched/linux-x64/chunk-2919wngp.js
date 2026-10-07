// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{kr}from"./chunk-bpkzpttw.js";import{a}from"./chunk-869zfth6.js";import{kk}from"./chunk-55tfcetn.js";function wd(){return kk().backgroundTasksDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||kr()}function _ar(){let n=kk();return n.backgroundTasksDisabled&&n.backgroundLaunchRule===void 0||n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||kr()}function Mee(){return wd()||kk().backgroundAgentLaunchDisabled}function XZo(){return kk().backgroundLaunchRule!==void 0&&!_ar()}
export{wd,_ar,Mee,XZo};
