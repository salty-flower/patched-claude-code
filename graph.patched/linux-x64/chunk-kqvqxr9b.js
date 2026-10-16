// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{k,Ae,ue}from"./chunk-k16gymf7.js";import{b,pe}from"./chunk-fr28a3he.js";import{i}from"./chunk-h723y8sa.js";import{mg}from"./chunk-4m7tg52y.js";import{me,In}from"./chunk-a502zyxr.js";import{rz}from"./chunk-357vgdxy.js";function BWr(u,{requireOnboarding:n=!0}={}){let o=ue();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!k("tengu_maple_pier",!0))return null;let e=me("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>me(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&rz(u))return e;return null}function jWr(u,n,o){if(ue().hasSeenAutoDefaultNudge)return;let e=mg(n.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:pe(e),surface:b("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")In("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:b(t),outcome:t==="accept"?b("switched"):b("declined"),current_mode:pe(e),surface:b("ide")})}
export{BWr,jWr};
