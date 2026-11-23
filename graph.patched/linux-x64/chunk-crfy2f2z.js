// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{S}from"./chunk-a5a37ds7.js";import{i}from"./chunk-5g5ea6r9.js";function t(){return process.argv.includes("--agent-teams")}function ks(){if(!i.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS&&!t())return!1;if(!S("tengu_amber_flint",!0))return!1;return!0}async function lxs(){if(!ks())return;let{captureTeammateModeSnapshot:e}=await import("./chunk-67053mzh.js");e()}
export{ks,lxs};
