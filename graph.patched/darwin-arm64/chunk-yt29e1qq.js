// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Df,H}from"./chunk-e02s7cks.js";import{Ie}from"./chunk-8yfx63va.js";import{a,Rn}from"./chunk-dv6tepz3.js";import{Bm}from"./chunk-wbbe5mtc.js";import{RE}from"./chunk-ysx7ez10.js";function nje(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(RE()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function L_(){return!nje()}async function rje(e={}){if(RE()===null){let{getSettingsWithErrors:t}=await import("./chunk-xnj6hw18.js");t()}if(e.kickGrowthBook!==!1)Df().catch(()=>{})}function qtt(){return Rn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||H("tengu_fleet_past_sessions",!1)}function Txe(){return L_()}function I8(){return!1}function Jhe(){return H("tengu_amber_anchor",!1)}function w0n(){return H("tengu_copper_lantern",!1)}function hRr(){return H("tengu_quiet_harbor",!1)?"ask":"transient"}function Kc(){return Jhe()?"daemon":"background service"}function O8(){return Bm(Kc())}function TZ(e){return Txe()?` \u2014 run 'claude daemon ${e}'`:""}function Qhe(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var ORt="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function $Yt(){return!1}function yRr(e){return!1}function E0n(){return!!a.CLAUDE_AGENTS_SELECT}function A0n(){let e=Ie(process.env[ORt]);return delete process.env[ORt],e}
export{nje,L_,rje,qtt,Txe,I8,Jhe,w0n,hRr,Kc,O8,TZ,Qhe,ORt,$Yt,yRr,E0n,A0n};
