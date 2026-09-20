// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{a}from"./chunk-wkhfcbsj.js";import{Br}from"./chunk-pt9thc2d.js";import{Om,SS}from"./chunk-rdygj5c6.js";import{qp,P}from"./chunk-g4c6ggz4.js";import{Gi}from"./chunk-y8wd7we8.js";var t4n={};Gi(t4n,{HOOKS_MODULES_ENV_SOURCE:()=>QVn,HOOKS_MODULES_FLAG:()=>Iqe,HOOKS_MODULES_FLAG_SOURCE:()=>ZVn,canLoadUserHooksModules:()=>Ove,default:()=>t4n,hooksModulesFlagDefault:()=>_Ut,hooksModulesRolloutOn:()=>cMe,hooksModulesRolloutSource:()=>e4n});var Iqe="tengu_plugin_hooks_modules";var _Ut=()=>!1;var cMe=()=>a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS??P(Iqe,_Ut());var Ove=()=>cMe()&&!SS()&&!Br("hooks")&&!Om();var QVn="overridden by the CLAUDE_CODE_ENABLE_FUNCTION_HOOKS environment variable";var ZVn={override:"from a local override",payload:"from GrowthBook (this session's payload)",disk:"from GrowthBook (the disk cache of an earlier session)",disabled:"from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)",fallback:"from the default (a cold GrowthBook cache, no payload yet)"};function e4n(){return a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS!==void 0?QVn:ZVn[qp(Iqe,_Ut()).source]}export{Iqe,_Ut,cMe,Ove,QVn,ZVn,e4n,t4n};
