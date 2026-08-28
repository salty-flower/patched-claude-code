// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{n}from"./chunk-akz0cj0f.js";import{_}from"./chunk-6ce4s97h.js";import{gr}from"./chunk-v1ap59a1.js";import{bfn,G9n,mt,In,Tn,_e,oe}from"./chunk-ns0ekkj0.js";var gnr=14;function aAt(){return In()?.claudeCodeTrialDurationDays??null}var s={status:"ineligible",daysRemaining:null};function oQe(){let e=bfn();if(e)return o(!0,e.endsAt);let t=In();if(!t||Tn()!=="pro")return s;let r=t.ccOnboardingFlags?.e10===!0;return o(r,t.claudeCodeTrialEndsAt??null)}async function lAt(e,t){return gr("api_pro_trial_start",async()=>{if(bfn()){let i=new Date(Date.now()+gnr*24*60*60*1000).toISOString();return G9n({endsAt:i}),o(!0,i)}let a=await mt.post("/api/oauth/organizations/:orgUUID/claude_code/pro_trial",{},{auth:"teleport-org",credentials:t});if(!a.ok)throw Error(a.reason==="no-auth"?a.detail:`Pro trial start unavailable: ${a.reason}`);return n("Pro trial started",{level:"debug"}),l(a.data.ends_at,e),o(!0,a.data.ends_at)})}function Nqt(){if(oQe().status!=="expired")return!1;return oe().cachedExtraUsageDisabledReason!==null}function cAt(e){switch(e.status){case"active":{let t=e.daysRemaining??0;return`Trial: ${t} ${t===1?"day":"days"} left`}case"expired":return"Usage credits";case"ineligible":case"not_started":return null}}function o(e,t){if(!e)return s;if(!t)return{status:"not_started",daysRemaining:null};let r=new Date(t);if(Number.isNaN(r.getTime()))return _(Error(`Invalid claude_code_trial_ends_at: ${t}`)),s;let a=r.getTime()-Date.now();if(a<=0)return{status:"expired",daysRemaining:0};return{status:"active",daysRemaining:Math.ceil(a/86400000)}}function l(e,t){_e((r)=>{if(!r.oauthAccount||r.oauthAccount.claudeCodeTrialEndsAt===e)return r;return{...r,oauthAccount:{...r.oauthAccount,claudeCodeTrialEndsAt:e}}},t)}
export{gnr,aAt,oQe,lAt,Nqt,cAt};
