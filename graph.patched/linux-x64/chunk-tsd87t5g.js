// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{x,Ae,oe}from"./chunk-1e5y3pjf.js";import{H,Ce}from"./chunk-r1b219q3.js";import{s}from"./chunk-yqfv1yd3.js";import{_e,rn}from"./chunk-30zpf1a7.js";import{Dp}from"./chunk-s5z7wmv7.js";import{$z}from"./chunk-9krjv0tt.js";function S6t(u,{requireOnboarding:r=!0}={}){let o=oe();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!x("tengu_maple_pier",!1))return null;let e=_e("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>_e(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&$z(u))return e;return null}function H6t(u,r,o){if(oe().hasSeenAutoDefaultNudge)return;let e=Dp(r.current_mode);if(u==="shown"){s("tengu_auto_default_nudge_shown",{current_mode:Ce(e),surface:H("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")rn("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),s("tengu_auto_default_nudge_resolved",{choice:H(t),outcome:t==="accept"?H("switched"):H("declined"),current_mode:Ce(e),surface:H("ide")})}
export{S6t,H6t};
