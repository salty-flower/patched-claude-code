// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{I,we,ee}from"./chunk-n495pc0t.js";import{b,Te}from"./chunk-gnrvsty9.js";import{i}from"./chunk-vtd04czk.js";import{he,Qt}from"./chunk-pe4nmbcg.js";import{lf}from"./chunk-bky8qhrb.js";import{vL}from"./chunk-4sqwvswz.js";function aYt(u,{requireOnboarding:r=!0}={}){let o=ee();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!I("tengu_maple_pier",!1))return null;let e=he("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>he(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&vL(u))return e;return null}function lYt(u,r,o){if(ee().hasSeenAutoDefaultNudge)return;let e=lf(r.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:Te(e),surface:b("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")Qt("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);we((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:b(t),outcome:t==="accept"?b("switched"):b("declined"),current_mode:Te(e),surface:b("ide")})}
export{aYt,lYt};
