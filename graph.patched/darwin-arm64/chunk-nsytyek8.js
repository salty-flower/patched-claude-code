// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Dc}from"./chunk-9g7wf9qr.js";import{bt}from"./chunk-c5ajdz5z.js";import{i}from"./chunk-vtd04czk.js";import{_t,hu,I}from"./chunk-n495pc0t.js";import{Pt}from"./chunk-2q73xrvs.js";var u=1e4,a={auth:"teleport-org",timeout:u,headers:{"anthropic-beta":Dc}};function Kye(){if(bt())return!1;if(!Pt("allow_team_onboarding"))return!1;if(!hu())return!1;return I("tengu_flint_harbor_share",!1)}function o(e){if(!e.ok)throw Error(e.reason==="no-auth"?e.detail:`Onboarding guide unavailable: ${e.reason}`);return e.data}function t(){if(!Pt("allow_team_onboarding"))throw Error("Onboarding guide unavailable: policy-disabled")}async function CUn(e,n,r){t();let d=await _t.post("/api/organizations/:orgUUID/claude_code/onboarding",{content:e,name:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_created",{}),s}async function tnn(e,n,r){t();let d=await _t.put(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,{content:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_updated",{}),s}async function vUn(e,n){t();let r=await _t.delete(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,void 0,{...a,credentials:n});o(r),i("tengu_team_onboarding_share_deleted",{})}async function nnn(e){t();let n=await _t.get("/api/organizations/:orgUUID/claude_code/onboarding",{...a,credentials:e});return o(n).guides}
export{Kye,CUn,tnn,vUn,nnn};
