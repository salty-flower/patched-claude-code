// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Vu}from"./chunk-40wq8hf6.js";import{kt}from"./chunk-kh3dq6rw.js";import{i}from"./chunk-5a4y4a7y.js";import{At,Ld,P}from"./chunk-30p0nwys.js";import{Xt}from"./chunk-js9x7t7j.js";var u=1e4,a={auth:"teleport-org",timeout:u,headers:{"anthropic-beta":Vu}};function Rxe(){if(kt())return!1;if(!Xt("allow_team_onboarding"))return!1;if(!Ld())return!1;return P("tengu_flint_harbor_share",!1)}function o(e){if(!e.ok)throw Error(e.reason==="no-auth"?e.detail:`Onboarding guide unavailable: ${e.reason}`);return e.data}function t(){if(!Xt("allow_team_onboarding"))throw Error("Onboarding guide unavailable: policy-disabled")}async function Uur(e,n,r){t();let d=await At.post("/api/organizations/:orgUUID/claude_code/onboarding",{content:e,name:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_created",{}),s}async function ACn(e,n,r){t();let d=await At.put(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,{content:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_updated",{}),s}async function Bur(e,n){t();let r=await At.delete(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,void 0,{...a,credentials:n});o(r),i("tengu_team_onboarding_share_deleted",{})}async function TCn(e){t();let n=await At.get("/api/organizations/:orgUUID/claude_code/onboarding",{...a,credentials:e});return o(n).guides}
export{Rxe,Uur,ACn,Bur,TCn};
