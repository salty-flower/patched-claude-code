// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{hp,x}from"./chunk-er6f56rj.js";import{Le}from"./chunk-g5e6pf8s.js";import{a,In}from"./chunk-1fpwxv0g.js";import{om}from"./chunk-62dhtzrb.js";import{ZI}from"./chunk-vratfdfe.js";function tat(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(ZI()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function fS(){return!tat()}async function nat(e={}){if(ZI()===null){let{getSettingsWithErrors:n}=await import("./chunk-a7mqn1zp.js");n()}if(e.kickGrowthBook!==!1)hp().catch(()=>{})}function oHt(){return In.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||x("tengu_fleet_past_sessions",!1)}function R3e(){return fS()}function oV(){return!1}function lLe(){return x("tengu_amber_anchor",!1)}function Fkr(){return x("tengu_copper_lantern",!1)}function i(){return x("tengu_quiet_harbor",!1)?"ask":"transient"}function FBn(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let n=ZI()?.settings.daemonColdStart;if(n!==void 0)return n;return i()}function Hp(){return lLe()?"daemon":"background service"}function $ee(){return om(Hp())}function ule(e){return R3e()?` \u2014 run 'claude daemon ${e}'`:""}function cLe(e,n){let o=n??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var qrn="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function $Bn(){return!1}function $kr(){return!!a.CLAUDE_AGENTS_SELECT}function Ukr(){let e=Le(process.env[qrn]);return delete process.env[qrn],e}
export{tat,fS,nat,oHt,R3e,oV,lLe,Fkr,FBn,Hp,$ee,ule,cLe,qrn,$Bn,$kr,Ukr};
