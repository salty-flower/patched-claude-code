// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Mi,k}from"./chunk-bvn0epzr.js";import{$e}from"./chunk-bjnpzyk4.js";import{a,nr}from"./chunk-h422gpw8.js";import{nl}from"./chunk-42txhxmf.js";import{bN}from"./chunk-58pv6r0f.js";function F0t(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(bN()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function UE(){return!F0t()}var i="tengu_fleetview_simple";function lwo(){return a.CLAUDE_CODE_FLEETVIEW_SIMPLE||k(i,!1)}async function $0t(e={}){if(bN()===null){let{getSettingsWithErrors:t}=await import("./chunk-rmt9c4b9.js");t()}if(e.kickGrowthBook!==!1)Mi().catch(()=>{})}function Ftn(){return nr.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||k("tengu_fleet_past_sessions",!1)}function L9e(){return UE()}function bX(){return!1}function N9e(){return k("tengu_amber_anchor",!1)}function dwo(){return k("tengu_copper_lantern",!1)}function s(){return k("tengu_quiet_harbor",!1)?"ask":"transient"}function KTr(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let t=bN()?.settings.daemonColdStart;if(t!==void 0)return t;return s()}function vf(){return N9e()?"daemon":"background service"}function Ife(){return nl(vf())}function vEe(e){return L9e()?` \u2014 run 'claude daemon ${e}'`:""}function F9e(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var mjn="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function qTr(){return!1}function cwo(){return!!a.CLAUDE_AGENTS_SELECT}function uwo(){let e=$e(process.env[mjn]);return delete process.env[mjn],e}
export{F0t,UE,lwo,$0t,Ftn,L9e,bX,N9e,dwo,KTr,vf,Ife,vEe,F9e,mjn,qTr,cwo,uwo};
