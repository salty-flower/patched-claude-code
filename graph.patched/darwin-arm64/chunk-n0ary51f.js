// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{t}from"./chunk-f8eqwxpt.js";import{Mt}from"./chunk-s46qgfx7.js";function cko(){return!Mt()}function dko(o){return o.filter((r)=>!r.mcpErrorMetadata&&!r.statusOnly&&!r.startupFatal)}function h4e(o){let r=[],i=[];for(let n of o)(n.statusOnly?r:i).push(n);return{statusNotices:r,invalidEntries:i}}function uko(o){for(let r of o)t(`Invalid setting skipped without dialog (automated session): ${r.file??"settings"}: ${r.path}: ${r.message}`,{level:"error"})}
export{cko,dko,h4e,uko};
