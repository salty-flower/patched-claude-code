// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Yae,NJ}from"./chunk-zaxe68t4.js";import{ls}from"./chunk-374g520d.js";var r=[{pluginSource:`${NJ}@${ls}`,serverName:Yae,title:"Claude Test (built into Claude Code)",personOnly:!0}];function C_s(e,n){return r.find((i)=>i.pluginSource===n&&i.serverName===e)?.title}function SHt(e,n){return C_s(e,n)!==void 0}function Hwr(e,n){return r.some((i)=>i.personOnly&&i.serverName===e&&(!n||i.pluginSource===n))}function CLn(e,n,i,t){return i==="password"&&t.type==="string"&&!(("format"in t)&&t.format!==void 0)&&!("enum"in t)&&!("oneOf"in t)&&SHt(e,n)}
export{C_s,SHt,Hwr,CLn};
