// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Gp,P}from"./chunk-30p0nwys.js";import{Oe}from"./chunk-gj513b2z.js";import{a,Wn}from"./chunk-q2vrcqny.js";import{$g}from"./chunk-847hpqqs.js";import{gk}from"./chunk-h4q23q42.js";function T3e(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(gk()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function N_(){return!T3e()}async function C3e(e={}){if(gk()===null){let{getSettingsWithErrors:t}=await import("./chunk-gsvg215n.js");t()}if(e.kickGrowthBook!==!1)Gp().catch(()=>{})}function Cpt(){return Wn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||P("tengu_fleet_past_sessions",!1)}function sLe(){return N_()}function tQ(){return!1}function TEe(){return P("tengu_amber_anchor",!1)}function XKn(){return P("tengu_copper_lantern",!1)}function r5r(){return P("tengu_quiet_harbor",!1)?"ask":"transient"}function Fu(){return TEe()?"daemon":"background service"}function nQ(){return $g(Fu())}function Coe(e){return sLe()?` \u2014 run 'claude daemon ${e}'`:""}function CEe(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var iUt="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function Mun(){return!1}function JKn(){return!!a.CLAUDE_AGENTS_SELECT}function QKn(){let e=Oe(process.env[iUt]);return delete process.env[iUt],e}
export{T3e,N_,C3e,Cpt,sLe,tQ,TEe,XKn,r5r,Fu,nQ,Coe,CEe,iUt,Mun,JKn,QKn};
