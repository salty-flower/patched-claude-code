// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Sr}from"./chunk-21mz1tvc.js";import{i}from"./chunk-9a41hw1t.js";import{wp}from"./chunk-4y48t4gh.js";function sf(){return wp().backgroundTasksDisabled||C_e()}function C_e(){return i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||Sr()}function zDe(){let n=wp();return n.backgroundTasksDisabled&&!n.backgroundShellsKeptElsewhere||C_e()}function eEt(){let n=wp();return n.backgroundTasksDisabled&&n.backgroundLaunchRule===void 0||n.backgroundAgentLaunchDisabled||i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||Sr()}function hoe(){return sf()||wp().backgroundAgentLaunchDisabled}function tEt(){let n=wp();if(!n.foregroundAgentMovesAdmitted)return hoe();return n.backgroundAgentLaunchDisabled||i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||Sr()}function OZs(){let n=wp();return n.backgroundLaunchRule!==void 0&&!n.backgroundLaunchByDefault&&!eEt()}function ryn(){return wp().backgroundLaunchByDefault&&!eEt()}
export{sf,C_e,zDe,eEt,hoe,tEt,OZs,ryn};
