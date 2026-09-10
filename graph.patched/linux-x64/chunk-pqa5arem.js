// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Mf,I}from"./chunk-ce4ppmnp.js";import{He}from"./chunk-d8qjp6nk.js";import{a,Rn}from"./chunk-1bwwmttj.js";import{Nm}from"./chunk-cmg3b5hg.js";import{Cv}from"./chunk-8fer6cmv.js";function Wje(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(Cv()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function H_(){return!Wje()}async function Gje(e={}){if(Cv()===null){let{getSettingsWithErrors:t}=await import("./chunk-yjq8982j.js");t()}if(e.kickGrowthBook!==!1)Mf().catch(()=>{})}function Htt(){return Rn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||I("tengu_fleet_past_sessions",!1)}function yxe(){return H_()}function k9(){return!1}function zhe(){return I("tengu_amber_anchor",!1)}function KIn(){return I("tengu_copper_lantern",!1)}function ICr(){return I("tengu_quiet_harbor",!1)?"ask":"transient"}function Vc(){return zhe()?"daemon":"background service"}function A9(){return Nm(Vc())}function bZ(e){return yxe()?` \u2014 run 'claude daemon ${e}'`:""}function Whe(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var hRt="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function _Yt(){return!1}function PCr(e){return!1}function YIn(){return!!a.CLAUDE_AGENTS_SELECT}function XIn(){let e=He(process.env[hRt]);return delete process.env[hRt],e}
export{Wje,H_,Gje,Htt,yxe,k9,zhe,KIn,ICr,Vc,A9,bZ,Whe,hRt,_Yt,PCr,YIn,XIn};
