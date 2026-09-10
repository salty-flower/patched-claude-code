// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{H,Ae,ne}from"./chunk-e02s7cks.js";import{_,we}from"./chunk-am8gnetv.js";import{i}from"./chunk-z0p50v56.js";import{ye,Qt}from"./chunk-yyyfew8j.js";import{$f}from"./chunk-jh8csezs.js";import{hN}from"./chunk-a8ebzxnq.js";function pon(u,{requireOnboarding:r=!0}={}){let o=ne();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!H("tengu_maple_pier",!1))return null;let e=ye("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>ye(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&hN(u))return e;return null}function fon(u,r,o){if(ne().hasSeenAutoDefaultNudge)return;let e=$f(r.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:we(e),surface:_("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")Qt("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:_(t),outcome:t==="accept"?_("switched"):_("declined"),current_mode:we(e),surface:_("ide")})}
export{pon,fon};
