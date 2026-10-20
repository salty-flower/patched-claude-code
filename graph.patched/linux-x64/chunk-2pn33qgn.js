// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{bne}from"./chunk-4qs43hr1.js";import{Hz}from"./chunk-qs2wrs24.js";function PRe(e,o){if(bne(e))return;return{uuid:typeof e.source_uuid==="string"&&e.source_uuid?e.source_uuid:o,content:e.prompt,isMeta:Boolean(e.isMeta),origin:Hz(e.origin,e.commandMode,e.runId)}}
export{PRe};
