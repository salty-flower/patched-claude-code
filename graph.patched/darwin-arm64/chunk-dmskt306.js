// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{b,Go}from"./chunk-2avye5sw.js";import{Er}from"./chunk-sw1cad4q.js";var n=/^\d{1,12}-[0-9a-f]{1,32}$/;function Sbe(t){return Er.test(t)?Go(t):b("nonconforming")}function aln(t){return n.test(t)?Go(t):b("nonconforming")}
export{Sbe,aln};
