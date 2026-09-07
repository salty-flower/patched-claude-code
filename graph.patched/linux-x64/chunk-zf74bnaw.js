// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Lc}from"./chunk-hpnksvcw.js";import{St}from"./chunk-9g6v0ehs.js";import{i}from"./chunk-skkcgpsw.js";import{yt,mu,x}from"./chunk-3e93vkg3.js";import{Lt}from"./chunk-fet7e4b8.js";var u=1e4,a={auth:"teleport-org",timeout:u,headers:{"anthropic-beta":Lc}};function Y_e(){if(St())return!1;if(!Lt("allow_team_onboarding"))return!1;if(!mu())return!1;return x("tengu_flint_harbor_share",!1)}function o(e){if(!e.ok)throw Error(e.reason==="no-auth"?e.detail:`Onboarding guide unavailable: ${e.reason}`);return e.data}function t(){if(!Lt("allow_team_onboarding"))throw Error("Onboarding guide unavailable: policy-disabled")}async function I1n(e,n,r){t();let d=await yt.post("/api/organizations/:orgUUID/claude_code/onboarding",{content:e,name:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_created",{}),s}async function ynn(e,n,r){t();let d=await yt.put(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,{content:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_updated",{}),s}async function R1n(e,n){t();let r=await yt.delete(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,void 0,{...a,credentials:n});o(r),i("tengu_team_onboarding_share_deleted",{})}async function _nn(e){t();let n=await yt.get("/api/organizations/:orgUUID/claude_code/onboarding",{...a,credentials:e});return o(n).guides}
export{Y_e,I1n,ynn,R1n,_nn};
