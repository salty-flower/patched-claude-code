// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{x,He,ee}from"./chunk-3e93vkg3.js";import{S,we}from"./chunk-vx4qhc14.js";import{i}from"./chunk-skkcgpsw.js";import{he,Qt}from"./chunk-33bqb969.js";import{ap}from"./chunk-hvd71q4d.js";import{_$}from"./chunk-2bfrtnaa.js";function MXt(u,{requireOnboarding:r=!0}={}){let o=ee();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!x("tengu_maple_pier",!1))return null;let e=he("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>he(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&_$(u))return e;return null}function OXt(u,r,o){if(ee().hasSeenAutoDefaultNudge)return;let e=ap(r.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:we(e),surface:S("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")Qt("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);He((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:S(t),outcome:t==="accept"?S("switched"):S("declined"),current_mode:we(e),surface:S("ide")})}
export{MXt,OXt};
