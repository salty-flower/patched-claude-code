// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{q}from"./chunk-2vv5hpw3.js";import{S,c}from"./chunk-gt4btdxr.js";import{SB}from"./chunk-jdek2rwt.js";import{Ae,_t,T4}from"./chunk-ns0ekkj0.js";import{s}from"./chunk-cvykgfry.js";import{b}from"./chunk-v1ap59a1.js";import{a}from"./chunk-g0kfvhx3.js";import{An}from"./chunk-hrvkymct.js";import{ps,ea,nr,Pi}from"./chunk-zve9wwgw.js";function n(){return a.CLAUDE_JOB_DIR}async function Oet(i,e){s("tengu_bg_agent_action",{action:S("stop"),source:c(i),jobSessionId:Ae(q())});let o=n();if(_t()&&o){let r=new Date().toISOString(),t=await nr(o,e);if(t&&!Pi(t))await ps(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(ea);if(T4())process.stdout.write(SB("Session stopped."))}return b("job_stop_self"),An(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{Oet};
