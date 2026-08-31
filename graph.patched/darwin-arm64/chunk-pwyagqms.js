// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{G,$n}from"./chunk-38213y7h.js";import{a}from"./chunk-w3k8bej2.js";import{nl,oe}from"./chunk-bsdtxcdc.js";import{ye}from"./chunk-cx07awjk.js";import{_K}from"./chunk-s8ntz0t7.js";import{s6}from"./chunk-nd2stzp2.js";import{hE}from"./chunk-fy12d89p.js";var gkt="Auto mode is now Claude Code's default permission mode.",hkt="Auto mode lets Claude handle permission prompts automatically. Claude checks each tool call for risky actions and prompt injection before executing, runs the ones it assesses as lower-risk, and blocks the rest.",Kme="https://code.claude.com/docs/en/permission-modes";function ERe(e){let o=oe();return s6()&&e==="auto"&&!_K(G().host)&&!nl()&&!$n()&&!a.CLAUDE_BRIDGE_REATTACH_SESSION&&hE()&&o.hasCompletedOnboarding===!0&&!o.hasSeenAutoDefaultNotice}function i7t(){return!["policySettings","userSettings","flagSettings"].some((o)=>ye(o)?.skipAutoPermissionPrompt===!0)&&!oe().hasSeenAutoModeEntryWarning}
export{gkt,hkt,Kme,ERe,i7t};
