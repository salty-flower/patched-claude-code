// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ee,DI,jen,HL,Cz,SM,zh}from"./chunk-vd0a9d2s.js";import{d}from"./chunk-eak61y8v.js";import{f}from"./chunk-y575z4xw.js";import{dc,EA}from"./chunk-5g70wphz.js";import{i}from"./chunk-ne43gjnt.js";import{y,p}from"./chunk-hz0a4zf6.js";import{_,t}from"./chunk-b5feae42.js";import{Ct,dF}from"./chunk-gcyvvtkw.js";import{vF,aNn}from"./chunk-kbn00z3m.js";import{R_,Cl,yc,c7t}from"./chunk-91pk1a5a.js";import{Dt,qt}from"./chunk-q21zbtsq.js";import{yt,zN}from"./chunk-52pn085z.js";import{Hh,Qno,Ww,Aze}from"./chunk-c1v7y60n.js";import{Di}from"./chunk-89c9wefm.js";import{_b,MKt,DKt}from"./chunk-6h1fm7zn.js";import{ote}from"./chunk-sgnja6n3.js";import{iyt,cJe,XW,Ub}from"./chunk-nwqfvmza.js";import{ap}from"./chunk-c4a5qdvy.js";import{ZC,xs}from"./chunk-ay3qjvhd.js";import{Uo}from"./chunk-5ytb7raa.js";import{Hlr}from"./chunk-bps7d9qx.js";import{XE}from"./chunk-0rgznfkd.js";import{Du}from"./chunk-wwgkng66.js";import{o,H,A,u,ze,W}from"./chunk-hcyr0654.js";function E(r,e){for(let n of Object.values(e.tasks))if(ap(n)&&n.identity.agentName===r)return n.id;return}function w(r,e,n){e.update(r,(a)=>({...a,awaitingPlanApproval:n!==null,pendingPlanApproval:n?{requestId:n.requestId,answered:!1}:void 0}))}function V1o(r,e,n,a){let s=n.get(r);if(!s||!ap(s)||!s.awaitingPlanApproval)return null;switch(MKt(s.pendingPlanApproval,e)){case"mismatch":return t(`[InProcessTeammate] Plan approval response ${_(e.requestId)} does not name the pending plan request ${_(s.pendingPlanApproval?.requestId)}; resolving the wait as a rejection`,{level:"warn"}),p("plan_approval","request_binding_mismatch"),w(r,n,null),DKt(e);case"unbound":p("plan_approval","verdict_unbound");break;case"bound":y("plan_approval");break;case"already_answered":return null}if(!e.approved)return w(r,n,null),e;let T=C(e.permissionMode);return n.update(r,(m)=>({...m,awaitingPlanApproval:!1,pendingPlanApproval:void 0,permissionMode:T})),Hlr(s.identity.teamName,s.identity.agentName,T,a),e}function C(r){let e=dc(EA(r??"default"));if(e==="bypassPermissions"&&XE())return"default";if(e==="auto"&&!Ub())return"default";return e}class I extends Error{constructor(r){super(r);this.name="PlanPreconditionError"}}function lfn(r){if(!r||dF()!=="default")return"";return`

If this plan can be broken down into multiple independent tasks, consider spawning named teammates with the ${yt} tool (pass a \`name\`) to parallelize the work.`}var O=`Use this tool when you are in plan mode and have finished writing your plan to the plan file and are ready for user approval.

## How This Tool Works
- You should have already written your plan to the plan file specified in the plan mode system message
- This tool does NOT take the plan content as a parameter - it will read the plan from the file you wrote
- This tool simply signals that you're done planning and ready for the user to review and approve
- The user will see the contents of your plan file when they review it

## When to Use This Tool
IMPORTANT: Only use this tool when the task requires planning the implementation steps of a task that requires writing code. For research tasks where you're gathering information, searching files, reading files or in general trying to understand the codebase - do NOT use this tool.

## Before Using This Tool
Ensure your plan is complete and unambiguous:
- If you have unresolved questions about requirements or approach, use ${xs} first (in earlier phases)
- Once your plan is finalized, use THIS tool to request approval

**Important:** Do NOT use ${xs} to ask "Is this plan okay?" or "Should I proceed?" - that's exactly what THIS tool does. ExitPlanMode inherently requests user approval of your plan.

## Examples

1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.
2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.
3. Initial task: "Add a new feature to handle user authentication" - If unsure about auth method (OAuth, JWT, etc.), use ${xs} first, then use exit plan mode tool after clarifying the approach.
`;var z=f(()=>u({tool:W(["Bash"]).describe("The tool this prompt applies to"),prompt:o().describe('Semantic description of the action, e.g. "run tests", "install dependencies"')})),N=f(()=>ze({allowedPrompts:A(z()).optional().describe("Deprecated: no longer used.")}).passthrough()),xe=f(()=>N().extend({plan:o().optional().describe("The plan content (injected by normalizeToolInput from disk)"),planFilePath:o().optional().describe("The plan file path (injected by normalizeToolInput)")})),q=f(()=>u({plan:o().nullable().describe("The plan that was presented to the user"),isAgent:H(),filePath:o().optional().describe("The file path where the plan was saved"),hasTaskTool:H().optional().describe("Whether the Agent tool is available in the current context"),planWasEdited:H().optional().describe("True when the user edited the plan (CCR web UI or Ctrl+G); determines whether the plan is echoed back in tool_result"),awaitingLeaderApproval:H().optional().describe("When true, the teammate has sent a plan approval request to the team leader"),requestId:o().optional().describe("Unique identifier for the plan approval request")})),iV=qt({name:Du,searchHint:"present plan for approval and start coding (plan mode only)",backgrounding:"never",maxResultSizeChars:1e5,async description(){return"Prompts the user to exit plan mode and start coding"},async prompt(){return O},get inputSchema(){return N()},get outputSchema(){return q()},userFacingName(){return""},shouldDefer:!0,isEnabled(){if(zh().length>0&&Ee())return!1;if(Ee()&&!iyt(DI()))return!1;return!0},isConcurrencySafe(){return!0},isReadOnly(){return!1},requiresUserInteraction(){if(yc())return!1;return!0},renderToolUseMessage(){return null},create(r){return{async validateInput(e){let n=r;if(n.agentContext.agentType==="subagent"&&n.agentContext.isBuiltIn===!0&&n.agentContext.subagentName===zN&&(yc()||n.permissions().mode==="plan"))return{result:!1,message:"A fork cannot exit plan mode; that belongs to the session that forked it. Finish your part and report back.",errorCode:2};if(yc())return{result:!0};let s=n.permissions().mode;if(s!=="plan")return i("tengu_exit_plan_mode_called_outside_plan",{model:Ct(n.mainLoopModel()),mode:d(s),hasExitedPlanModeInSession:jen()}),{result:!1,message:`You are not in plan mode. To enter plan mode, call the ${ZC} tool first. If your plan was already approved, continue with implementation.`,errorCode:1};return{result:!0}},async checkPermissions(e){if(yc())return{behavior:"allow",updatedInput:XW(Du,e)};return{behavior:"ask",message:"Exit plan mode?",updatedInput:e}},async call(e,{onProgress:n}){let a=r,s=null,c=null;[s,c]=await Promise.all([import("./chunk-bhhthqd3.js"),import("./chunk-7vafkr8h.js")]);let T=!!a.agentId,m=Ww(a.agentId),P="plan"in e&&typeof e.plan==="string"?e.plan:void 0;Hh(m);let k=P??await Aze(a.agentId,a.storageV5);if(P!==void 0&&m)await Qno(m,P,a.storageV5),cJe(a.storageV5);if(yc()&&c7t()){if(!k)throw new I(`No plan file found at ${m}. Please write your plan to this file before calling ExitPlanMode.`);let l=R_()||"unknown",g=Cl(),b=aNn("plan_approval",vF(l,g||"default")),v={type:"plan_approval_request",from:l,timestamp:new Date().toISOString(),planFilePath:m,planContent:k,requestId:b};if(await _b("team-lead",{from:l,text:_(v),timestamp:new Date().toISOString()},g,a.storageV5)===void 0)throw new I("Failed to write the plan approval request to the lead's inbox \u2014 plan not submitted; try again");let S=E(l,{tasks:a.tasks()??{}});if(S)w(S,a.taskRegistry,{requestId:b});else Di().swarmPermissions.pendingPlanApproval={requestId:b,answered:!1};return{data:{plan:k,isAgent:!0,filePath:m,awaitingLeaderApproval:!0,requestId:b}}}let x=null;{let l=a.permissions().prePlanMode??"default";if(l==="auto"&&!(c?.isAutoModeGateEnabled()??!1)){let g=c?.getAutoModeUnavailableReason()??"circuit-breaker";x=c?.getAutoModeUnavailableNotification(g)??"auto mode unavailable",t(`[auto-mode gate @ ExitPlanModeV2Tool] prePlanMode=${l} but gate is off (reason=${g}) \u2014 falling back to default on plan exit`,{level:"warn"})}}if(x)n?.({type:"notification",notification:{key:"auto-mode-gate-plan-exit-fallback",text:`plan exit \u2192 default \xB7 ${x}`,priority:"immediate",color:"warning",timeoutMs:1e4}});let M=a.permissions();if(M.mode==="plan"){HL(!0),Cz(!0);let l=M.prePlanMode??"default";{if(l==="auto"&&!(c?.isAutoModeGateEnabled()??!1))l="default";let v=l==="auto",h=s?.isAutoModeActive()??!1;if(s?.setAutoModeActive(v),h&&!v)SM(!0)}ote({from:"plan",to:l,trigger:"exit_plan_mode"});let g=l==="auto",b=M.strippedDangerousRules;a.setToolPermissionContext((v)=>{let h=v;if(g)h=c?.stripDangerousPermissionsForAutoMode(h)??h;else if(b)h=c?.restoreDangerousPermissions(h)??h;return{...h,mode:l,prePlanMode:void 0}})}let R=Uo()&&a.tools.some((l)=>Dt(l,yt));return{data:{plan:k,isAgent:T,filePath:m,hasTaskTool:R||void 0,planWasEdited:P!==void 0||void 0}}}}},mapToolResultToToolResultBlockParam({isAgent:r,plan:e,filePath:n,hasTaskTool:a,planWasEdited:s,awaitingLeaderApproval:c,requestId:T},m){if(c)return{type:"tool_result",content:`Your plan has been submitted to the team lead for approval.

Plan file: ${n}

**What happens next:**
1. Wait for the team lead to review your plan
2. You will receive a message in your inbox with approval/rejection
3. If approved, you can proceed with implementation
4. If rejected, refine your plan based on the feedback

**Important:** Do NOT proceed until you receive approval. Check your inbox for response.

Request ID: ${T}`,tool_use_id:m};if(r)return{type:"tool_result",content:'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"',tool_use_id:m};if(!e||e.trim()==="")return{type:"tool_result",content:"User has approved exiting plan mode. You can now proceed.",tool_use_id:m};let P=lfn(Boolean(a));return{type:"tool_result",content:`User has approved your plan. You can now start coding. Start with updating your todo list if applicable

Your plan has been saved to: ${n}
You can refer back to it if needed during implementation.${P}

## ${s?"Approved Plan (edited by user)":"Approved Plan"}:
${e}`,tool_use_id:m}}});
export{V1o,lfn,iV};
