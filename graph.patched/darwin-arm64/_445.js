// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Qrc as u,yrc as t}from"./_668.js";import{Aad as o,xad as e}from"./_798.js";import{Exd as n,Hxd as a}from"./_839.js";function i(){return process.argv.includes("--agent-teams")}function s(){if(!e.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS&&!i())return!1;if(!t("tengu_amber_flint",!0))return!1;return!0}async function p(){if(!s())return;let{captureTeammateModeSnapshot:r}=await import("./chunk-xrkjs0f5.js");r()}var m=n(()=>{u();o()});
export{s as _1a,p as $1a,m as a2a};
