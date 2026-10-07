// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{bn}from"./chunk-yffha6me.js";import{createHash as e}from"crypto";function on(t){return bn(e("sha256").update(t).digest("hex").slice(0,12))}var r=/^[0-9a-f]{12}$/;function Q8t(t){return r.test(t)?bn(t):void 0}
export{on,Q8t};
