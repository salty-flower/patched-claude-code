// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Mi,k}from"./chunk-7p6jp6kj.js";import{Fe}from"./chunk-8nra9hkj.js";import{a,nr}from"./chunk-cd1a8ced.js";import{tl}from"./chunk-nt1g7asm.js";import{yN}from"./chunk-4v4w26w4.js";function CHt(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(yN()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function Fv(){return!CHt()}var i="tengu_fleetview_simple";function MSo(){return a.CLAUDE_CODE_FLEETVIEW_SIMPLE||k(i,!1)}async function RHt(e={}){if(yN()===null){let{getSettingsWithErrors:t}=await import("./chunk-76pfp4ps.js");t()}if(e.kickGrowthBook!==!1)Mi().catch(()=>{})}function ktn(){return nr.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||k("tengu_fleet_past_sessions",!1)}function R3e(){return Fv()}function uX(){return!1}function x3e(){return k("tengu_amber_anchor",!1)}function HSo(){return k("tengu_copper_lantern",!1)}function s(){return k("tengu_quiet_harbor",!1)?"ask":"transient"}function AAr(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let t=yN()?.settings.daemonColdStart;if(t!==void 0)return t;return s()}function Ef(){return x3e()?"daemon":"background service"}function Afe(){return tl(Ef())}function yve(e){return R3e()?` \u2014 run 'claude daemon ${e}'`:""}function P3e(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var Y1n="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function CAr(){return!1}function DSo(){return!!a.CLAUDE_AGENTS_SELECT}function LSo(){let e=Fe(process.env[Y1n]);return delete process.env[Y1n],e}
export{CHt,Fv,MSo,RHt,ktn,R3e,uX,x3e,HSo,AAr,Ef,Afe,yve,P3e,Y1n,CAr,DSo,LSo};
