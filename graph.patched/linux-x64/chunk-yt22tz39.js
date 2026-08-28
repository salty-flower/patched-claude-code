// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{q,Qc}from"./chunk-2vv5hpw3.js";import{s}from"./chunk-cvykgfry.js";import{S,c}from"./chunk-gt4btdxr.js";import{y}from"./chunk-v1ap59a1.js";import{r1,W5e}from"./chunk-mvtec2z7.js";function Xtr(i){if(!i)return null;for(let n=i.length-1;n>=0;n--){let e=i[n];if(e?.type!=="attachment"||e.attachment.type!=="goal_status")continue;if(e.attachment.met||e.attachment.failed)return null;let t=e.attachment.condition;return typeof t==="string"&&t.length>0?t:null}return null}function P3t(i,n,e){let t=Xtr(i),l=t!==null?W5e():null;if(l!==null)y("goal_set",l.code,{origin:c("restored")});let r;if(t===null||l!==null){if(n((o)=>(r=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),r!==void 0)r1(r,"resume_swap");return}if(e.add(q(),"Stop","",{type:"prompt",prompt:t}),n((o)=>(r=o.activeGoal,{...o,activeGoal:{condition:t,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:Qc()}})),r!==void 0)r1(r,"resume_swap");s("tengu_goal_restored_on_resume",{promptLength:t.length}),s("tengu_stop_hook_added",{promptLength:t.length,via:S("goal"),origin:c("restored")})}
export{Xtr,P3t};
