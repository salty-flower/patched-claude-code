// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{T,Ae,ce}from"./chunk-m0sj7y8g.js";import{_,ue}from"./chunk-yffha6me.js";import{i}from"./chunk-s90w5q15.js";import{Lm}from"./chunk-p72qafcy.js";import{me,_n}from"./chunk-2c0pkjse.js";import{uB}from"./chunk-8zrcd7kp.js";function Cbr(u,{requireOnboarding:n=!0}={}){let o=ce();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!T("tengu_maple_pier",!0))return null;let e=me("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>me(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&uB(u))return e;return null}function Rbr(u,n,o){if(ce().hasSeenAutoDefaultNudge)return;let e=Lm(n.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:ue(e),surface:_("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")_n("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:_(t),outcome:t==="accept"?_("switched"):_("declined"),current_mode:ue(e),surface:_("ide")})}
export{Cbr,Rbr};
