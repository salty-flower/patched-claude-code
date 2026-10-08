// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
var iFn="claude.ai ",jSr="claude_ai_";function Pn(e){let t=e.replace(/[^a-zA-Z0-9_-]/g,"_");if(e.startsWith("claude.ai "))t=t.replace(/_+/g,"_").replace(/^_|_$/g,"");return t}var r="claudeai_";function G2(e){return Pn(e).toLowerCase().replace(/[-_]+/g,"_").replace(/^_|_$/g,"")}function Mho(e){let t=`${G2(e)}_`;return t.startsWith("claude_ai_")||t.startsWith(r)}
export{iFn,jSr,Pn,G2,Mho};
