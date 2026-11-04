// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{G,j_}from"./chunk-ecyypctx.js";import{S,p}from"./chunk-h58p4vvs.js";import{l}from"./chunk-hm8vbfs0.js";import{c}from"./chunk-ad5ya8vz.js";import{ODn,Nce,Pys,IDn}from"./chunk-2qwabm08.js";function uNo(a,s,d,i){let e=ODn(a),r=e!==null?IDn():null,n=r?.code==="hooks_held"?null:r;if(n!==null)c("goal_set",n.code,{origin:p("restored")});let t;if(e===null||n!==null){if(s((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)Nce(t,"resume_swap");return}if(d.add(G(),"Stop","",Pys(e)),s((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:i?.iterations??0,setAt:i?.setAt??Date.now(),...i?.lastReason!==void 0&&{lastReason:i.lastReason},origin:"restored",tokensAtStart:j_()}})),t!==void 0)Nce(t,"resume_swap");l("tengu_goal_restored_on_resume",{promptLength:e.length}),l("tengu_stop_hook_added",{promptLength:e.length,via:S("goal"),origin:p("restored")})}
export{uNo};
