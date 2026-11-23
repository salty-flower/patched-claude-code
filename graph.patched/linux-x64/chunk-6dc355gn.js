// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{G,uS}from"./chunk-r3adsed5.js";import{b,f}from"./chunk-zt4gdxqw.js";import{l}from"./chunk-hs29jdk6.js";import{c}from"./chunk-ztxp0r5w.js";import{$6n,xge,WKs,U6n}from"./chunk-66xmxd28.js";function urs(a,s,d,i){let e=$6n(a),r=e!==null?U6n():null,n=r?.code==="hooks_held"?null:r;if(n!==null)c("goal_set",n.code,{origin:f("restored")});let t;if(e===null||n!==null){if(s((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)xge(t,"resume_swap");return}if(d.add(G(),"Stop","",WKs(e)),s((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:i?.iterations??0,setAt:i?.setAt??Date.now(),...i?.lastReason!==void 0&&{lastReason:i.lastReason},origin:"restored",tokensAtStart:uS()}})),t!==void 0)xge(t,"resume_swap");l("tengu_goal_restored_on_resume",{promptLength:e.length}),l("tengu_stop_hook_added",{promptLength:e.length,via:b("goal"),origin:f("restored")})}
export{urs};
