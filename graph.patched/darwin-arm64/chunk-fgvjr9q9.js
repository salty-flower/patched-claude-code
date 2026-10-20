// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{K,Nh}from"./chunk-kpqr86hf.js";import{S,c}from"./chunk-ny2cqbmq.js";import{i}from"./chunk-dj0gyv94.js";import{p}from"./chunk-53e7d9dh.js";import{wln,Ate,Eln}from"./chunk-yv1m6b4m.js";function f7r(l,n,a){let e=wln(l),s=e!==null?Eln():null,r=s?.code==="hooks_held"?null:s;if(r!==null)p("goal_set",r.code,{origin:c("restored")});let t;if(e===null||r!==null){if(n((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)Ate(t,"resume_swap");return}if(a.add(K(),"Stop","",{type:"prompt",prompt:e}),n((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:Nh()}})),t!==void 0)Ate(t,"resume_swap");i("tengu_goal_restored_on_resume",{promptLength:e.length}),i("tengu_stop_hook_added",{promptLength:e.length,via:S("goal"),origin:c("restored")})}
export{f7r};
