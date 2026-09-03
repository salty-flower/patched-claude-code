// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{P}from"./chunk-h6md7820.js";import{a}from"./chunk-pv906ex9.js";function t(){return process.argv.includes("--agent-teams")}function Zr(){if(!a.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS&&!t())return!1;if(!P("tengu_amber_flint",!0))return!1;return!0}async function Lhn(){if(!Zr())return;let{captureTeammateModeSnapshot:e}=await import("./chunk-wtvacz84.js");e()}
export{Zr,Lhn};
