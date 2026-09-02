// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{W,Fn}from"./chunk-30zk17wm.js";import{a}from"./chunk-m9gbfvns.js";import{nl,oe}from"./chunk-1e5y3pjf.js";import{_e}from"./chunk-30zpf1a7.js";import{m3}from"./chunk-1syw0gax.js";import{r2}from"./chunk-3y15mnnx.js";import{hE}from"./chunk-h6btyxas.js";var gCt="Auto mode is now Claude Code's default permission mode.",hCt="Auto mode lets Claude handle permission prompts automatically. Claude checks each tool call for risky actions and prompt injection before executing, runs the ones it assesses as lower-risk, and blocks the rest.",Gme="https://code.claude.com/docs/en/permission-modes";function HTe(e){let o=oe();return r2()&&e==="auto"&&!m3(W().host)&&!nl()&&!Fn()&&!a.CLAUDE_BRIDGE_REATTACH_SESSION&&hE()&&o.hasCompletedOnboarding===!0&&!o.hasSeenAutoDefaultNotice}function rYt(){return!["policySettings","userSettings","flagSettings"].some((o)=>_e(o)?.skipAutoPermissionPrompt===!0)&&!oe().hasSeenAutoModeEntryWarning}
export{gCt,hCt,Gme,HTe,rYt};
