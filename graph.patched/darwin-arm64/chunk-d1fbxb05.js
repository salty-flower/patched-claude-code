// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{t}from"./chunk-5nh49npx.js";import{Ul}from"./chunk-zmmnrc9r.js";import{jt}from"./chunk-axsjfnwn.js";import{Lvt}from"./chunk-6dc2kyeq.js";function a4s(){return!jt()}function bEt(o){return o.filter((r)=>!r.mcpErrorMetadata&&!r.statusOnly&&!r.startupFatal)}function wEt(o){let r=[],i=[];for(let n of o)(n.statusOnly?r:i).push(n);return{statusNotices:r,invalidEntries:i}}function EEt(o){for(let r of o)t(`Invalid setting skipped without dialog (automated session): ${Ul(Lvt(r.file))}: ${r.path}: ${r.message}`,{level:"error"})}
export{a4s,bEt,wEt,EEt};
