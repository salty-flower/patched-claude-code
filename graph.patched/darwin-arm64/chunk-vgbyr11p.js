// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{vr}from"./chunk-xbg4a11x.js";import{a}from"./chunk-j77txbjn.js";import{TC}from"./chunk-22q28ds2.js";function wd(){return TC().backgroundTasksDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||vr()}function Uar(){let n=TC();return n.backgroundTasksDisabled&&n.backgroundLaunchRule===void 0||n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||vr()}function Uee(){return wd()||TC().backgroundAgentLaunchDisabled}function Mes(){return TC().backgroundLaunchRule!==void 0&&!Uar()}
export{wd,Uar,Uee,Mes};
