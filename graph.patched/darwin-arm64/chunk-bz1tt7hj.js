// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{P,Te,ie}from"./chunk-h6md7820.js";import{b,He}from"./chunk-2avye5sw.js";import{s}from"./chunk-kzyd0fd4.js";import{be,Qt}from"./chunk-yhqjr2er.js";import{Sf}from"./chunk-5b4s2jqq.js";import{BW}from"./chunk-be2mkxge.js";function sJt(u,{requireOnboarding:r=!0}={}){let o=ie();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!P("tengu_maple_pier",!1))return null;let e=be("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>be(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&BW(u))return e;return null}function aJt(u,r,o){if(ie().hasSeenAutoDefaultNudge)return;let e=Sf(r.current_mode);if(u==="shown"){s("tengu_auto_default_nudge_shown",{current_mode:He(e),surface:b("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")Qt("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Te((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),s("tengu_auto_default_nudge_resolved",{choice:b(t),outcome:t==="accept"?b("switched"):b("declined"),current_mode:He(e),surface:b("ide")})}
export{sJt,aJt};
