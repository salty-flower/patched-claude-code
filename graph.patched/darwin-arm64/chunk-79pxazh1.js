// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Vp,P}from"./chunk-g4c6ggz4.js";import{Oe}from"./chunk-vx7e38ke.js";import{a,zn}from"./chunk-wkhfcbsj.js";import{$g}from"./chunk-qmm87fyw.js";import{_A}from"./chunk-a38xyc22.js";function Dqe(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(_A()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function F_(){return!Dqe()}async function Lqe(e={}){if(_A()===null){let{getSettingsWithErrors:t}=await import("./chunk-1ztvzkad.js");t()}if(e.kickGrowthBook!==!1)Vp().catch(()=>{})}function Dpt(){return zn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||P("tengu_fleet_past_sessions",!1)}function dMe(){return F_()}function oQ(){return!1}function Lve(){return P("tengu_amber_anchor",!1)}function a4n(){return P("tengu_copper_lantern",!1)}function $9r(){return P("tengu_quiet_harbor",!1)?"ask":"transient"}function $u(){return Lve()?"daemon":"background service"}function sQ(){return $g($u())}function Poe(e){return dMe()?` \u2014 run 'claude daemon ${e}'`:""}function Mve(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var bUt="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function Wun(){return!1}function l4n(){return!!a.CLAUDE_AGENTS_SELECT}function c4n(){let e=Oe(process.env[bUt]);return delete process.env[bUt],e}
export{Dqe,F_,Lqe,Dpt,dMe,oQ,Lve,a4n,$9r,$u,sQ,Poe,Mve,bUt,Wun,l4n,c4n};
