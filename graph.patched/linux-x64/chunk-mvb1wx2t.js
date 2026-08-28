// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{wb,x}from"./chunk-ns0ekkj0.js";import{Pe}from"./chunk-gqqx2ybk.js";import{a,Bn}from"./chunk-g0kfvhx3.js";import{bf}from"./chunk-2h7wbm8s.js";import{Dv}from"./chunk-a891q37t.js";function lDe(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(Dv()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function $g(){return!lDe()}async function cDe(e={}){if(Dv()===null){let{getSettingsWithErrors:t}=await import("./chunk-8d8cw7t1.js");t()}if(e.kickGrowthBook!==!1)wb().catch(()=>{})}function GVe(){return Bn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||x("tengu_fleet_past_sessions",!1)}function gve(){return $g()}function mq(){return!1}function ece(){return x("tengu_amber_anchor",!1)}function wpn(){return x("tengu_copper_lantern",!1)}function s_r(){return x("tengu_quiet_harbor",!1)?"ask":"transient"}function Hc(){return ece()?"daemon":"background service"}function hq(){return bf(Hc())}function Dee(e){return gve()?` \u2014 run 'claude daemon ${e}'`:""}function tce(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var uht="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function KBt(){return!1}function a_r(e){return!1}function Epn(){return!!a.CLAUDE_AGENTS_SELECT}function Apn(){let e=Pe(process.env[uht]);return delete process.env[uht],e}
export{lDe,$g,cDe,GVe,gve,mq,ece,wpn,s_r,Hc,hq,Dee,tce,uht,KBt,a_r,Epn,Apn};
