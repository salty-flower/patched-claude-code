// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{z,Mn}from"./chunk-2vv5hpw3.js";import{a}from"./chunk-g0kfvhx3.js";import{Ia,oe}from"./chunk-ns0ekkj0.js";import{be}from"./chunk-bcez0qfh.js";import{s6}from"./chunk-z3rc96qw.js";import{dU}from"./chunk-g9sznyaw.js";import{QE}from"./chunk-hrvkymct.js";var uAt="Auto mode is now Claude Code's default permission mode.",dAt="Auto mode lets Claude handle permission prompts automatically. Claude checks each tool call for risky actions and prompt injection before executing, runs the ones it assesses as lower-risk, and blocks the rest.",lpe="https://code.claude.com/docs/en/permission-modes";function DAe(e){let o=oe();return dU()&&e==="auto"&&!s6(z().host)&&!Ia()&&!Mn()&&!a.CLAUDE_BRIDGE_REATTACH_SESSION&&QE()&&o.hasCompletedOnboarding===!0&&!o.hasSeenAutoDefaultNotice}function Bqt(){return!["policySettings","userSettings","flagSettings"].some((o)=>be(o)?.skipAutoPermissionPrompt===!0)&&!oe().hasSeenAutoModeEntryWarning}
export{uAt,dAt,lpe,DAe,Bqt};
