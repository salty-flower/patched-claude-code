// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
var FDe="claude.ai ",UDe="claude_ai_";function Bn(e){let r=e.replace(/[^a-zA-Z0-9_-]/g,"_");if(e.startsWith("claude.ai "))r=r.replace(/_+/g,"_").replace(/^_|_$/g,"");return r}var t="claudeai_";function rY(e){return Bn(e).toLowerCase().replace(/[-_]+/g,"_").replace(/^_|_$/g,"")}function C2o(e){let r=`${rY(e)}_`;return r.startsWith("claude_ai_")||r.startsWith(t)}
export{FDe,UDe,Bn,rY,C2o};
