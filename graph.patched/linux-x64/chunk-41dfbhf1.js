// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{k,Ae,ue}from"./chunk-7p6jp6kj.js";import{b,de}from"./chunk-m3epja3j.js";import{i}from"./chunk-sr4gfmny.js";import{Ig}from"./chunk-yb4qaat4.js";import{me,Ln}from"./chunk-merbp8kx.js";import{jG}from"./chunk-7nbwk7rn.js";function l4r(u,{requireOnboarding:n=!0}={}){let o=ue();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!k("tengu_maple_pier",!0))return null;let e=me("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>me(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&jG(u))return e;return null}function d4r(u,n,o){if(ue().hasSeenAutoDefaultNudge)return;let e=Ig(n.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:de(e),surface:b("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")Ln("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:b(t),outcome:t==="accept"?b("switched"):b("declined"),current_mode:de(e),surface:b("ide")})}
export{l4r,d4r};
