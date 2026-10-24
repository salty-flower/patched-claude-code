// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{N7,Yq}from"./chunk-31gxg38t.js";import{Ns}from"./chunk-qnvapa9t.js";var r=[{pluginSource:`${Yq}@${Ns}`,serverName:N7,title:"Claude Test (built into Claude Code)",personOnly:!0}];function nbo(i,n){return r.find((e)=>e.pluginSource===n&&e.serverName===i)?.title}function Spt(i,n){return nbo(i,n)!==void 0}function V1n(i,n){return r.some((e)=>e.personOnly&&e.serverName===i&&(!n||e.pluginSource===n))}function ftn(i,n,e,t){return e==="password"&&t.type==="string"&&!(("format"in t)&&t.format!==void 0)&&!("enum"in t)&&!("oneOf"in t)&&Spt(i,n)}
export{nbo,Spt,V1n,ftn};
