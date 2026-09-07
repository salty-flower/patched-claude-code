// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Am,x}from"./chunk-3e93vkg3.js";import{xe}from"./chunk-mnk1rjxv.js";import{a,Xn}from"./chunk-td8fcebs.js";import{sm}from"./chunk-hvf4zpd9.js";import{mH}from"./chunk-qyjj7h0q.js";function YNe(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(mH()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function zy(){return!YNe()}async function XNe(e={}){if(mH()===null){let{getSettingsWithErrors:t}=await import("./chunk-s4t8rm05.js");t()}if(e.kickGrowthBook!==!1)Am().catch(()=>{})}function MXe(){return Xn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||x("tengu_fleet_past_sessions",!1)}function bve(){return zy()}function l8(){return!1}function Hpe(){return x("tengu_amber_anchor",!1)}function DHn(){return x("tengu_copper_lantern",!1)}function Tmr(){return x("tengu_quiet_harbor",!1)?"ask":"transient"}function vc(){return Hpe()?"daemon":"background service"}function c8(){return sm(vc())}function e7(e){return bve()?` \u2014 run 'claude daemon ${e}'`:""}function wpe(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var UHt="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function Wqt(){return!1}function Cmr(e){return!1}function $Hn(){return!!a.CLAUDE_AGENTS_SELECT}function MHn(){let e=xe(process.env[UHt]);return delete process.env[UHt],e}
export{YNe,zy,XNe,MXe,bve,l8,Hpe,DHn,Tmr,vc,c8,e7,wpe,UHt,Wqt,Cmr,$Hn,MHn};
