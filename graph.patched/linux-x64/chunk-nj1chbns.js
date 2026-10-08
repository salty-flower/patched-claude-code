// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{T,Ae,ce}from"./chunk-cxjvwxsa.js";import{b,ue}from"./chunk-bkr1h20c.js";import{i}from"./chunk-nayw0pf7.js";import{Xm}from"./chunk-5zqw5ss6.js";import{me,bn}from"./chunk-gsa86a2x.js";import{c1}from"./chunk-38gbh28d.js";function vAr(u,{requireOnboarding:n=!0}={}){let o=ce();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!T("tengu_maple_pier",!0))return null;let e=me("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>me(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&c1(u))return e;return null}function EAr(u,n,o){if(ce().hasSeenAutoDefaultNudge)return;let e=Xm(n.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:ue(e),surface:b("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")bn("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:b(t),outcome:t==="accept"?b("switched"):b("declined"),current_mode:ue(e),surface:b("ide")})}
export{vAr,EAr};
