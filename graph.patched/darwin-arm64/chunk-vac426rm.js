// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{x,Ce,le}from"./chunk-twxt3h9y.js";import{S,pe}from"./chunk-gas689jj.js";import{i}from"./chunk-9cfndpw0.js";import{pg}from"./chunk-ekshy3qa.js";import{ye,sn}from"./chunk-je0c1kfp.js";import{iM}from"./chunk-cd8s0q7p.js";function $3n(u,{requireOnboarding:r=!0}={}){let o=le();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!x("tengu_maple_pier",!1))return null;let e=ye("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>ye(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&iM(u))return e;return null}function U3n(u,r,o){if(le().hasSeenAutoDefaultNudge)return;let e=pg(r.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:pe(e),surface:S("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")sn("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ce((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:S(t),outcome:t==="accept"?S("switched"):S("declined"),current_mode:pe(e),surface:S("ide")})}
export{$3n,U3n};
