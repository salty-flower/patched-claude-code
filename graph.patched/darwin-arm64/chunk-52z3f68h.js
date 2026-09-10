// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{eu}from"./chunk-3rs4ng0x.js";import{wt}from"./chunk-2rebt4am.js";import{i}from"./chunk-z0p50v56.js";import{yt,Ou,H}from"./chunk-e02s7cks.js";import{Ft}from"./chunk-ea584spk.js";var u=1e4,a={auth:"teleport-org",timeout:u,headers:{"anthropic-beta":eu}};function LEe(){if(wt())return!1;if(!Ft("allow_team_onboarding"))return!1;if(!Ou())return!1;return H("tengu_flint_harbor_share",!1)}function o(e){if(!e.ok)throw Error(e.reason==="no-auth"?e.detail:`Onboarding guide unavailable: ${e.reason}`);return e.data}function t(){if(!Ft("allow_team_onboarding"))throw Error("Onboarding guide unavailable: policy-disabled")}async function yqn(e,n,r){t();let d=await yt.post("/api/organizations/:orgUUID/claude_code/onboarding",{content:e,name:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_created",{}),s}async function Wun(e,n,r){t();let d=await yt.put(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,{content:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_updated",{}),s}async function _qn(e,n){t();let r=await yt.delete(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,void 0,{...a,credentials:n});o(r),i("tengu_team_onboarding_share_deleted",{})}async function zun(e){t();let n=await yt.get("/api/organizations/:orgUUID/claude_code/onboarding",{...a,credentials:e});return o(n).guides}
export{LEe,yqn,Wun,_qn,zun};
