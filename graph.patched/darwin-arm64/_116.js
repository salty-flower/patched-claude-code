// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{En as p}from"./_117.js";import{dza as d,nza as h}from"./_444.js";import{HKb as m,MKb as g}from"./_581.js";import{Lvc as f,Skc as A,puc as e,vkc as a}from"./_668.js";import{pFc as i,uGc as l}from"./_701.js";import{bad as c}from"./_797.js";import{xad as n}from"./_798.js";import{Jid as s,krd as u,qqd as r}from"./_812.js";u();A();f();c();l();g();h();var D="Auto mode is now Claude Code's default permission mode.",M="Auto mode lets Claude handle permission prompts automatically. Claude checks each tool call for risky actions and prompt injection before executing, runs the ones it assesses as lower-risk, and blocks the rest.",U="https://code.claude.com/docs/en/permission-modes";function k(t){let o=e();return m()&&t==="auto"&&!p(s().host)&&!a()&&!r()&&!n.CLAUDE_BRIDGE_REATTACH_SESSION&&d()&&o.hasCompletedOnboarding===!0&&!o.hasSeenAutoDefaultNotice}function x(){return!["policySettings","userSettings","flagSettings"].some((o)=>i(o)?.skipAutoPermissionPrompt===!0)&&!e().hasSeenAutoModeEntryWarning}
export{D as yn,M as zn,U as An,k as Bn,x as Cn};
