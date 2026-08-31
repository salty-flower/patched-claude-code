// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{n}from"./chunk-d0cr5d2v.js";import{h}from"./chunk-ma4xtxwv.js";import{Ir}from"./chunk-ykrbqs98.js";import{hbn,yer,St,Pn,Nn,Ae,oe}from"./chunk-1e5y3pjf.js";var Jcr=14;function fCt(){return Pn()?.claudeCodeTrialDurationDays??null}var s={status:"ineligible",daysRemaining:null};function Stt(){let e=hbn();if(e)return o(!0,e.endsAt);let t=Pn();if(!t||Nn()!=="pro")return s;let r=t.ccOnboardingFlags?.e10===!0;return o(r,t.claudeCodeTrialEndsAt??null)}async function pCt(e,t){return Ir("api_pro_trial_start",async()=>{if(hbn()){let i=new Date(Date.now()+Jcr*24*60*60*1000).toISOString();return yer({endsAt:i}),o(!0,i)}let a=await St.post("/api/oauth/organizations/:orgUUID/claude_code/pro_trial",{},{auth:"teleport-org",credentials:t});if(!a.ok)throw Error(a.reason==="no-auth"?a.detail:`Pro trial start unavailable: ${a.reason}`);return n("Pro trial started",{level:"debug"}),l(a.data.ends_at,e),o(!0,a.data.ends_at)})}function tYt(){if(Stt().status!=="expired")return!1;return oe().cachedExtraUsageDisabledReason!==null}function mCt(e){switch(e.status){case"active":{let t=e.daysRemaining??0;return`Trial: ${t} ${t===1?"day":"days"} left`}case"expired":return"Usage credits";case"ineligible":case"not_started":return null}}function o(e,t){if(!e)return s;if(!t)return{status:"not_started",daysRemaining:null};let r=new Date(t);if(Number.isNaN(r.getTime()))return h(Error(`Invalid claude_code_trial_ends_at: ${t}`)),s;let a=r.getTime()-Date.now();if(a<=0)return{status:"expired",daysRemaining:0};return{status:"active",daysRemaining:Math.ceil(a/86400000)}}function l(e,t){Ae((r)=>{if(!r.oauthAccount||r.oauthAccount.claudeCodeTrialEndsAt===e)return r;return{...r,oauthAccount:{...r.oauthAccount,claudeCodeTrialEndsAt:e}}},t)}
export{Jcr,fCt,Stt,pCt,tYt,mCt};
