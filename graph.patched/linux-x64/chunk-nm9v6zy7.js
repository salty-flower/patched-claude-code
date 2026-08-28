// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{x,_e,oe}from"./chunk-ns0ekkj0.js";import{S,Ce}from"./chunk-gt4btdxr.js";import{s}from"./chunk-cvykgfry.js";import{be,Gt}from"./chunk-bcez0qfh.js";import{uf}from"./chunk-yyzqa5fj.js";import{b6}from"./chunk-b7kcamdt.js";function L3t(u,{requireOnboarding:r=!0}={}){let o=oe();if(r&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!x("tengu_maple_pier",!1))return null;let e=be("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((n)=>be(n)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&b6(u))return e;return null}function D3t(u,r,o){if(oe().hasSeenAutoDefaultNudge)return;let e=uf(r.current_mode);if(u==="shown"){s("tengu_auto_default_nudge_shown",{current_mode:Ce(e),surface:S("ide")});return}let t=r.choice==="accept"?"accept":"decline";if(t==="accept")Gt("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);_e((n)=>n.hasSeenAutoDefaultNudge?n:{...n,hasSeenAutoDefaultNudge:!0},o),s("tengu_auto_default_nudge_resolved",{choice:S(t),outcome:t==="accept"?S("switched"):S("declined"),current_mode:Ce(e),surface:S("ide")})}
export{L3t,D3t};
