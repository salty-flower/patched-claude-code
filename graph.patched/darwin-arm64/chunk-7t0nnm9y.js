// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-tdxkq523.js";import{Fd}from"./chunk-42txhxmf.js";import{Ft}from"./chunk-bvn0epzr.js";import{Mit}from"./chunk-a1dna1kr.js";function wns(){return!Ft()}function Tot(o){return o.filter((r)=>!r.mcpErrorMetadata&&!r.statusOnly&&!r.startupFatal)}function Aot(o){let r=[],i=[];for(let n of o)(n.statusOnly?r:i).push(n);return{statusNotices:r,invalidEntries:i}}function Rot(o){for(let r of o)t(`Invalid setting skipped without dialog (automated session): ${Fd(Mit(r.file))}: ${r.path}: ${r.message}`,{level:"error"})}
export{wns,Tot,Aot,Rot};
