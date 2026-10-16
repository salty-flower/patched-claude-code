// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{k,Ae,ue}from"./chunk-1901fdh6.js";import{S,pe}from"./chunk-dnq93t1z.js";import{i}from"./chunk-52pf9qag.js";import{mg}from"./chunk-fbw24n5y.js";import{me,In}from"./chunk-61p68esv.js";import{f2}from"./chunk-sgnw53ce.js";function r2r(u,{requireOnboarding:n=!0}={}){let o=ue();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!k("tengu_maple_pier",!0))return null;let e=me("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>me(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&f2(u))return e;return null}function o2r(u,n,o){if(ue().hasSeenAutoDefaultNudge)return;let e=mg(n.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:pe(e),surface:S("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")In("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:S(t),outcome:t==="accept"?S("switched"):S("declined"),current_mode:pe(e),surface:S("ide")})}
export{r2r,o2r};
