// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Zc}from"./chunk-kse90n8m.js";import{wt}from"./chunk-p9k2m8jj.js";import{i}from"./chunk-nx6yj2w6.js";import{yt,Hu,I}from"./chunk-ce4ppmnp.js";import{Nt}from"./chunk-k2cr3wah.js";var u=1e4,a={auth:"teleport-org",timeout:u,headers:{"anthropic-beta":Zc}};function Cve(){if(wt())return!1;if(!Nt("allow_team_onboarding"))return!1;if(!Hu())return!1;return I("tengu_flint_harbor_share",!1)}function o(e){if(!e.ok)throw Error(e.reason==="no-auth"?e.detail:`Onboarding guide unavailable: ${e.reason}`);return e.data}function t(){if(!Nt("allow_team_onboarding"))throw Error("Onboarding guide unavailable: policy-disabled")}async function U4n(e,n,r){t();let d=await yt.post("/api/organizations/:orgUUID/claude_code/onboarding",{content:e,name:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_created",{}),s}async function _un(e,n,r){t();let d=await yt.put(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,{content:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_updated",{}),s}async function B4n(e,n){t();let r=await yt.delete(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,void 0,{...a,credentials:n});o(r),i("tengu_team_onboarding_share_deleted",{})}async function bun(e){t();let n=await yt.get("/api/organizations/:orgUUID/claude_code/onboarding",{...a,credentials:e});return o(n).guides}
export{Cve,U4n,_un,B4n,bun};
