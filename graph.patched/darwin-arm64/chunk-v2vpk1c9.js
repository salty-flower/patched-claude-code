// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{C,Ae,ce}from"./chunk-gcyvvtkw.js";import{S,ue}from"./chunk-eak61y8v.js";import{i}from"./chunk-ne43gjnt.js";import{Xm}from"./chunk-5g70wphz.js";import{me,Sn}from"./chunk-48by85wp.js";import{wB}from"./chunk-vg0f9ex4.js";function VAr(u,{requireOnboarding:n=!0}={}){let o=ce();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!C("tengu_maple_pier",!0))return null;let e=me("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>me(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&wB(u))return e;return null}function qAr(u,n,o){if(ce().hasSeenAutoDefaultNudge)return;let e=Xm(n.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:ue(e),surface:S("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")Sn("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:S(t),outcome:t==="accept"?S("switched"):S("declined"),current_mode:ue(e),surface:S("ide")})}
export{VAr,qAr};
