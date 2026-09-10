// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Xc}from"./chunk-jww0ztav.js";import{bt}from"./chunk-e0gvmsm3.js";import{i}from"./chunk-mx473n83.js";import{ht,Hu,H}from"./chunk-vryy7b5x.js";import{Nt}from"./chunk-zt6267d7.js";var u=1e4,a={auth:"teleport-org",timeout:u,headers:{"anthropic-beta":Xc}};function $we(){if(bt())return!1;if(!Nt("allow_team_onboarding"))return!1;if(!Hu())return!1;return H("tengu_flint_harbor_share",!1)}function o(e){if(!e.ok)throw Error(e.reason==="no-auth"?e.detail:`Onboarding guide unavailable: ${e.reason}`);return e.data}function t(){if(!Nt("allow_team_onboarding"))throw Error("Onboarding guide unavailable: policy-disabled")}async function T3n(e,n,r){t();let d=await ht.post("/api/organizations/:orgUUID/claude_code/onboarding",{content:e,name:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_created",{}),s}async function xln(e,n,r){t();let d=await ht.put(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,{content:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_updated",{}),s}async function k3n(e,n){t();let r=await ht.delete(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,void 0,{...a,credentials:n});o(r),i("tengu_team_onboarding_share_deleted",{})}async function Hln(e){t();let n=await ht.get("/api/organizations/:orgUUID/claude_code/onboarding",{...a,credentials:e});return o(n).guides}
export{$we,T3n,xln,k3n,Hln};
