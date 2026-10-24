// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ti,k}from"./chunk-27xjmczp.js";import{Ne}from"./chunk-9s1z8ttt.js";import{i,Zn}from"./chunk-9a41hw1t.js";import{va}from"./chunk-j79dwkaq.js";import{VF}from"./chunk-t4r22my8.js";function O$t(){return r()!==null}function r(){if(i.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(VF()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function Rv(){return!O$t()}var s="tengu_fleetview_simple";function IOo(){return i.CLAUDE_CODE_FLEETVIEW_SIMPLE||k(s,!1)}async function M$t(e={}){if(VF()===null){let{getSettingsWithErrors:t}=await import("./chunk-s893dt1e.js");t()}if(e.kickGrowthBook!==!1)Ti().catch(()=>{})}function jan(){return Zn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||k("tengu_fleet_past_sessions",!1)}function rJe(){return Rv()}function yJ(){return!1}function oJe(){return k("tengu_amber_anchor",!1)}function OOo(){return k("tengu_copper_lantern",!1)}function a(){return k("tengu_quiet_harbor",!1)?"ask":"transient"}function GDr(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let t=VF()?.settings.daemonColdStart;if(t!==void 0)return t;return a()}function Qf(){return oJe()?"daemon":"background service"}function mhe(){return va(Qf())}function gCe(e){return rJe()?` \u2014 run 'claude daemon ${e}'`:""}function sJe(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var JKn="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function zDr(){return!1}function MOo(){return!!i.CLAUDE_AGENTS_SELECT}function HOo(){let e=Ne(process.env[JKn]);return delete process.env[JKn],e}
export{O$t,Rv,IOo,M$t,jan,rJe,yJ,oJe,OOo,GDr,Qf,mhe,gCe,sJe,JKn,zDr,MOo,HOo};
