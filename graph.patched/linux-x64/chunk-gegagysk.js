// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{qi,k}from"./chunk-k16gymf7.js";import{$e}from"./chunk-rs6p8dg3.js";import{a,nr}from"./chunk-xwn0mfnc.js";import{ja}from"./chunk-b9getfsf.js";import{FL}from"./chunk-9t95885m.js";function kIt(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(FL()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function Ev(){return!kIt()}var i="tengu_fleetview_simple";function Cpo(){return a.CLAUDE_CODE_FLEETVIEW_SIMPLE||k(i,!1)}async function TIt(e={}){if(FL()===null){let{getSettingsWithErrors:t}=await import("./chunk-kmbe83t5.js");t()}if(e.kickGrowthBook!==!1)qi().catch(()=>{})}function AQt(){return nr.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||k("tengu_fleet_past_sessions",!1)}function y6e(){return Ev()}function _9(){return!1}function _6e(){return k("tengu_amber_anchor",!1)}function Rpo(){return k("tengu_copper_lantern",!1)}function s(){return k("tengu_quiet_harbor",!1)?"ask":"transient"}function ISr(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let t=FL()?.settings.daemonColdStart;if(t!==void 0)return t;return s()}function df(){return _6e()?"daemon":"background service"}function tpe(){return ja(df())}function YSe(e){return y6e()?` \u2014 run 'claude daemon ${e}'`:""}function b6e(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var qNn="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function OSr(){return!1}function xpo(){return!!a.CLAUDE_AGENTS_SELECT}function Ppo(){let e=$e(process.env[qNn]);return delete process.env[qNn],e}
export{kIt,Ev,Cpo,TIt,AQt,y6e,_9,_6e,Rpo,ISr,df,tpe,YSe,b6e,qNn,OSr,xpo,Ppo};
