// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{b}from"./chunk-e44qnbvj.js";import{i}from"./chunk-428zme0n.js";function t(){return process.argv.includes("--agent-teams")}function vs(){if(!i.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS&&!t())return!1;if(!b("tengu_amber_flint",!0))return!1;return!0}async function qxs(){if(!vs())return;let{captureTeammateModeSnapshot:e}=await import("./chunk-jq464yaa.js");e()}
export{vs,qxs};
