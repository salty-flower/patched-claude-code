// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{xa,T}from"./chunk-m0sj7y8g.js";import{Le}from"./chunk-918t5khf.js";import{a,Un}from"./chunk-869zfth6.js";import{va}from"./chunk-z6am4wsr.js";import{yH}from"./chunk-06vaaw45.js";function qht(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(yH()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function xS(){return!qht()}async function Vht(e={}){if(yH()===null){let{getSettingsWithErrors:n}=await import("./chunk-c1041r3m.js");n()}if(e.kickGrowthBook!==!1)xa().catch(()=>{})}function Zjt(){return Un.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||T("tengu_fleet_past_sessions",!1)}function G1e(){return xS()}function S3(){return!1}function q1e(){return T("tengu_amber_anchor",!1)}function a2r(){return T("tengu_copper_lantern",!1)}function i(){return T("tengu_quiet_harbor",!1)?"ask":"transient"}function dQn(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let n=yH()?.settings.daemonColdStart;if(n!==void 0)return n;return i()}function Pf(){return q1e()?"daemon":"background service"}function nse(){return va(Pf())}function sfe(e){return G1e()?` \u2014 run 'claude daemon ${e}'`:""}function V1e(e,n){let o=n??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var U_n="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function uQn(){return!1}function l2r(){return!!a.CLAUDE_AGENTS_SELECT}function c2r(){let e=Le(process.env[U_n]);return delete process.env[U_n],e}
export{qht,xS,Vht,Zjt,G1e,S3,q1e,a2r,dQn,Pf,nse,sfe,V1e,U_n,uQn,l2r,c2r};
