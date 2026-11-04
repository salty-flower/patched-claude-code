// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{One,S8}from"./chunk-0x9x817t.js";import{ai}from"./chunk-h21zbzen.js";var r=[{pluginSource:`${S8}@${ai}`,serverName:One,title:"Claude Test (built into Claude Code)",personOnly:!0}];function yqo(i,n){return r.find((e)=>e.pluginSource===n&&e.serverName===i)?.title}function OCt(i,n){return yqo(i,n)!==void 0}function Gtr(i,n){return r.some((e)=>e.personOnly&&e.serverName===i&&(!n||e.pluginSource===n))}function BSn(i,n,e,t){return e==="password"&&t.type==="string"&&!(("format"in t)&&t.format!==void 0)&&!("enum"in t)&&!("oneOf"in t)&&OCt(i,n)}
export{yqo,OCt,Gtr,BSn};
