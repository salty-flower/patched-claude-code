// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Pa,k}from"./chunk-s46qgfx7.js";import{Le}from"./chunk-29aedz4e.js";import{a,Un}from"./chunk-j77txbjn.js";import{va}from"./chunk-fqzh3zpr.js";import{wH}from"./chunk-9s9xt61j.js";function ryt(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(wH()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function Pb(){return!ryt()}async function oyt(e={}){if(wH()===null){let{getSettingsWithErrors:n}=await import("./chunk-md2j9avw.js");n()}if(e.kickGrowthBook!==!1)Pa().catch(()=>{})}function f2t(){return Un.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||k("tengu_fleet_past_sessions",!1)}function ZBe(){return Pb()}function R3(){return!1}function eje(){return k("tengu_amber_anchor",!1)}function D6r(){return k("tengu_copper_lantern",!1)}function i(){return k("tengu_quiet_harbor",!1)?"ask":"transient"}function IJn(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let n=wH()?.settings.daemonColdStart;if(n!==void 0)return n;return i()}function Pf(){return eje()?"daemon":"background service"}function lse(){return va(Pf())}function ufe(e){return ZBe()?` \u2014 run 'claude daemon ${e}'`:""}function tje(e,n){let o=n??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var sSn="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function OJn(){return!1}function L6r(){return!!a.CLAUDE_AGENTS_SELECT}function N6r(){let e=Le(process.env[sSn]);return delete process.env[sSn],e}
export{ryt,Pb,oyt,f2t,ZBe,R3,eje,D6r,IJn,Pf,lse,ufe,tje,sSn,OJn,L6r,N6r};
