// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Mp,x}from"./chunk-twxt3h9y.js";import{Oe}from"./chunk-6cqmwr9m.js";import{a,On}from"./chunk-3a4khaz5.js";import{Nf}from"./chunk-j370x2tz.js";import{UP}from"./chunk-aneqvevx.js";function qet(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(UP()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function vb(){return!qet()}async function Ket(e={}){if(UP()===null){let{getSettingsWithErrors:n}=await import("./chunk-ja1chgm1.js");n()}if(e.kickGrowthBook!==!1)Mp().catch(()=>{})}function nAt(){return On.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||x("tengu_fleet_past_sessions",!1)}function c6e(){return vb()}function doe(){return!1}function m0e(){return x("tengu_amber_anchor",!1)}function nfr(){return x("tengu_copper_lantern",!1)}function i(){return x("tengu_quiet_harbor",!1)?"ask":"transient"}function WIn(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let n=UP()?.settings.daemonColdStart;if(n!==void 0)return n;return i()}function Rp(){return m0e()?"daemon":"background service"}function uoe(){return Nf(Rp())}function Hue(e){return c6e()?` \u2014 run 'claude daemon ${e}'`:""}function g0e(e,n){let o=n??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var J8t="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function GIn(){return!1}function rfr(){return!!a.CLAUDE_AGENTS_SELECT}function ofr(){let e=Oe(process.env[J8t]);return delete process.env[J8t],e}
export{qet,vb,Ket,nAt,c6e,doe,m0e,nfr,WIn,Rp,uoe,Hue,g0e,J8t,GIn,rfr,ofr};
