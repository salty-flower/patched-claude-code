// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{w_,x}from"./chunk-ghnc2x4f.js";import{De}from"./chunk-vpkz5m05.js";import{a,Bn}from"./chunk-bn8q5mbz.js";import{bf}from"./chunk-hp9wjta4.js";import{HS}from"./chunk-2694tw3t.js";function uHe(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(HS()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function Fg(){return!uHe()}async function dHe(e={}){if(HS()===null){let{getSettingsWithErrors:t}=await import("./chunk-va8qt324.js");t()}if(e.kickGrowthBook!==!1)w_().catch(()=>{})}function qqe(){return Bn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||x("tengu_fleet_past_sessions",!1)}function SSe(){return Fg()}function yz(){return!1}function ice(){return x("tengu_amber_anchor",!1)}function Cpn(){return x("tengu_copper_lantern",!1)}function mbr(){return x("tengu_quiet_harbor",!1)?"ask":"transient"}function kc(){return ice()?"daemon":"background service"}function _z(){return bf(kc())}function Nee(e){return SSe()?` \u2014 run 'claude daemon ${e}'`:""}function sce(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var pht="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function X2t(){return!1}function hbr(e){return!1}function Apn(){return!!a.CLAUDE_AGENTS_SELECT}function kpn(){let e=De(process.env[pht]);return delete process.env[pht],e}
export{uHe,Fg,dHe,qqe,SSe,yz,ice,Cpn,mbr,kc,_z,Nee,sce,pht,X2t,hbr,Apn,kpn};
