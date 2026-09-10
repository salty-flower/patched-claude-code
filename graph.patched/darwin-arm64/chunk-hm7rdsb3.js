// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{t}from"./chunk-w930ag8r.js";import{h}from"./chunk-e0gvmsm3.js";import{br}from"./chunk-qc0xda2j.js";import{Vxn,Xlr,ht,Hn,Vn,Ae,ne}from"./chunk-vryy7b5x.js";var l=14;function ODt(){return Hn()?.claudeCodeTrialDurationDays??null}var s={status:"ineligible",daysRemaining:null};function Llt(){let r=Vxn();if(r)return o(!0,r.endsAt);let e=Hn();if(!e||Vn()!=="pro")return s;let a=e.ccOnboardingFlags?.e10===!0;return o(a,e.claudeCodeTrialEndsAt??null)}async function DDt(r,e){return br("api_pro_trial_start",async()=>{if(Vxn()){let i=new Date(Date.now()+l*24*60*60*1000).toISOString();return Xlr({endsAt:i}),o(!0,i)}let n=await ht.post("/api/oauth/organizations/:orgUUID/claude_code/pro_trial",{},{auth:"teleport-org",credentials:e});if(!n.ok)throw Error(n.reason==="no-auth"?n.detail:`Pro trial start unavailable: ${n.reason}`);return t("Pro trial started",{level:"debug"}),u(n.data.ends_at,r),o(!0,n.data.ends_at)})}function Nnn(){if(Llt().status!=="expired")return!1;return ne().cachedExtraUsageDisabledReason!==null}function LDt(r){switch(r.status){case"active":{let e=r.daysRemaining??0;return`Trial: ${e} ${e===1?"day":"days"} left`}case"expired":return"Usage credits";case"ineligible":case"not_started":return null}}function o(r,e){if(!r)return s;if(!e)return{status:"not_started",daysRemaining:null};let a=new Date(e);if(Number.isNaN(a.getTime()))return h(Error(`Invalid claude_code_trial_ends_at: ${e}`)),s;let n=a.getTime()-Date.now();if(n<=0)return{status:"expired",daysRemaining:0};return{status:"active",daysRemaining:Math.ceil(n/86400000)}}function u(r,e){Ae((a)=>{if(!a.oauthAccount||a.oauthAccount.claudeCodeTrialEndsAt===r)return a;return{...a,oauthAccount:{...a.oauthAccount,claudeCodeTrialEndsAt:r}}},e)}
export{ODt,Llt,DDt,Nnn,LDt};
