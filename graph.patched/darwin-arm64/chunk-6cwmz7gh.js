// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{k,Re,ue}from"./chunk-27xjmczp.js";import{S,ce}from"./chunk-ydpbzmt4.js";import{a}from"./chunk-wq923bwc.js";import{ph}from"./chunk-8zvzpa8h.js";import{fe,Un}from"./chunk-32v5ghb4.js";import{i6}from"./chunk-rjzvrqhh.js";function VZr(u,{requireOnboarding:n=!0}={}){let o=ue();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!k("tengu_maple_pier",!0))return null;let e=fe("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>fe(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&i6(u))return e;return null}function KZr(u,n,o){if(ue().hasSeenAutoDefaultNudge)return;let e=ph(n.current_mode);if(u==="shown"){a("tengu_auto_default_nudge_shown",{current_mode:ce(e),surface:S("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")Un("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Re((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),a("tengu_auto_default_nudge_resolved",{choice:S(t),outcome:t==="accept"?S("switched"):S("declined"),current_mode:ce(e),surface:S("ide")})}
export{VZr,KZr};
