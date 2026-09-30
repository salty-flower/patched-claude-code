// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
var lo="Skill",d6="skill__";function Tye(e){return"skill__"+e.replaceAll(":","__").replace(/[^a-zA-Z0-9_-]/g,"_")}function SDo(e){let l=[...e.aliases??[],...e.shedAliases??[],...e.unqualifiedName!=null?[e.unqualifiedName]:[]];return l.length?l.map(Tye):void 0}
export{lo,d6,Tye,SDo};
