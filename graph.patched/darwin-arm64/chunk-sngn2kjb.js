// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{K,Au}from"./chunk-38213y7h.js";import{s}from"./chunk-qw5jhqey.js";import{w,c}from"./chunk-9rhc0mtn.js";import{g}from"./chunk-xtqqhw5t.js";import{AF,Bze}from"./chunk-0dmh9bdb.js";function Kcr(i){if(!i)return null;for(let n=i.length-1;n>=0;n--){let e=i[n];if(e?.type!=="attachment"||e.attachment.type!=="goal_status")continue;if(e.attachment.met||e.attachment.failed)return null;let t=e.attachment.condition;return typeof t==="string"&&t.length>0?t:null}return null}function o8t(i,n,e){let t=Kcr(i),l=t!==null?Bze():null;if(l!==null)g("goal_set",l.code,{origin:c("restored")});let r;if(t===null||l!==null){if(n((o)=>(r=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),r!==void 0)AF(r,"resume_swap");return}if(e.add(K(),"Stop","",{type:"prompt",prompt:t}),n((o)=>(r=o.activeGoal,{...o,activeGoal:{condition:t,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:Au()}})),r!==void 0)AF(r,"resume_swap");s("tengu_goal_restored_on_resume",{promptLength:t.length}),s("tengu_stop_hook_added",{promptLength:t.length,via:w("goal"),origin:c("restored")})}
export{Kcr,o8t};
