// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Fu}from"./chunk-r3adsed5.js";import{t}from"./chunk-ray9kegj.js";import{rd}from"./chunk-h4js79s0.js";import{Xt}from"./chunk-a5a37ds7.js";import{WLt}from"./chunk-4r5z387h.js";function fAi(o){if(Xt())return!1;if(Fu()!==void 0&&o.every((r)=>r.unattendedSafe))return!1;return!0}function r0t(o){return o.filter((r)=>!r.mcpErrorMetadata&&!r.statusOnly&&!r.startupFatal)}function o0t(o){let r=[],i=[];for(let n of o)(n.statusOnly?r:i).push(n);return{statusNotices:r,invalidEntries:i}}function s0t(o){for(let r of o)t(`Invalid setting skipped without dialog (automated session): ${rd(WLt(r.file))}: ${r.path}: ${r.message}`,{level:"error"})}
export{fAi,r0t,o0t,s0t};
