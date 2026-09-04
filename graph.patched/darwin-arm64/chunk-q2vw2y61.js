// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{zm,P}from"./chunk-vtwn1md5.js";import{De}from"./chunk-h4q6j5r2.js";import{a,Xn}from"./chunk-g2ngvza5.js";import{km}from"./chunk-y5gt0775.js";import{Vw}from"./chunk-v3s7w1dm.js";function B$e(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(Vw()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function ky(){return!B$e()}async function j$e(e={}){if(Vw()===null){let{getSettingsWithErrors:t}=await import("./chunk-wy9vekwd.js");t()}if(e.kickGrowthBook!==!1)zm().catch(()=>{})}function oQe(){return Xn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||P("tengu_fleet_past_sessions",!1)}function iRe(){return ky()}function d5(){return!1}function tge(){return P("tengu_amber_anchor",!1)}function cCn(){return P("tengu_copper_lantern",!1)}function sOr(){return P("tengu_quiet_harbor",!1)?"ask":"transient"}function Nc(){return tge()?"daemon":"background service"}function p5(){return km(Nc())}function yQ(e){return iRe()?` \u2014 run 'claude daemon ${e}'`:""}function nge(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var aAt="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function Vzt(){return!1}function aOr(e){return!1}function uCn(){return!!a.CLAUDE_AGENTS_SELECT}function dCn(){let e=De(process.env[aAt]);return delete process.env[aAt],e}
export{B$e,ky,j$e,oQe,iRe,d5,tge,cCn,sOr,Nc,p5,yQ,nge,aAt,Vzt,aOr,uCn,dCn};
