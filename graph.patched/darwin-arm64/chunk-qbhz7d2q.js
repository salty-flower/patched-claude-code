// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{k}from"./chunk-s46qgfx7.js";import{a}from"./chunk-j77txbjn.js";function t(){return process.argv.includes("--agent-teams")}function Lo(){if(!a.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS&&!t())return!1;if(!k("tengu_amber_flint",!0))return!1;return!0}async function o6r(){if(!Lo())return;let{captureTeammateModeSnapshot:e}=await import("./chunk-bhascfx1.js");e()}
export{Lo,o6r};
