// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Mm,H}from"./chunk-e02s7cks.js";import{a}from"./chunk-dv6tepz3.js";import{Wr}from"./chunk-sy04nkmj.js";import{hh,fE}from"./chunk-ksfba0x2.js";var lvt="tengu_plugin_hooks_modules";var o=()=>!1;var XJe=()=>a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS??H(lvt,o());var r="overridden by the CLAUDE_CODE_ENABLE_FUNCTION_HOOKS environment variable";var e={override:"from a local override",payload:"from GrowthBook (this session's payload)",disk:"from GrowthBook (the disk cache of an earlier session)",disabled:"from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)",fallback:"from the default (a cold GrowthBook cache, no payload yet)"};function GEr(){return a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS!==void 0?r:e[Mm(lvt,o()).source]}var zEr=()=>XJe()&&!fE()&&!Wr("hooks")&&!hh();export{lvt,XJe,zEr,GEr};
