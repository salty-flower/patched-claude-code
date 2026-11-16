// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{lf}from"./chunk-hqnssvns.js";import{xn}from"./chunk-2k26tqda.js";var Z$="SendFile",Iia="Send one or more files to another Claude Code session";function Oia(e,s){return`Send files to another Claude Code session \u2014 a peer session on this machine, or a Remote Control / cloud session on another machine. The receiving Claude gets the files on its own filesystem with @path references, plus your message.

Use this when a file is the thing to hand over \u2014 a doc with figures, a screenshot, a report, a build artifact. For plain text, use ${xn} instead. For agents inside this session (subagents, teammates), also use ${xn} \u2014 they share your filesystem and can read the file at its path directly.

\`to\` accepts a peer session name from ${lf}, or an explicit \`uds:<socket>\` / \`bridge:<session id>\` address.

Each file is capped at ${s} MiB, at most ${e} files per send. Files must exist on the local filesystem \u2014 write content to a file first if needed. The receiver verifies each file against a sha256 digest of what was sent (where the transport carries it) and refuses a mismatch with a visible note.

Example: ${Z$}({ to: "devbox", files: ["report.pdf", "figures/plot.png"], message: "Here's the doc with figures." })`}
export{Z$,Iia,Oia};
