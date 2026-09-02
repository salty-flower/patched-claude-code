// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{mh,I}from"./chunk-bsdtxcdc.js";import{Me}from"./chunk-5b2g0bc6.js";import{a,Zn}from"./chunk-w3k8bej2.js";import{jf}from"./chunk-04aem4bh.js";import{Sw}from"./chunk-4k4029wq.js";function iMe(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(Sw()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function cy(){return!iMe()}async function sMe(e={}){if(Sw()===null){let{getSettingsWithErrors:t}=await import("./chunk-fs3533ws.js");t()}if(e.kickGrowthBook!==!1)mh().catch(()=>{})}function l8e(){return Zn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||I("tengu_fleet_past_sessions",!1)}function bEe(){return cy()}function TV(){return!1}function Pde(){return I("tengu_amber_anchor",!1)}function Syn(){return I("tengu_copper_lantern",!1)}function Vvr(){return I("tengu_quiet_harbor",!1)?"ask":"transient"}function ou(){return Pde()?"daemon":"background service"}function EV(){return jf(ou())}function rre(e){return bEe()?` \u2014 run 'claude daemon ${e}'`:""}function Dde(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var sSt="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function h9t(){return!1}function Kvr(e){return!1}function byn(){return!!a.CLAUDE_AGENTS_SELECT}function wyn(){let e=Me(process.env[sSt]);return delete process.env[sSt],e}
export{iMe,cy,sMe,l8e,bEe,TV,Pde,Syn,Vvr,ou,EV,rre,Dde,sSt,h9t,Kvr,byn,wyn};
