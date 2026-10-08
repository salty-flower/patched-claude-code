// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Na,T}from"./chunk-cxjvwxsa.js";import{De}from"./chunk-ndcqd6bh.js";import{a,Bn}from"./chunk-rptge3r8.js";import{Ma}from"./chunk-2j48j0j1.js";import{QH}from"./chunk-8ky01sys.js";function hSt(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(QH()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function BS(){return!hSt()}async function ySt(e={}){if(QH()===null){let{getSettingsWithErrors:n}=await import("./chunk-bctebss4.js");n()}if(e.kickGrowthBook!==!1)Na().catch(()=>{})}function tqt(){return Bn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||T("tengu_fleet_past_sessions",!1)}function Eze(){return BS()}function I6(){return!1}function kze(){return T("tengu_amber_anchor",!1)}function z3r(){return T("tengu_copper_lantern",!1)}function i(){return T("tengu_quiet_harbor",!1)?"ask":"transient"}function Crr(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let n=QH()?.settings.daemonColdStart;if(n!==void 0)return n;return i()}function Nf(){return kze()?"daemon":"background service"}function Hie(){return Ma(Nf())}function Gme(e){return Eze()?` \u2014 run 'claude daemon ${e}'`:""}function Tze(e,n){let o=n??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var SEn="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function Rrr(){return!1}function G3r(){return!!a.CLAUDE_AGENTS_SELECT}function q3r(){let e=De(process.env[SEn]);return delete process.env[SEn],e}
export{hSt,BS,ySt,tqt,Eze,I6,kze,z3r,Crr,Nf,Hie,Gme,Tze,SEn,Rrr,G3r,q3r};
