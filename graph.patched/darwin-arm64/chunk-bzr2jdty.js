// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{x}from"./chunk-ghnc2x4f.js";import{a}from"./chunk-bn8q5mbz.js";function t(){return process.argv.includes("--agent-teams")}function Kr(){if(!a.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS&&!t())return!1;if(!x("tengu_amber_flint",!0))return!1;return!0}async function win(){if(!Kr())return;let{captureTeammateModeSnapshot:e}=await import("./chunk-kc6axwyd.js");e()}
export{Kr,win};
