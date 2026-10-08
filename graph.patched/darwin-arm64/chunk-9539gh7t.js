// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Fa,C}from"./chunk-gcyvvtkw.js";import{Le}from"./chunk-63vja5td.js";import{a,Bn}from"./chunk-70qqbqq4.js";import{Ma}from"./chunk-v2r1tbj3.js";import{nM}from"./chunk-2r0ph8pf.js";function vbt(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(nM()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function jb(){return!vbt()}async function kbt(e={}){if(nM()===null){let{getSettingsWithErrors:n}=await import("./chunk-s2g16dk6.js");n()}if(e.kickGrowthBook!==!1)Fa().catch(()=>{})}function fzt(){return Bn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||C("tengu_fleet_past_sessions",!1)}function PWe(){return jb()}function F4(){return!1}function IWe(){return C("tengu_amber_anchor",!1)}function h9r(){return C("tengu_copper_lantern",!1)}function i(){return C("tengu_quiet_harbor",!1)?"ask":"transient"}function Wrr(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let n=nM()?.settings.daemonColdStart;if(n!==void 0)return n;return i()}function Nf(){return IWe()?"daemon":"background service"}function Uie(){return Ma(Nf())}function Xme(e){return PWe()?` \u2014 run 'claude daemon ${e}'`:""}function OWe(e,n){let o=n??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var Nvn="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function Grr(){return!1}function y9r(){return!!a.CLAUDE_AGENTS_SELECT}function _9r(){let e=Le(process.env[Nvn]);return delete process.env[Nvn],e}
export{vbt,jb,kbt,fzt,PWe,F4,IWe,h9r,Wrr,Nf,Uie,Xme,OWe,Nvn,Grr,y9r,_9r};
