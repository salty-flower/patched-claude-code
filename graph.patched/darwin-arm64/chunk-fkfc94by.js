// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Q,Cc}from"./chunk-yhfssb7x.js";import{s}from"./chunk-v5cr82c7.js";import{b,u}from"./chunk-g1553wr3.js";import{g}from"./chunk-tfyzvdvk.js";import{Y$,LXe}from"./chunk-sqqb4t8f.js";function a_r(i){if(!i)return null;for(let n=i.length-1;n>=0;n--){let e=i[n];if(e?.type!=="attachment"||e.attachment.type!=="goal_status")continue;if(e.attachment.met||e.attachment.failed)return null;let t=e.attachment.condition;return typeof t==="string"&&t.length>0?t:null}return null}function EZt(i,n,e){let t=a_r(i),l=t!==null?LXe():null;if(l!==null)g("goal_set",l.code,{origin:u("restored")});let r;if(t===null||l!==null){if(n((o)=>(r=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),r!==void 0)Y$(r,"resume_swap");return}if(e.add(Q(),"Stop","",{type:"prompt",prompt:t}),n((o)=>(r=o.activeGoal,{...o,activeGoal:{condition:t,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:Cc()}})),r!==void 0)Y$(r,"resume_swap");s("tengu_goal_restored_on_resume",{promptLength:t.length}),s("tengu_stop_hook_added",{promptLength:t.length,via:b("goal"),origin:u("restored")})}
export{a_r,EZt};
