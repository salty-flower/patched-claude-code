// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-n5v91jc3.js";import{$d}from"./chunk-nt1g7asm.js";import{$t}from"./chunk-7p6jp6kj.js";import{Rit}from"./chunk-c5ns41ex.js";function zts(){return!$t()}function wot(o){return o.filter((r)=>!r.mcpErrorMetadata&&!r.statusOnly&&!r.startupFatal)}function vot(o){let r=[],i=[];for(let n of o)(n.statusOnly?r:i).push(n);return{statusNotices:r,invalidEntries:i}}function Eot(o){for(let r of o)t(`Invalid setting skipped without dialog (automated session): ${$d(Rit(r.file))}: ${r.path}: ${r.message}`,{level:"error"})}
export{zts,wot,vot,Eot};
