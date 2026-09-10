// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{H,Ae,ne}from"./chunk-vryy7b5x.js";import{_,Ee}from"./chunk-jxvdfgn0.js";import{i}from"./chunk-mx473n83.js";import{_e,Qt}from"./chunk-ja8knfm8.js";import{of}from"./chunk-e3rr1gh2.js";import{XM}from"./chunk-yg1vwxpv.js";function knn(u,{requireOnboarding:r=!0}={}){let o=ne();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!H("tengu_maple_pier",!1))return null;let e=_e("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>_e(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&XM(u))return e;return null}function Rnn(u,r,o){if(ne().hasSeenAutoDefaultNudge)return;let e=of(r.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:Ee(e),surface:_("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")Qt("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:_(t),outcome:t==="accept"?_("switched"):_("declined"),current_mode:Ee(e),surface:_("ide")})}
export{knn,Rnn};
