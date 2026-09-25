// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{a}from"./chunk-3a4khaz5.js";import{Gr}from"./chunk-gtx2njpm.js";import{rh,Bw}from"./chunk-h8x3acbh.js";import{Ol,x}from"./chunk-twxt3h9y.js";import{Ro}from"./chunk-q9zds4dm.js";var Dvr={};Ro(Dvr,{HOOKS_MODULES_ENV_SOURCE:()=>Ivr,HOOKS_MODULES_FLAG:()=>hst,HOOKS_MODULES_FLAG_SOURCE:()=>Hvr,canLoadUserHooksModules:()=>Pvr,default:()=>Dvr,hooksModulesFlagDefault:()=>dnn,hooksModulesRolloutOn:()=>tve,hooksModulesRolloutSource:()=>Ovr});var hst="tengu_plugin_hooks_modules";var dnn=()=>!1;var tve=()=>a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS??x(hst,dnn());var Pvr=()=>tve()&&!Bw()&&!Gr("hooks")&&!rh();var Ivr="overridden by the CLAUDE_CODE_ENABLE_FUNCTION_HOOKS environment variable";var Hvr={override:"from a local override",payload:"from GrowthBook (this session's payload)",disk:"from GrowthBook (the disk cache of an earlier session)",disabled:"from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)",fallback:"from the default (a cold GrowthBook cache, no payload yet)"};function Ovr(){return a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS!==void 0?Ivr:Hvr[Ol(hst,dnn()).source]}export{hst,dnn,tve,Pvr,Ivr,Hvr,Ovr,Dvr};
