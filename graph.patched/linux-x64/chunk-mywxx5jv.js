// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Pu}from"./chunk-kvgzj9kk.js";import{kt}from"./chunk-6ce4s97h.js";import{s}from"./chunk-cvykgfry.js";import{mt,gl,x}from"./chunk-ns0ekkj0.js";import{xt}from"./chunk-k7k51kt3.js";var u=1e4,a={auth:"teleport-org",timeout:u,headers:{"anthropic-beta":Pu}};function $fe(){if(kt())return!1;if(!xt("allow_team_onboarding"))return!1;if(!gl())return!1;return x("tengu_flint_harbor_share",!1)}function o(e){if(!e.ok)throw Error(e.reason==="no-auth"?e.detail:`Onboarding guide unavailable: ${e.reason}`);return e.data}function t(){if(!xt("allow_team_onboarding"))throw Error("Onboarding guide unavailable: policy-disabled")}async function cPn(e,n,r){t();let i=await mt.post("/api/organizations/:orgUUID/claude_code/onboarding",{content:e,name:n},{...a,credentials:r}),d=o(i);return s("tengu_team_onboarding_share_created",{}),d}async function YYt(e,n,r){t();let i=await mt.put(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,{content:n},{...a,credentials:r}),d=o(i);return s("tengu_team_onboarding_share_updated",{}),d}async function uPn(e,n){t();let r=await mt.delete(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,void 0,{...a,credentials:n});o(r),s("tengu_team_onboarding_share_deleted",{})}async function XYt(e){t();let n=await mt.get("/api/organizations/:orgUUID/claude_code/onboarding",{...a,credentials:e});return o(n).guides}
export{$fe,cPn,YYt,uPn,XYt};
