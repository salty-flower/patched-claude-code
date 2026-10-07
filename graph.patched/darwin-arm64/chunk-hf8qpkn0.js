// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{k,Ae,ce}from"./chunk-s46qgfx7.js";import{_,ue}from"./chunk-hdvxmrfb.js";import{i}from"./chunk-qbf9wv32.js";import{Dm}from"./chunk-nqb0d8cm.js";import{me,_n}from"./chunk-861a7whf.js";import{vU}from"./chunk-z9krvjah.js";function pbr(u,{requireOnboarding:n=!0}={}){let o=ce();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!k("tengu_maple_pier",!0))return null;let e=me("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>me(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&vU(u))return e;return null}function fbr(u,n,o){if(ce().hasSeenAutoDefaultNudge)return;let e=Dm(n.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:ue(e),surface:_("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")_n("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:_(t),outcome:t==="accept"?_("switched"):_("declined"),current_mode:ue(e),surface:_("ide")})}
export{pbr,fbr};
