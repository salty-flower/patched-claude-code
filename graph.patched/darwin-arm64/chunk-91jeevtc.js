// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{k,Ce,ce}from"./chunk-bk5ct2gw.js";import{S,pe}from"./chunk-76anb6yt.js";import{i}from"./chunk-4nygtnjw.js";import{$m}from"./chunk-a60ee1ne.js";import{fe,An}from"./chunk-x0dc37w9.js";import{Dj}from"./chunk-nw76x9y3.js";function oHr(u,{requireOnboarding:n=!0}={}){let o=ce();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!k("tengu_maple_pier",!0))return null;let e=fe("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>fe(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&Dj(u))return e;return null}function sHr(u,n,o){if(ce().hasSeenAutoDefaultNudge)return;let e=$m(n.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:pe(e),surface:S("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")An("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ce((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:S(t),outcome:t==="accept"?S("switched"):S("declined"),current_mode:pe(e),surface:S("ide")})}
export{oHr,sHr};
