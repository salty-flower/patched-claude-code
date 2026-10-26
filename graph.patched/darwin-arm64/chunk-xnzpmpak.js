// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{V,cy}from"./chunk-ersar6wn.js";import{S,c}from"./chunk-ydpbzmt4.js";import{a}from"./chunk-wq923bwc.js";import{p}from"./chunk-wn8xtaqg.js";import{fgn,Qre,mgn}from"./chunk-w16mfxd9.js";function lao(s,i,l){let e=fgn(s),n=e!==null?mgn():null,r=n?.code==="hooks_held"?null:n;if(r!==null)p("goal_set",r.code,{origin:c("restored")});let t;if(e===null||r!==null){if(i((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)Qre(t,"resume_swap");return}if(l.add(V(),"Stop","",{type:"prompt",prompt:e}),i((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:cy()}})),t!==void 0)Qre(t,"resume_swap");a("tengu_goal_restored_on_resume",{promptLength:e.length}),a("tengu_stop_hook_added",{promptLength:e.length,via:S("goal"),origin:c("restored")})}
export{lao};
