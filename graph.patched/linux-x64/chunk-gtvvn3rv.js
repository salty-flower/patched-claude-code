// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{P,ke,ie}from"./chunk-30p0nwys.js";import{b,he}from"./chunk-p9tbyvzw.js";import{i}from"./chunk-5a4y4a7y.js";import{cm}from"./chunk-h4q23q42.js";import{ye,tn}from"./chunk-ggjhe3cp.js";import{JF}from"./chunk-a7xz6jyj.js";function HSn(u,{requireOnboarding:r=!0}={}){let o=ie();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!P("tengu_maple_pier",!1))return null;let e=ye("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>ye(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&JF(u))return e;return null}function OSn(u,r,o){if(ie().hasSeenAutoDefaultNudge)return;let e=cm(r.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:he(e),surface:b("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")tn("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);ke((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:b(t),outcome:t==="accept"?b("switched"):b("declined"),current_mode:he(e),surface:b("ide")})}
export{HSn,OSn};
