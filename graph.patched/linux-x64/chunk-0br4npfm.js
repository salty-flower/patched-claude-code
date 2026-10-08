// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ve,OI,Aen,xL,hq,gD,Gh}from"./chunk-g79wjybr.js";import{d}from"./chunk-bkr1h20c.js";import{f}from"./chunk-ras5x31x.js";import{dc,wA}from"./chunk-5zqw5ss6.js";import{i}from"./chunk-nayw0pf7.js";import{y,p}from"./chunk-68vq239n.js";import{_,t}from"./chunk-p46wpkfz.js";import{Tt,o$}from"./chunk-cxjvwxsa.js";import{h$,WLn}from"./chunk-5pdrsybf.js";import{C_,kl,yc,VXt}from"./chunk-e3ya4n4j.js";import{Dt,Vt}from"./chunk-vecj8twx.js";import{yt,FN}from"./chunk-vfp1ydec.js";import{Mh,kno,jw,bqe}from"./chunk-z9vmsc2z.js";import{Hi}from"./chunk-c9zcyfj2.js";import{yS,b4t,S4t}from"./chunk-3m2tqye2.js";import{Jee}from"./chunk-as6x96mg.js";import{Yht,tQe,Fz,FS}from"./chunk-g263vvvn.js";import{ap}from"./chunk-gef68xj8.js";import{XT,xs}from"./chunk-jxzs6mtr.js";import{Fo}from"./chunk-k477qbny.js";import{Xar}from"./chunk-3vrcfwd8.js";import{Kv}from"./chunk-ggf1x049.js";import{Lu}from"./chunk-kgj0q4zk.js";import{o,M,A,u,Ge,j}from"./chunk-w8db6ytr.js";function O(r,e){for(let n of Object.values(e.tasks))if(ap(n)&&n.identity.agentName===r)return n.id;return}function w(r,e,n){e.update(r,(a)=>({...a,awaitingPlanApproval:n!==null,pendingPlanApproval:n?{requestId:n.requestId,answered:!1}:void 0}))}function vUo(r,e,n,a){let s=n.get(r);if(!s||!ap(s)||!s.awaitingPlanApproval)return null;switch(b4t(s.pendingPlanApproval,e)){case"mismatch":return t(`[InProcessTeammate] Plan approval response ${_(e.requestId)} does not name the pending plan request ${_(s.pendingPlanApproval?.requestId)}; resolving the wait as a rejection`,{level:"warn"}),p("plan_approval","request_binding_mismatch"),w(r,n,null),S4t(e);case"unbound":p("plan_approval","verdict_unbound");break;case"bound":y("plan_approval");break;case"already_answered":return null}if(!e.approved)return w(r,n,null),e;let T=z(e.permissionMode);return n.update(r,(m)=>({...m,awaitingPlanApproval:!1,pendingPlanApproval:void 0,permissionMode:T})),Xar(s.identity.teamName,s.identity.agentName,T,a),e}function z(r){let e=dc(wA(r??"default"));if(e==="bypassPermissions"&&Kv())return"default";if(e==="auto"&&!FS())return"default";return e}class I extends Error{constructor(r){super(r);this.name="PlanPreconditionError"}}function Jpn(r){if(!r||o$()!=="default")return"";return`

If this plan can be broken down into multiple independent tasks, consider spawning named teammates with the ${yt} tool (pass a \`name\`) to parallelize the work.`}var N=`Use this tool when you are in plan mode and have finished writing your plan to the plan file and are ready for user approval.

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
`;var q=f(()=>u({tool:j(["Bash"]).describe("The tool this prompt applies to"),prompt:o().describe('Semantic description of the action, e.g. "run tests", "install dependencies"')})),R=f(()=>Ge({allowedPrompts:A(q()).optional().describe("Deprecated: no longer used.")}).passthrough()),Me=f(()=>R().extend({plan:o().optional().describe("The plan content (injected by normalizeToolInput from disk)"),planFilePath:o().optional().describe("The plan file path (injected by normalizeToolInput)")})),F=f(()=>u({plan:o().nullable().describe("The plan that was presented to the user"),isAgent:M(),filePath:o().optional().describe("The file path where the plan was saved"),hasTaskTool:M().optional().describe("Whether the Agent tool is available in the current context"),planWasEdited:M().optional().describe("True when the user edited the plan (CCR web UI or Ctrl+G); determines whether the plan is echoed back in tool_result"),awaitingLeaderApproval:M().optional().describe("When true, the teammate has sent a plan approval request to the team leader"),requestId:o().optional().describe("Unique identifier for the plan approval request")})),Jq=Vt({name:Lu,searchHint:"present plan for approval and start coding (plan mode only)",backgrounding:"never",maxResultSizeChars:1e5,async description(){return"Prompts the user to exit plan mode and start coding"},async prompt(){return N},get inputSchema(){return R()},get outputSchema(){return F()},userFacingName(){return""},shouldDefer:!0,isEnabled(){if(Gh().length>0&&ve())return!1;if(ve()&&!Yht(OI()))return!1;return!0},isConcurrencySafe(){return!0},isReadOnly(){return!1},requiresUserInteraction(){if(yc())return!1;return!0},renderToolUseMessage(){return null},create(r){return{async validateInput(e){let n=r;if(n.agentContext.agentType==="subagent"&&n.agentContext.isBuiltIn===!0&&n.agentContext.subagentName===FN&&(yc()||n.permissions().mode==="plan"))return{result:!1,message:"A fork cannot exit plan mode; that belongs to the session that forked it. Finish your part and report back.",errorCode:2};if(yc())return{result:!0};let s=n.permissions().mode;if(s!=="plan")return i("tengu_exit_plan_mode_called_outside_plan",{model:Tt(n.mainLoopModel()),mode:d(s),hasExitedPlanModeInSession:Aen()}),{result:!1,message:`You are not in plan mode. To enter plan mode, call the ${XT} tool first. If your plan was already approved, continue with implementation.`,errorCode:1};return{result:!0}},async checkPermissions(e){if(yc())return{behavior:"allow",updatedInput:Fz(Lu,e)};return{behavior:"ask",message:"Exit plan mode?",updatedInput:e}},async call(e,{onProgress:n}){let a=r,s=null,c=null;[s,c]=await Promise.all([import("./chunk-qw1q6jrh.js"),import("./chunk-4w6b0kyp.js")]);let T=!!a.agentId,m=jw(a.agentId),P="plan"in e&&typeof e.plan==="string"?e.plan:void 0;Mh(m);let k=P??await bqe(a.agentId,a.storageV5);if(P!==void 0&&m)await kno(m,P,a.storageV5),tQe(a.storageV5);if(yc()&&VXt()){if(!k)throw new I(`No plan file found at ${m}. Please write your plan to this file before calling ExitPlanMode.`);let l=C_()||"unknown",g=kl(),b=WLn("plan_approval",h$(l,g||"default")),v={type:"plan_approval_request",from:l,timestamp:new Date().toISOString(),planFilePath:m,planContent:k,requestId:b};if(await yS("team-lead",{from:l,text:_(v),timestamp:new Date().toISOString()},g,a.storageV5)===void 0)throw new I("Failed to write the plan approval request to the lead's inbox \u2014 plan not submitted; try again");let E=O(l,{tasks:a.tasks()??{}});if(E)w(E,a.taskRegistry,{requestId:b});else Hi().swarmPermissions.pendingPlanApproval={requestId:b,answered:!1};return{data:{plan:k,isAgent:!0,filePath:m,awaitingLeaderApproval:!0,requestId:b}}}let x=null;{let l=a.permissions().prePlanMode??"default";if(l==="auto"&&!(c?.isAutoModeGateEnabled()??!1)){let g=c?.getAutoModeUnavailableReason()??"circuit-breaker";x=c?.getAutoModeUnavailableNotification(g)??"auto mode unavailable",t(`[auto-mode gate @ ExitPlanModeV2Tool] prePlanMode=${l} but gate is off (reason=${g}) \u2014 falling back to default on plan exit`,{level:"warn"})}}if(x)n?.({type:"notification",notification:{key:"auto-mode-gate-plan-exit-fallback",text:`plan exit \u2192 default \xB7 ${x}`,priority:"immediate",color:"warning",timeoutMs:1e4}});let S=a.permissions();if(S.mode==="plan"){xL(!0),hq(!0);let l=S.prePlanMode??"default";{if(l==="auto"&&!(c?.isAutoModeGateEnabled()??!1))l="default";let v=l==="auto",h=s?.isAutoModeActive()??!1;if(s?.setAutoModeActive(v),h&&!v)gD(!0)}Jee({from:"plan",to:l,trigger:"exit_plan_mode"});let g=l==="auto",b=S.strippedDangerousRules;a.setToolPermissionContext((v)=>{let h=v;if(g)h=c?.stripDangerousPermissionsForAutoMode(h)??h;else if(b)h=c?.restoreDangerousPermissions(h)??h;return{...h,mode:l,prePlanMode:void 0}})}let C=Fo()&&a.tools.some((l)=>Dt(l,yt));return{data:{plan:k,isAgent:T,filePath:m,hasTaskTool:C||void 0,planWasEdited:P!==void 0||void 0}}}}},mapToolResultToToolResultBlockParam({isAgent:r,plan:e,filePath:n,hasTaskTool:a,planWasEdited:s,awaitingLeaderApproval:c,requestId:T},m){if(c)return{type:"tool_result",content:`Your plan has been submitted to the team lead for approval.

Plan file: ${n}

**What happens next:**
1. Wait for the team lead to review your plan
2. You will receive a message in your inbox with approval/rejection
3. If approved, you can proceed with implementation
4. If rejected, refine your plan based on the feedback

**Important:** Do NOT proceed until you receive approval. Check your inbox for response.

Request ID: ${T}`,tool_use_id:m};if(r)return{type:"tool_result",content:'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"',tool_use_id:m};if(!e||e.trim()==="")return{type:"tool_result",content:"User has approved exiting plan mode. You can now proceed.",tool_use_id:m};let P=Jpn(Boolean(a));return{type:"tool_result",content:`User has approved your plan. You can now start coding. Start with updating your todo list if applicable

Your plan has been saved to: ${n}
You can refer back to it if needed during implementation.${P}

## ${s?"Approved Plan (edited by user)":"Approved Plan"}:
${e}`,tool_use_id:m}}});
export{vUo,Jpn,Jq};
