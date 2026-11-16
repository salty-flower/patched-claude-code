// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{G,fb}from"./chunk-m8nhymg4.js";import{S,f}from"./chunk-v8gz5b0e.js";import{l}from"./chunk-mfxenhbr.js";import{c}from"./chunk-f8g4f3e3.js";import{aKn,Nge,E3s,lKn}from"./chunk-ny0w8rtn.js";function jrs(a,s,d,i){let e=aKn(a),r=e!==null?lKn():null,n=r?.code==="hooks_held"?null:r;if(n!==null)c("goal_set",n.code,{origin:f("restored")});let t;if(e===null||n!==null){if(s((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)Nge(t,"resume_swap");return}if(d.add(G(),"Stop","",E3s(e)),s((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:i?.iterations??0,setAt:i?.setAt??Date.now(),...i?.lastReason!==void 0&&{lastReason:i.lastReason},origin:"restored",tokensAtStart:fb()}})),t!==void 0)Nge(t,"resume_swap");l("tengu_goal_restored_on_resume",{promptLength:e.length}),l("tengu_stop_hook_added",{promptLength:e.length,via:S("goal"),origin:f("restored")})}
export{jrs};
