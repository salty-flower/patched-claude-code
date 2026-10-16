// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{q,yh}from"./chunk-eqmywwjn.js";import{b,c}from"./chunk-fr28a3he.js";import{i}from"./chunk-h723y8sa.js";import{f}from"./chunk-rhe3yjtx.js";import{Xrn,kee,Jrn}from"./chunk-6wcgd04f.js";function X4r(l,n,a){let e=Xrn(l),s=e!==null?Jrn():null,r=s?.code==="hooks_held"?null:s;if(r!==null)f("goal_set",r.code,{origin:c("restored")});let t;if(e===null||r!==null){if(n((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)kee(t,"resume_swap");return}if(a.add(q(),"Stop","",{type:"prompt",prompt:e}),n((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:yh()}})),t!==void 0)kee(t,"resume_swap");i("tengu_goal_restored_on_resume",{promptLength:e.length}),i("tengu_stop_hook_added",{promptLength:e.length,via:b("goal"),origin:c("restored")})}
export{X4r};
