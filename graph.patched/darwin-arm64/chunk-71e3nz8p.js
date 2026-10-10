// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{t}from"./chunk-gyf58rwf.js";import{c}from"./chunk-gsnbskq4.js";import{Zr}from"./chunk-2hb5361r.js";import{Rho,PEs,Hn,Sr,zt,Ce,ce}from"./chunk-bk5ct2gw.js";var l=14;function DHr(){return Hn()?.claudeCodeTrialDurationDays??null}var s={status:"ineligible",daysRemaining:null};function rmt(){let r=Rho();if(r)return o(!0,r.endsAt);let e=Hn();if(!e||Sr()!=="pro")return s;let a=e.ccOnboardingFlags?.e10===!0;return o(a,e.claudeCodeTrialEndsAt??null)}async function LHr(r,e){return Zr("api_pro_trial_start",async()=>{if(Rho()){let i=new Date(Date.now()+l*24*60*60*1000).toISOString();return PEs({endsAt:i}),o(!0,i)}let n=await zt.post("/api/oauth/organizations/:orgUUID/claude_code/pro_trial",{},{auth:"teleport-org",credentials:e});if(!n.ok)throw Error(n.reason==="no-auth"?n.detail:`Pro trial start unavailable: ${n.reason}`);return t("Pro trial started",{level:"debug"}),u(n.data.ends_at,r),o(!0,n.data.ends_at)})}function lLo(){if(rmt().status!=="expired")return!1;return ce().cachedExtraUsageDisabledReason!==null}function NHr(r){switch(r.status){case"active":{let e=r.daysRemaining??0;return`Trial: ${e} ${e===1?"day":"days"} left`}case"expired":return"Usage credits";case"ineligible":case"not_started":return null}}function o(r,e){if(!r)return s;if(!e)return{status:"not_started",daysRemaining:null};let a=new Date(e);if(Number.isNaN(a.getTime()))return c(Error(`Invalid claude_code_trial_ends_at: ${e}`)),s;let n=a.getTime()-Date.now();if(n<=0)return{status:"expired",daysRemaining:0};return{status:"active",daysRemaining:Math.ceil(n/86400000)}}function u(r,e){Ce((a)=>{if(!a.oauthAccount||a.oauthAccount.claudeCodeTrialEndsAt===r)return a;return{...a,oauthAccount:{...a.oauthAccount,claudeCodeTrialEndsAt:r}}},e)}
export{DHr,rmt,LHr,lLo,NHr};
