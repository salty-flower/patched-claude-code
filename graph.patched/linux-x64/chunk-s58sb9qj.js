// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{a}from"./chunk-q2vrcqny.js";import{Br}from"./chunk-2h50aq1w.js";import{Hm,yb}from"./chunk-rch5enmq.js";import{qp,P}from"./chunk-30p0nwys.js";import{Wi}from"./chunk-bbmh8g33.js";var RKn={};Wi(RKn,{HOOKS_MODULES_ENV_SOURCE:()=>AKn,HOOKS_MODULES_FLAG:()=>_3e,HOOKS_MODULES_FLAG_SOURCE:()=>TKn,canLoadUserHooksModules:()=>kEe,default:()=>RKn,hooksModulesFlagDefault:()=>tUt,hooksModulesRolloutOn:()=>eLe,hooksModulesRolloutSource:()=>CKn});var _3e="tengu_plugin_hooks_modules";var tUt=()=>!1;var eLe=()=>a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS??P(_3e,tUt());var kEe=()=>eLe()&&!yb()&&!Br("hooks")&&!Hm();var AKn="overridden by the CLAUDE_CODE_ENABLE_FUNCTION_HOOKS environment variable";var TKn={override:"from a local override",payload:"from GrowthBook (this session's payload)",disk:"from GrowthBook (the disk cache of an earlier session)",disabled:"from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)",fallback:"from the default (a cold GrowthBook cache, no payload yet)"};function CKn(){return a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS!==void 0?AKn:TKn[qp(_3e,tUt()).source]}export{_3e,tUt,eLe,kEe,AKn,TKn,CKn,RKn};
