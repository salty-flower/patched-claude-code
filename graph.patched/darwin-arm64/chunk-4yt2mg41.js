// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{K,Fg}from"./chunk-4bw62nzm.js";import{S,d}from"./chunk-76anb6yt.js";import{i}from"./chunk-4nygtnjw.js";import{f}from"./chunk-2hb5361r.js";import{n7t,GJ,r7t}from"./chunk-e7hwd1w0.js";function _$r(s,n,a){let e=n7t(s),r=e!==null?r7t():null;if(r!==null)f("goal_set",r.code,{origin:d("restored")});let t;if(e===null||r!==null){if(n((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)GJ(t,"resume_swap");return}if(a.add(K(),"Stop","",{type:"prompt",prompt:e}),n((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:Fg()}})),t!==void 0)GJ(t,"resume_swap");i("tengu_goal_restored_on_resume",{promptLength:e.length}),i("tengu_stop_hook_added",{promptLength:e.length,via:S("goal"),origin:d("restored")})}
export{_$r};
