// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Tt}from"./chunk-e666gr8q.js";import{Pe}from"./chunk-nvk7bh0e.js";import{on}from"./chunk-a808z68x.js";function nSe(){return EAt()===void 0}function EAt(){if(Tt()||Pe()!=="firstParty")return"egress";return on("allow_remote_sessions")?void 0:"policy_org"}
export{nSe,EAt};
