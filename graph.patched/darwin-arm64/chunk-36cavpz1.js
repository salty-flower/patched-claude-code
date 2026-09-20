// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{P,Ae,ie}from"./chunk-g4c6ggz4.js";import{S,he}from"./chunk-k6smmjsm.js";import{i}from"./chunk-jxv3x25k.js";import{um}from"./chunk-a38xyc22.js";import{ye,tn}from"./chunk-k515hq0v.js";import{a$}from"./chunk-1epjrn9h.js";function kwn(u,{requireOnboarding:r=!0}={}){let o=ie();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!P("tengu_maple_pier",!1))return null;let e=ye("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>ye(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&a$(u))return e;return null}function Rwn(u,r,o){if(ie().hasSeenAutoDefaultNudge)return;let e=um(r.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:he(e),surface:S("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")tn("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:S(t),outcome:t==="accept"?S("switched"):S("declined"),current_mode:he(e),surface:S("ide")})}
export{kwn,Rwn};
