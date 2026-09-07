// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{vm,I}from"./chunk-n495pc0t.js";import{Ie}from"./chunk-fkz3e4t3.js";import{a,Yn}from"./chunk-dq2s4wjn.js";import{lm}from"./chunk-j317bre5.js";import{gw}from"./chunk-sxccpdbg.js";function lFe(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(gw()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function K_(){return!lFe()}async function cFe(e={}){if(gw()===null){let{getSettingsWithErrors:t}=await import("./chunk-pjc7vxz0.js");t()}if(e.kickGrowthBook!==!1)vm().catch(()=>{})}function JXe(){return Yn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||I("tengu_fleet_past_sessions",!1)}function kCe(){return K_()}function hK(){return!1}function kfe(){return I("tengu_amber_anchor",!1)}function lTn(){return I("tengu_copper_lantern",!1)}function mgr(){return I("tengu_quiet_harbor",!1)?"ask":"transient"}function Rc(){return kfe()?"daemon":"background service"}function _K(){return lm(Rc())}function lJ(e){return kCe()?` \u2014 run 'claude daemon ${e}'`:""}function xfe(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var sTt="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function pqt(){return!1}function ggr(e){return!1}function cTn(){return!!a.CLAUDE_AGENTS_SELECT}function uTn(){let e=Ie(process.env[sTt]);return delete process.env[sTt],e}
export{lFe,K_,cFe,JXe,kCe,hK,kfe,lTn,mgr,Rc,_K,lJ,xfe,sTt,pqt,ggr,cTn,uTn};
