// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{va,k}from"./chunk-bk5ct2gw.js";import{Ne}from"./chunk-fdxhcr6b.js";import{a,Yn}from"./chunk-yvnhkg35.js";import{Ta}from"./chunk-ax7r0qj7.js";import{_D}from"./chunk-wtch2p0g.js";function Tkt(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(_D()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function gw(){return!Tkt()}async function Rkt(e={}){if(_D()===null){let{getSettingsWithErrors:n}=await import("./chunk-6pgt1xqz.js");n()}if(e.kickGrowthBook!==!1)va().catch(()=>{})}function Z3t(){return Yn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||k("tengu_fleet_past_sessions",!1)}function H6e(){return gw()}function n9(){return!1}function M6e(){return k("tengu_amber_anchor",!1)}function fZr(){return k("tengu_copper_lantern",!1)}function i(){return k("tengu_quiet_harbor",!1)?"ask":"transient"}function Vcr(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let n=_D()?.settings.daemonColdStart;if(n!==void 0)return n;return i()}function tm(){return M6e()?"daemon":"background service"}function Ble(){return Ta(tm())}function yye(e){return H6e()?` \u2014 run 'claude daemon ${e}'`:""}function D6e(e,n){let o=n??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var xxn="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function qcr(){return!1}function mZr(){return!!a.CLAUDE_AGENTS_SELECT}function gZr(){let e=Ne(process.env[xxn]);return delete process.env[xxn],e}
export{Tkt,gw,Rkt,Z3t,H6e,n9,M6e,fZr,Vcr,tm,Ble,yye,D6e,xxn,qcr,mZr,gZr};
