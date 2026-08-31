// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{I,Ae,oe}from"./chunk-bsdtxcdc.js";import{w,ke}from"./chunk-9rhc0mtn.js";import{s}from"./chunk-qw5jhqey.js";import{ye,rn}from"./chunk-cx07awjk.js";import{Of}from"./chunk-af80z9sa.js";import{Fj}from"./chunk-txafc9j6.js";function n8t(u,{requireOnboarding:r=!0}={}){let o=oe();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!I("tengu_maple_pier",!1))return null;let e=ye("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>ye(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&Fj(u))return e;return null}function r8t(u,r,o){if(oe().hasSeenAutoDefaultNudge)return;let e=Of(r.current_mode);if(u==="shown"){s("tengu_auto_default_nudge_shown",{current_mode:ke(e),surface:w("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")rn("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),s("tengu_auto_default_nudge_resolved",{choice:w(t),outcome:t==="accept"?w("switched"):w("declined"),current_mode:ke(e),surface:w("ide")})}
export{n8t,r8t};
