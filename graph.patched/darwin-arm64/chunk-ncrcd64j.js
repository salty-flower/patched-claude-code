// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K,_m}from"./chunk-8mvda08c.js";import{_,d}from"./chunk-hdvxmrfb.js";import{i}from"./chunk-qbf9wv32.js";import{p}from"./chunk-e3gw32ew.js";import{hqt,zY,yqt}from"./chunk-sevnd1p9.js";function lAr(s,n,a){let e=hqt(s),r=e!==null?yqt():null;if(r!==null)p("goal_set",r.code,{origin:d("restored")});let t;if(e===null||r!==null){if(n((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)zY(t,"resume_swap");return}if(a.add(K(),"Stop","",{type:"prompt",prompt:e}),n((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:_m()}})),t!==void 0)zY(t,"resume_swap");i("tengu_goal_restored_on_resume",{promptLength:e.length}),i("tengu_stop_hook_added",{promptLength:e.length,via:_("goal"),origin:d("restored")})}
export{lAr};
