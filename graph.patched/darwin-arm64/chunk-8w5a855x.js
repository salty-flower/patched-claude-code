// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{J,ku}from"./chunk-sgamszzq.js";import{S,c}from"./chunk-k6smmjsm.js";import{i}from"./chunk-jxv3x25k.js";import{m}from"./chunk-4akrhkry.js";import{z6,hpt}from"./chunk-ycdabn6c.js";function s(l){if(!l)return null;for(let n=l.length-1;n>=0;n--){let e=l[n];if(e?.type!=="attachment"||e.attachment.type!=="goal_status")continue;if(e.attachment.met||e.attachment.failed)return null;let t=e.attachment.condition;return typeof t==="string"&&t.length>0?t:null}return null}function Awn(l,n,e){let t=s(l),a=t!==null?hpt():null;if(a!==null)m("goal_set",a.code,{origin:c("restored")});let r;if(t===null||a!==null){if(n((o)=>(r=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),r!==void 0)z6(r,"resume_swap");return}if(e.add(J(),"Stop","",{type:"prompt",prompt:t}),n((o)=>(r=o.activeGoal,{...o,activeGoal:{condition:t,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:ku()}})),r!==void 0)z6(r,"resume_swap");i("tengu_goal_restored_on_resume",{promptLength:t.length}),i("tengu_stop_hook_added",{promptLength:t.length,via:S("goal"),origin:c("restored")})}
export{Awn};
