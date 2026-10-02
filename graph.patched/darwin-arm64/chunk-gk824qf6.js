// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{x,Te,ce}from"./chunk-er6f56rj.js";import{_,me}from"./chunk-g9zw99sb.js";import{i}from"./chunk-aykv0zbt.js";import{Kg}from"./chunk-zpb414p7.js";import{ge,fn}from"./chunk-e561d543.js";import{_F}from"./chunk-1msmfava.js";function jer(u,{requireOnboarding:n=!0}={}){let o=ce();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!x("tengu_maple_pier",!0))return null;let e=ge("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>ge(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&_F(u))return e;return null}function Wer(u,n,o){if(ce().hasSeenAutoDefaultNudge)return;let e=Kg(n.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:me(e),surface:_("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")fn("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Te((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:_(t),outcome:t==="accept"?_("switched"):_("declined"),current_mode:me(e),surface:_("ide")})}
export{jer,Wer};
