// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Tt}from"./chunk-tdmgys2e.js";import{Pe}from"./chunk-fsnz81vy.js";import{on}from"./chunk-cns0hna9.js";function zpe(){return Agt()===void 0}function Agt(){if(Tt()||Pe()!=="firstParty")return"egress";return on("allow_remote_sessions")?void 0:"policy_org"}
export{zpe,Agt};
