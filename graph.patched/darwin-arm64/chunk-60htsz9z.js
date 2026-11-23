// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{rle,VJ}from"./chunk-wqb2b4v0.js";import{ls}from"./chunk-gywtf5sd.js";var r=[{pluginSource:`${VJ}@${ls}`,serverName:rle,title:"Claude Test (built into Claude Code)",personOnly:!0}];function n_s(e,n){return r.find((i)=>i.pluginSource===n&&i.serverName===e)?.title}function yHt(e,n){return n_s(e,n)!==void 0}function iwr(e,n){return r.some((i)=>i.personOnly&&i.serverName===e&&(!n||i.pluginSource===n))}function bLn(e,n,i,t){return i==="password"&&t.type==="string"&&!(("format"in t)&&t.format!==void 0)&&!("enum"in t)&&!("oneOf"in t)&&yHt(e,n)}
export{n_s,yHt,iwr,bLn};
