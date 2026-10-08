// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{d}from"./chunk-bkr1h20c.js";import{t}from"./chunk-p46wpkfz.js";import{rIt,G_o}from"./chunk-nayw0pf7.js";import{gDn,Yus,tt,Nco,w9t,zCt,gyr,GCt,Jk,Wn,T}from"./chunk-cxjvwxsa.js";import{HTt}from"./chunk-nxr8w4js.js";var g="tengu_log_datadog_events",u="tengu_quizzical_giraffe",E=new Set(["tengu_started","tengu_oauth_success","tengu_oauth_token_refresh_lock_acquiring","tengu_oauth_token_refresh_starting","tengu_oauth_token_refresh_success","tengu_oauth_token_refresh_failure","tengu_oauth_token_refresh_race_recovered","tengu_oauth_refresh_token_cleared_on_disk","tengu_api_error","tengu_feature_bad","tengu_feature_sad"]);function m(){if(zCt("datadog"))return!1;try{return T(g,!1)}catch{return!1}}function c(e){try{gDn(tt())}catch{}return Yus(e)}function _(e,n){if(!E.has(e))return n;try{let{value:o,source:a}=Wn(u,!1),r=a==="fallback"||a==="disabled";return{...n,[u]:d(r?"unset":o===!0?"on":"off")}}catch{return n}}function f(e,n,o,a){let r=_(e,c(n)),i=o!==null?{...r,sample_rate:o}:r;if(a())HTt(e,rIt(i));GCt(e,i)}var l=!1;function h(e,n,o){if(l){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}l=!0;try{let a=gyr(e);if(a===0)return;if(Nco()){f(e,n,a,o);return}let r=()=>{l=!0;try{f(e,n,a,o)}finally{l=!1}};w9t().then(r,r)}finally{l=!1}}async function p(e,n,o){let a=gyr(e);if(a===0)return;if(!Nco())await w9t();let r=_(e,c(n)),i=a!==null?{...r,sample_rate:a}:r,s=[];if(o())s.push(HTt(e,rIt(i)));s.push(Jk(e,i)),await Promise.all(s)}function P8(){G_o(v(m))}function v(e){return{logEvent:(n,o)=>h(n,o,e),logEventAsync:(n,o)=>p(n,o,e)}}
export{P8};
