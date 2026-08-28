// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{x,be,oe}from"./chunk-ghnc2x4f.js";import{v,Re}from"./chunk-jqgad8sa.js";import{s}from"./chunk-3jdapt8v.js";import{_e,zt}from"./chunk-jz0pchtb.js";import{uf}from"./chunk-c5jf7pfc.js";import{_G}from"./chunk-mgty09k6.js";function LWt(u,{requireOnboarding:r=!0}={}){let o=oe();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!x("tengu_maple_pier",!1))return null;let e=_e("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>_e(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&_G(u))return e;return null}function MWt(u,r,o){if(oe().hasSeenAutoDefaultNudge)return;let e=uf(r.current_mode);if(u==="shown"){s("tengu_auto_default_nudge_shown",{current_mode:Re(e),surface:v("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")zt("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);be((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),s("tengu_auto_default_nudge_resolved",{choice:v(t),outcome:t==="accept"?v("switched"):v("declined"),current_mode:Re(e),surface:v("ide")})}
export{LWt,MWt};
