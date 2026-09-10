// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Om,I}from"./chunk-ce4ppmnp.js";import{a}from"./chunk-1bwwmttj.js";import{zr}from"./chunk-t0jx10cw.js";import{gh,pv}from"./chunk-cdnvp3zv.js";var jEt="tengu_plugin_hooks_modules";var o=()=>!1;var M7e=()=>a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS??I(jEt,o());var r="overridden by the CLAUDE_CODE_ENABLE_FUNCTION_HOOKS environment variable";var e={override:"from a local override",payload:"from GrowthBook (this session's payload)",disk:"from GrowthBook (the disk cache of an earlier session)",disabled:"from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)",fallback:"from the default (a cold GrowthBook cache, no payload yet)"};function ivr(){return a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS!==void 0?r:e[Om(jEt,o()).source]}var svr=()=>M7e()&&!pv()&&!zr("hooks")&&!gh();export{jEt,M7e,svr,ivr};
