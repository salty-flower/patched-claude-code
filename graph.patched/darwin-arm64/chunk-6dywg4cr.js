// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{W,Ln}from"./chunk-g4zaymy2.js";import{a}from"./chunk-bn8q5mbz.js";import{Ia,oe}from"./chunk-ghnc2x4f.js";import{_e}from"./chunk-jz0pchtb.js";import{uG}from"./chunk-s6dvae69.js";import{mB}from"./chunk-mnxdc598.js";import{ZT}from"./chunk-j5h9ds58.js";var oEt="Auto mode is now Claude Code's default permission mode.",iEt="Auto mode lets Claude handle permission prompts automatically. Claude checks each tool call for risky actions and prompt injection before executing, runs the ones it assesses as lower-risk, and blocks the rest.",cpe="https://code.claude.com/docs/en/permission-modes";function PEe(e){let o=oe();return mB()&&e==="auto"&&!uG(W().host)&&!Ia()&&!Ln()&&!a.CLAUDE_BRIDGE_REATTACH_SESSION&&ZT()&&o.hasCompletedOnboarding===!0&&!o.hasSeenAutoDefaultNotice}function Nzt(){return!["policySettings","userSettings","flagSettings"].some((o)=>_e(o)?.skipAutoPermissionPrompt===!0)&&!oe().hasSeenAutoModeEntryWarning}
export{oEt,iEt,cpe,PEe,Nzt};
