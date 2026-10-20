// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{k,Te,ue}from"./chunk-bvn0epzr.js";import{S,de}from"./chunk-ny2cqbmq.js";import{i}from"./chunk-dj0gyv94.js";import{Ig}from"./chunk-x9kh8z5w.js";import{me,Ln}from"./chunk-qwytg6a7.js";import{J2}from"./chunk-gs8h5etb.js";function Dqr(u,{requireOnboarding:n=!0}={}){let o=ue();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!k("tengu_maple_pier",!0))return null;let e=me("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>me(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&J2(u))return e;return null}function Lqr(u,n,o){if(ue().hasSeenAutoDefaultNudge)return;let e=Ig(n.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:de(e),surface:S("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")Ln("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Te((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:S(t),outcome:t==="accept"?S("switched"):S("declined"),current_mode:de(e),surface:S("ide")})}
export{Dqr,Lqr};
