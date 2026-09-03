// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Gm,P}from"./chunk-h6md7820.js";import{Le}from"./chunk-5e3knf27.js";import{a,Yn}from"./chunk-pv906ex9.js";import{vm}from"./chunk-qkcr56w2.js";import{MT}from"./chunk-tgbc60ar.js";function dFe(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(MT()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function by(){return!dFe()}async function pFe(e={}){if(MT()===null){let{getSettingsWithErrors:t}=await import("./chunk-tq5csfqc.js");t()}if(e.kickGrowthBook!==!1)Gm().catch(()=>{})}function xYe(){return Yn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||P("tengu_fleet_past_sessions",!1)}function WCe(){return by()}function PK(){return!1}function cme(){return P("tengu_amber_anchor",!1)}function _wn(){return P("tengu_copper_lantern",!1)}function mHr(){return P("tengu_quiet_harbor",!1)?"ask":"transient"}function Hc(){return cme()?"daemon":"background service"}function OK(){return vm(Hc())}function DJ(e){return WCe()?` \u2014 run 'claude daemon ${e}'`:""}function ume(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var bwt="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function Uqt(){return!1}function gHr(e){return!1}function ywn(){return!!a.CLAUDE_AGENTS_SELECT}function Swn(){let e=Le(process.env[bwt]);return delete process.env[bwt],e}
export{dFe,by,pFe,xYe,WCe,PK,cme,_wn,mHr,Hc,OK,DJ,ume,bwt,Uqt,gHr,ywn,Swn};
