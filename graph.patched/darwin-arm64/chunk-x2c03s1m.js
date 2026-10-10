// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ve,WO,Jsn,BN,GV,ND,my}from"./chunk-4bw62nzm.js";import{d}from"./chunk-76anb6yt.js";import{p}from"./chunk-fdwn5gdv.js";import{vc,mT}from"./chunk-3cynezh1.js";import{i}from"./chunk-4nygtnjw.js";import{g,f}from"./chunk-2hb5361r.js";import{_,t}from"./chunk-gyf58rwf.js";import{kt,v$}from"./chunk-bk5ct2gw.js";import{L$,Djn}from"./chunk-64ag51qf.js";import{X_,$l,Oc,ltn}from"./chunk-rgrg9230.js";import{It,Kt}from"./chunk-hwpb27as.js";import{yt,o$}from"./chunk-d2vt7d7f.js";import{qh,zco,EE,TKe}from"./chunk-27et44g8.js";import{Vi}from"./chunk-pn2pjtqa.js";import{Wb,f8t,m8t}from"./chunk-9xs8s13r.js";import{nre}from"./chunk-r4m2wntw.js";import{Zbt,bet,gz,O_}from"./chunk-sfn1dbxq.js";import{Ep}from"./chunk-j8hqhz0c.js";import{xk,Qo}from"./chunk-hmg4e8gm.js";import{Jo}from"./chunk-s5mvqpy4.js";import{amr}from"./chunk-bngc1aq9.js";import{Iv}from"./chunk-np2hxx6s.js";import{mu}from"./chunk-7f636z1y.js";import{o,H,A,u,De,U}from"./chunk-9cmjz7j9.js";function E(r,e){for(let n of Object.values(e.tasks))if(Ep(n)&&n.identity.agentName===r)return n.id;return}function w(r,e,n){e.update(r,(a)=>({...a,awaitingPlanApproval:n!==null,pendingPlanApproval:n?{requestId:n.requestId,answered:!1}:void 0}))}function uqo(r,e,n,a){let s=n.get(r);if(!s||!Ep(s)||!s.awaitingPlanApproval)return null;switch(f8t(s.pendingPlanApproval,e)){case"mismatch":return t(`[InProcessTeammate] Plan approval response ${_(e.requestId)} does not name the pending plan request ${_(s.pendingPlanApproval?.requestId)}; resolving the wait as a rejection`,{level:"warn"}),f("plan_approval","request_binding_mismatch"),w(r,n,null),m8t(e);case"unbound":f("plan_approval","verdict_unbound");break;case"bound":g("plan_approval");break;case"already_answered":return null}if(!e.approved)return w(r,n,null),e;let y=C(e.permissionMode);return n.update(r,(m)=>({...m,awaitingPlanApproval:!1,pendingPlanApproval:void 0,permissionMode:y})),amr(s.identity.teamName,s.identity.agentName,y,a),e}function C(r){let e=vc(mT(r??"default"));if(e==="bypassPermissions"&&Iv())return"default";if(e==="auto"&&!O_())return"default";return e}class I extends Error{constructor(r){super(r);this.name="PlanPreconditionError"}}function N_n(r){if(!r||v$()!=="default")return"";return`

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
- If you have unresolved questions about requirements or approach, use ${Qo} first (in earlier phases)
- Once your plan is finalized, use THIS tool to request approval

**Important:** Do NOT use ${Qo} to ask "Is this plan okay?" or "Should I proceed?" - that's exactly what THIS tool does. ExitPlanMode inherently requests user approval of your plan.

## Examples

1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.
2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.
3. Initial task: "Add a new feature to handle user authentication" - If unsure about auth method (OAuth, JWT, etc.), use ${Qo} first, then use exit plan mode tool after clarifying the approach.
`;var z=p(()=>u({tool:U(["Bash"]).describe("The tool this prompt applies to"),prompt:o().describe('Semantic description of the action, e.g. "run tests", "install dependencies"')})),N=p(()=>De({allowedPrompts:A(z()).optional().describe("Deprecated: no longer used.")}).passthrough()),Me=p(()=>N().extend({plan:o().optional().describe("The plan content (injected by normalizeToolInput from disk)"),planFilePath:o().optional().describe("The plan file path (injected by normalizeToolInput)")})),q=p(()=>u({plan:o().nullable().describe("The plan that was presented to the user"),isAgent:H(),filePath:o().optional().describe("The file path where the plan was saved"),hasTaskTool:H().optional().describe("Whether the Agent tool is available in the current context"),planWasEdited:H().optional().describe("True when the user edited the plan (CCR web UI or Ctrl+G); determines whether the plan is echoed back in tool_result"),awaitingLeaderApproval:H().optional().describe("When true, the teammate has sent a plan approval request to the team leader"),requestId:o().optional().describe("Unique identifier for the plan approval request")})),Aq=Kt({name:mu,searchHint:"present plan for approval and start coding (plan mode only)",backgrounding:"never",maxResultSizeChars:1e5,async description(){return"Prompts the user to exit plan mode and start coding"},async prompt(){return O},get inputSchema(){return N()},get outputSchema(){return q()},userFacingName(){return""},shouldDefer:!0,isEnabled(){if(my().length>0&&ve())return!1;if(ve()&&!Zbt(WO()))return!1;return!0},isConcurrencySafe(){return!0},isReadOnly(){return!1},requiresUserInteraction(){if(Oc())return!1;return!0},renderToolUseMessage(){return null},create(r){return{async validateInput(e){let n=r;if(n.agentContext.agentType==="subagent"&&n.agentContext.isBuiltIn===!0&&n.agentContext.subagentName===o$&&(Oc()||n.permissions().mode==="plan"))return{result:!1,message:"A fork cannot exit plan mode; that belongs to the session that forked it. Finish your part and report back.",errorCode:2};if(Oc())return{result:!0};let s=n.permissions().mode;if(s!=="plan")return i("tengu_exit_plan_mode_called_outside_plan",{model:kt(n.mainLoopModel()),mode:d(s),hasExitedPlanModeInSession:Jsn()}),{result:!1,message:`You are not in plan mode. To enter plan mode, call the ${xk} tool first. If your plan was already approved, continue with implementation.`,errorCode:1};return{result:!0}},async checkPermissions(e){if(Oc())return{behavior:"allow",updatedInput:gz(mu,e)};return{behavior:"ask",message:"Exit plan mode?",updatedInput:e}},async call(e,{onProgress:n}){let a=r,s=null,c=null;[s,c]=await Promise.all([import("./chunk-hcb4typb.js"),import("./chunk-cdt17j30.js")]);let y=!!a.agentId,m=EE(a.agentId),P="plan"in e&&typeof e.plan==="string"?e.plan:void 0;qh(m);let k=P??await TKe(a.agentId,a.storageV5);if(P!==void 0&&m)await zco(m,P,a.storageV5),bet(a.storageV5);if(Oc()&&ltn()){if(!k)throw new I(`No plan file found at ${m}. Please write your plan to this file before calling ExitPlanMode.`);let l=X_()||"unknown",T=$l(),b=Djn("plan_approval",L$(l,T||"default")),v={type:"plan_approval_request",from:l,timestamp:new Date().toISOString(),planFilePath:m,planContent:k,requestId:b};if(await Wb("team-lead",{from:l,text:_(v),timestamp:new Date().toISOString()},T,a.storageV5)===void 0)throw new I("Failed to write the plan approval request to the lead's inbox \u2014 plan not submitted; try again");let S=E(l,{tasks:a.tasks()??{}});if(S)w(S,a.taskRegistry,{requestId:b});else Vi().swarmPermissions.pendingPlanApproval={requestId:b,answered:!1};return{data:{plan:k,isAgent:!0,filePath:m,awaitingLeaderApproval:!0,requestId:b}}}let x=null;{let l=a.permissions().prePlanMode??"default";if(l==="auto"&&!(c?.isAutoModeGateEnabled()??!1)){let T=c?.getAutoModeUnavailableReason()??"circuit-breaker";x=c?.getAutoModeUnavailableNotification(T)??"auto mode unavailable",t(`[auto-mode gate @ ExitPlanModeV2Tool] prePlanMode=${l} but gate is off (reason=${T}) \u2014 falling back to default on plan exit`,{level:"warn"})}}if(x)n?.({type:"notification",notification:{key:"auto-mode-gate-plan-exit-fallback",text:`plan exit \u2192 default \xB7 ${x}`,priority:"immediate",color:"warning",timeoutMs:1e4}});let M=a.permissions();if(M.mode==="plan"){BN(!0),GV(!0);let l=M.prePlanMode??"default";{if(l==="auto"&&!(c?.isAutoModeGateEnabled()??!1))l="default";let v=l==="auto",h=s?.isAutoModeActive()??!1;if(s?.setAutoModeActive(v),h&&!v)ND(!0)}nre({from:"plan",to:l,trigger:"exit_plan_mode"});let T=l==="auto",b=M.strippedDangerousRules;a.setToolPermissionContext((v)=>{let h=v;if(T)h=c?.stripDangerousPermissionsForAutoMode(h)??h;else if(b)h=c?.restoreDangerousPermissions(h)??h;return{...h,mode:l,prePlanMode:void 0}})}let R=Jo()&&a.tools.some((l)=>It(l,yt));return{data:{plan:k,isAgent:y,filePath:m,hasTaskTool:R||void 0,planWasEdited:P!==void 0||void 0}}}}},mapToolResultToToolResultBlockParam({isAgent:r,plan:e,filePath:n,hasTaskTool:a,planWasEdited:s,awaitingLeaderApproval:c,requestId:y},m){if(c)return{type:"tool_result",content:`Your plan has been submitted to the team lead for approval.

Plan file: ${n}

**What happens next:**
1. Wait for the team lead to review your plan
2. You will receive a message in your inbox with approval/rejection
3. If approved, you can proceed with implementation
4. If rejected, refine your plan based on the feedback

**Important:** Do NOT proceed until you receive approval. Check your inbox for response.

Request ID: ${y}`,tool_use_id:m};if(r)return{type:"tool_result",content:'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"',tool_use_id:m};if(!e||e.trim()==="")return{type:"tool_result",content:"User has approved exiting plan mode. You can now proceed.",tool_use_id:m};let P=N_n(Boolean(a));return{type:"tool_result",content:`User has approved your plan. You can now start coding. Start with updating your todo list if applicable

Your plan has been saved to: ${n}
You can refer back to it if needed during implementation.${P}

## ${s?"Approved Plan (edited by user)":"Approved Plan"}:
${e}`,tool_use_id:m}}});
export{uqo,N_n,Aq};
