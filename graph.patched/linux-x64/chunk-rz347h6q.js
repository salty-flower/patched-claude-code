// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K,_m}from"./chunk-aywwjcwq.js";import{_,d}from"./chunk-yffha6me.js";import{i}from"./chunk-s90w5q15.js";import{p}from"./chunk-tzahwj8w.js";import{tKt,$9,nKt}from"./chunk-wm13622a.js";function qTr(s,n,a){let e=tKt(s),r=e!==null?nKt():null;if(r!==null)p("goal_set",r.code,{origin:d("restored")});let t;if(e===null||r!==null){if(n((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)$9(t,"resume_swap");return}if(a.add(K(),"Stop","",{type:"prompt",prompt:e}),n((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:_m()}})),t!==void 0)$9(t,"resume_swap");i("tengu_goal_restored_on_resume",{promptLength:e.length}),i("tengu_stop_hook_added",{promptLength:e.length,via:_("goal"),origin:d("restored")})}
export{qTr};
