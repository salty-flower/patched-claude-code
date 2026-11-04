// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{k}from"./chunk-axsjfnwn.js";import{i}from"./chunk-n1cpnz94.js";function t(){return process.argv.includes("--agent-teams")}function ns(){if(!i.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS&&!t())return!1;if(!k("tengu_amber_flint",!0))return!1;return!0}async function cts(){if(!ns())return;let{captureTeammateModeSnapshot:e}=await import("./chunk-rkd78bqz.js");e()}
export{ns,cts};
