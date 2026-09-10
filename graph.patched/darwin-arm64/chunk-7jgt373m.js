// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{If,H}from"./chunk-vryy7b5x.js";import{Pe}from"./chunk-3k7pa7mk.js";import{a,Fn}from"./chunk-qymratxs.js";import{am}from"./chunk-0v0wzs89.js";import{pE}from"./chunk-1qb0n0qf.js";function OBe(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(pE()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function R_(){return!OBe()}async function DBe(e={}){if(pE()===null){let{getSettingsWithErrors:t}=await import("./chunk-smnwe8rc.js");t()}if(e.kickGrowthBook!==!1)If().catch(()=>{})}function met(){return Fn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||H("tengu_fleet_past_sessions",!1)}function gRe(){return R_()}function f8(){return!1}function ihe(){return H("tengu_amber_anchor",!1)}function zRn(){return H("tengu_copper_lantern",!1)}function oCr(){return H("tengu_quiet_harbor",!1)?"ask":"transient"}function Wc(){return ihe()?"daemon":"background service"}function m8(){return am(Wc())}function aZ(e){return gRe()?` \u2014 run 'claude daemon ${e}'`:""}function ahe(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var YTt="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function WKt(){return!1}function sCr(e){return!1}function GRn(){return!!a.CLAUDE_AGENTS_SELECT}function VRn(){let e=Pe(process.env[YTt]);return delete process.env[YTt],e}
export{OBe,R_,DBe,met,gRe,f8,ihe,zRn,oCr,Wc,m8,aZ,ahe,YTt,WKt,sCr,GRn,VRn};
