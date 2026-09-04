// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{P,Te,ie}from"./chunk-vtwn1md5.js";import{b,ke}from"./chunk-g1553wr3.js";import{s}from"./chunk-v5cr82c7.js";import{be,nn}from"./chunk-03hrg0m9.js";import{Tf}from"./chunk-ajwm72ve.js";import{p9}from"./chunk-1kd8qbpm.js";function NZt(u,{requireOnboarding:r=!0}={}){let o=ie();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!P("tengu_maple_pier",!1))return null;let e=be("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>be(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&p9(u))return e;return null}function FZt(u,r,o){if(ie().hasSeenAutoDefaultNudge)return;let e=Tf(r.current_mode);if(u==="shown"){s("tengu_auto_default_nudge_shown",{current_mode:ke(e),surface:b("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")nn("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Te((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),s("tengu_auto_default_nudge_resolved",{choice:b(t),outcome:t==="accept"?b("switched"):b("declined"),current_mode:ke(e),surface:b("ide")})}
export{NZt,FZt};
