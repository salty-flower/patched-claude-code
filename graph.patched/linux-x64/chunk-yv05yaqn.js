// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{q,Lh}from"./chunk-dxktn51d.js";import{b,c}from"./chunk-m3epja3j.js";import{i}from"./chunk-sr4gfmny.js";import{f}from"./chunk-yzndvntb.js";import{iln,Ste,aln}from"./chunk-s2rsrx51.js";function YXr(l,n,a){let e=iln(l),s=e!==null?aln():null,r=s?.code==="hooks_held"?null:s;if(r!==null)f("goal_set",r.code,{origin:c("restored")});let t;if(e===null||r!==null){if(n((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)Ste(t,"resume_swap");return}if(a.add(q(),"Stop","",{type:"prompt",prompt:e}),n((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:Lh()}})),t!==void 0)Ste(t,"resume_swap");i("tengu_goal_restored_on_resume",{promptLength:e.length}),i("tengu_stop_hook_added",{promptLength:e.length,via:b("goal"),origin:c("restored")})}
export{YXr};
