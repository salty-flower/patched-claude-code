// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Vu}from"./chunk-tq3ft6e6.js";import{At}from"./chunk-vzm3bfp5.js";import{i}from"./chunk-jxv3x25k.js";import{Tt,Md,P}from"./chunk-g4c6ggz4.js";import{Xt}from"./chunk-2b1j7csg.js";var u=1e4,a={auth:"teleport-org",timeout:u,headers:{"anthropic-beta":Vu}};function Fxe(){if(At())return!1;if(!Xt("allow_team_onboarding"))return!1;if(!Md())return!1;return P("tengu_flint_harbor_share",!1)}function o(e){if(!e.ok)throw Error(e.reason==="no-auth"?e.detail:`Onboarding guide unavailable: ${e.reason}`);return e.data}function t(){if(!Xt("allow_team_onboarding"))throw Error("Onboarding guide unavailable: policy-disabled")}async function Edr(e,n,r){t();let d=await Tt.post("/api/organizations/:orgUUID/claude_code/onboarding",{content:e,name:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_created",{}),s}async function Qkn(e,n,r){t();let d=await Tt.put(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,{content:n},{...a,credentials:r}),s=o(d);return i("tengu_team_onboarding_share_updated",{}),s}async function vdr(e,n){t();let r=await Tt.delete(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,void 0,{...a,credentials:n});o(r),i("tengu_team_onboarding_share_deleted",{})}async function Zkn(e){t();let n=await Tt.get("/api/organizations/:orgUUID/claude_code/onboarding",{...a,credentials:e});return o(n).guides}
export{Fxe,Edr,Qkn,vdr,Zkn};
