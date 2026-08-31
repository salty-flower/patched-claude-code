// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{mh,x}from"./chunk-1e5y3pjf.js";import{Me}from"./chunk-7s3c5qqq.js";import{a,Zn}from"./chunk-m9gbfvns.js";import{Up}from"./chunk-764j5mtt.js";import{bH}from"./chunk-kc505vjh.js";function nMe(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(bH()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function l_(){return!nMe()}async function rMe(e={}){if(bH()===null){let{getSettingsWithErrors:t}=await import("./chunk-gt494dkz.js");t()}if(e.kickGrowthBook!==!1)mh().catch(()=>{})}function s6e(){return Zn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||x("tengu_fleet_past_sessions",!1)}function hEe(){return l_()}function b5(){return!1}function Cde(){return x("tengu_amber_anchor",!1)}function h_n(){return x("tengu_copper_lantern",!1)}function Fkr(){return x("tengu_quiet_harbor",!1)?"ask":"transient"}function ou(){return Cde()?"daemon":"background service"}function S5(){return Up(ou())}function ere(e){return hEe()?` \u2014 run 'claude daemon ${e}'`:""}function Ide(e,t){let o=t??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var rbt="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function mWt(){return!1}function Bkr(e){return!1}function y_n(){return!!a.CLAUDE_AGENTS_SELECT}function __n(){let e=Me(process.env[rbt]);return delete process.env[rbt],e}
export{nMe,l_,rMe,s6e,hEe,b5,Cde,h_n,Fkr,ou,S5,ere,Ide,rbt,mWt,Bkr,y_n,__n};
