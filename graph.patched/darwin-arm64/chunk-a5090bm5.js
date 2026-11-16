// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{_r}from"./chunk-2kwzks7r.js";var r=/@sha256:[0-9a-f]{64}$/;function Pqe(n){return r.test(n)}function Xda(n){let[e,...i]=n.suggestions??[],t=i.length===0&&e?.type==="addRules"&&e.behavior==="allow"&&e.rules.length===1?e.rules[0]:void 0;return t?.toolName===_r&&t.ruleContent!==void 0&&r.test(t.ruleContent)?t.ruleContent:void 0}var Jda="userSettings";function Vhe(n){if(n.metadata?.mcpSkill===void 0)return;let e=void 0;return{rule:e===void 0?void 0:{toolName:_r,ruleContent:e}}}
export{Pqe,Xda,Jda,Vhe};
