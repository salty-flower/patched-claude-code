// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{id}from"./chunk-88cgz317.js";import{vt}from"./chunk-1mtde6n1.js";import{s}from"./chunk-kzyd0fd4.js";import{St,Su,P}from"./chunk-h6md7820.js";import{Ft}from"./chunk-zskn8f78.js";var u=1e4,a={auth:"teleport-org",timeout:u,headers:{"anthropic-beta":id}};function gSe(){if(vt())return!1;if(!Ft("allow_team_onboarding"))return!1;if(!Su())return!1;return P("tengu_flint_harbor_share",!1)}function o(e){if(!e.ok)throw Error(e.reason==="no-auth"?e.detail:`Onboarding guide unavailable: ${e.reason}`);return e.data}function t(){if(!Ft("allow_team_onboarding"))throw Error("Onboarding guide unavailable: policy-disabled")}async function r6n(e,n,r){t();let i=await St.post("/api/organizations/:orgUUID/claude_code/onboarding",{content:e,name:n},{...a,credentials:r}),d=o(i);return s("tengu_team_onboarding_share_created",{}),d}async function Qrn(e,n,r){t();let i=await St.put(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,{content:n},{...a,credentials:r}),d=o(i);return s("tengu_team_onboarding_share_updated",{}),d}async function o6n(e,n){t();let r=await St.delete(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,void 0,{...a,credentials:n});o(r),s("tengu_team_onboarding_share_deleted",{})}async function Zrn(e){t();let n=await St.get("/api/organizations/:orgUUID/claude_code/onboarding",{...a,credentials:e});return o(n).guides}
export{gSe,r6n,Qrn,o6n,Zrn};
