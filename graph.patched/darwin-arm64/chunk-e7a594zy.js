// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ki,k}from"./chunk-1901fdh6.js";import{Fe}from"./chunk-3mdayxq0.js";import{a,nr}from"./chunk-k4g6y57j.js";import{ja}from"./chunk-btnsqe7h.js";import{WL}from"./chunk-jybqja29.js";function DIt(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(WL()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function kE(){return!DIt()}var i="tengu_fleetview_simple";function nfo(){return a.CLAUDE_CODE_FLEETVIEW_SIMPLE||k(i,!1)}async function LIt(e={}){if(WL()===null){let{getSettingsWithErrors:t}=await import("./chunk-q5p0sv3r.js");t()}if(e.kickGrowthBook!==!1)Ki().catch(()=>{})}function UJt(){return nr.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||k("tengu_fleet_past_sessions",!1)}function C4e(){return kE()}function TY(){return!1}function A4e(){return k("tengu_amber_anchor",!1)}function rfo(){return k("tengu_copper_lantern",!1)}function s(){return k("tengu_quiet_harbor",!1)?"ask":"transient"}function Qbr(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let t=WL()?.settings.daemonColdStart;if(t!==void 0)return t;return s()}function df(){return A4e()?"daemon":"background service"}function ipe(){return ja(df())}function twe(e){return C4e()?` \u2014 run 'claude daemon ${e}'`:""}function T4e(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var fFn="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function Zbr(){return!1}function ofo(){return!!a.CLAUDE_AGENTS_SELECT}function sfo(){let e=Fe(process.env[fFn]);return delete process.env[fFn],e}
export{DIt,kE,nfo,LIt,UJt,C4e,TY,A4e,rfo,Qbr,df,ipe,twe,T4e,fFn,Zbr,ofo,sfo};
