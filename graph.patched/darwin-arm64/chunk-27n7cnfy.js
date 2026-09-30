// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{a}from"./chunk-1fpwxv0g.js";import{Os}from"./chunk-er6f56rj.js";import{r9e,GNt,u5,ZFe,kut}from"./chunk-rgfmprrn.js";import{to}from"./chunk-pj3wn6z3.js";var QNr={};to(QNr,{HOOKS_MODULES_ENV_SOURCE:()=>YNr,HOOKS_MODULES_FLAG:()=>r9e,HOOKS_MODULES_FLAG_SOURCE:()=>XNr,canLaunchLoadUserHooksModules:()=>ZFe,canLoadUserHooksModules:()=>kut,default:()=>QNr,hooksModulesFlagDefault:()=>GNt,hooksModulesRolloutOn:()=>u5,hooksModulesRolloutSource:()=>JNr});var YNr="overridden by the CLAUDE_CODE_ENABLE_FUNCTION_HOOKS environment variable";var XNr={override:"from a local override",payload:"from GrowthBook (this session's payload)",disk:"from GrowthBook (the disk cache of an earlier session)",disabled:"from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)",fallback:"from the default (a cold GrowthBook cache, no payload yet)"};function JNr(){return a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS!==void 0?YNr:XNr[Os(r9e,GNt()).source]}export{YNr,XNr,JNr,QNr};
