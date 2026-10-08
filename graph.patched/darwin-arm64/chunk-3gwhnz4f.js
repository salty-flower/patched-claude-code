// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{K,xm}from"./chunk-vd0a9d2s.js";import{S,d}from"./chunk-eak61y8v.js";import{i}from"./chunk-ne43gjnt.js";import{p}from"./chunk-hz0a4zf6.js";import{S5t,d7,b5t}from"./chunk-sdp6qxm9.js";function S0r(s,n,a){let e=S5t(s),r=e!==null?b5t():null;if(r!==null)p("goal_set",r.code,{origin:d("restored")});let t;if(e===null||r!==null){if(n((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)d7(t,"resume_swap");return}if(a.add(K(),"Stop","",{type:"prompt",prompt:e}),n((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:xm()}})),t!==void 0)d7(t,"resume_swap");i("tengu_goal_restored_on_resume",{promptLength:e.length}),i("tengu_stop_hook_added",{promptLength:e.length,via:S("goal"),origin:d("restored")})}
export{S0r};
