// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Fu}from"./chunk-m8nhymg4.js";import{t}from"./chunk-bdfv2ky4.js";import{rd}from"./chunk-b5xhmzas.js";import{Xt}from"./chunk-e44qnbvj.js";import{KLt}from"./chunk-64mv8hhe.js";function VCi(o){if(Xt())return!1;if(Fu()!==void 0&&o.every((r)=>r.unattendedSafe))return!1;return!0}function dMt(o){return o.filter((r)=>!r.mcpErrorMetadata&&!r.statusOnly&&!r.startupFatal)}function cMt(o){let r=[],i=[];for(let n of o)(n.statusOnly?r:i).push(n);return{statusNotices:r,invalidEntries:i}}function uMt(o){for(let r of o)t(`Invalid setting skipped without dialog (automated session): ${rd(KLt(r.file))}: ${r.path}: ${r.message}`,{level:"error"})}
export{VCi,dMt,cMt,uMt};
