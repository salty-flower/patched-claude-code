// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{t}from"./chunk-cwsn6mdf.js";import{Ut}from"./chunk-k16gymf7.js";function Q3o(){return!Ut()}function snt(o){return o.filter((r)=>!r.mcpErrorMetadata&&!r.statusOnly&&!r.startupFatal)}function int(o){let r=[],i=[];for(let n of o)(n.statusOnly?r:i).push(n);return{statusNotices:r,invalidEntries:i}}function ant(o){for(let r of o)t(`Invalid setting skipped without dialog (automated session): ${r.file??"settings"}: ${r.path}: ${r.message}`,{level:"error"})}
export{Q3o,snt,int,ant};
