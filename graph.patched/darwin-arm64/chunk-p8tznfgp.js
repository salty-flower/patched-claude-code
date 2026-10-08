// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{d}from"./chunk-eak61y8v.js";import{t}from"./chunk-b5feae42.js";import{gIt,wSo}from"./chunk-ne43gjnt.js";import{HMn,Hps,nt,udo,NYt,tRt,Lyr,nRt,eC,Wn,C}from"./chunk-gcyvvtkw.js";import{zCt}from"./chunk-84heqw3p.js";var g="tengu_log_datadog_events",u="tengu_quizzical_giraffe",E=new Set(["tengu_started","tengu_oauth_success","tengu_oauth_token_refresh_lock_acquiring","tengu_oauth_token_refresh_starting","tengu_oauth_token_refresh_success","tengu_oauth_token_refresh_failure","tengu_oauth_token_refresh_race_recovered","tengu_oauth_refresh_token_cleared_on_disk","tengu_api_error","tengu_feature_bad","tengu_feature_sad"]);function m(){if(tRt("datadog"))return!1;try{return C(g,!1)}catch{return!1}}function c(e){try{HMn(nt())}catch{}return Hps(e)}function _(e,n){if(!E.has(e))return n;try{let{value:o,source:a}=Wn(u,!1),r=a==="fallback"||a==="disabled";return{...n,[u]:d(r?"unset":o===!0?"on":"off")}}catch{return n}}function f(e,n,o,a){let r=_(e,c(n)),i=o!==null?{...r,sample_rate:o}:r;if(a())zCt(e,gIt(i));nRt(e,i)}var l=!1;function h(e,n,o){if(l){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}l=!0;try{let a=Lyr(e);if(a===0)return;if(udo()){f(e,n,a,o);return}let r=()=>{l=!0;try{f(e,n,a,o)}finally{l=!1}};NYt().then(r,r)}finally{l=!1}}async function p(e,n,o){let a=Lyr(e);if(a===0)return;if(!udo())await NYt();let r=_(e,c(n)),i=a!==null?{...r,sample_rate:a}:r,s=[];if(o())s.push(zCt(e,gIt(i)));s.push(eC(e,i)),await Promise.all(s)}function bW(){wSo(v(m))}function v(e){return{logEvent:(n,o)=>h(n,o,e),logEventAsync:(n,o)=>p(n,o,e)}}
export{bW};
