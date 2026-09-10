// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{X,tu}from"./chunk-6n7yk222.js";import{_,u}from"./chunk-0rpkhv24.js";import{i}from"./chunk-nx6yj2w6.js";import{g}from"./chunk-t5df5mky.js";import{y1,ptt}from"./chunk-z5jb1k2d.js";function s(l){if(!l)return null;for(let n=l.length-1;n>=0;n--){let e=l[n];if(e?.type!=="attachment"||e.attachment.type!=="goal_status")continue;if(e.attachment.met||e.attachment.failed)return null;let t=e.attachment.condition;return typeof t==="string"&&t.length>0?t:null}return null}function jrn(l,n,e){let t=s(l),a=t!==null?ptt():null;if(a!==null)g("goal_set",a.code,{origin:u("restored")});let r;if(t===null||a!==null){if(n((o)=>(r=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),r!==void 0)y1(r,"resume_swap");return}if(e.add(X(),"Stop","",{type:"prompt",prompt:t}),n((o)=>(r=o.activeGoal,{...o,activeGoal:{condition:t,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:tu()}})),r!==void 0)y1(r,"resume_swap");i("tengu_goal_restored_on_resume",{promptLength:t.length}),i("tengu_stop_hook_added",{promptLength:t.length,via:_("goal"),origin:u("restored")})}
export{jrn};
