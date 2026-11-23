// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-5g5ea6r9.js";import{bt,JA}from"./chunk-4rkc6f3s.js";import{io,I_n,BC,aat,Bd}from"./chunk-a5a37ds7.js";function Eyr(){let e=JA("model"),t=e==="policySettings"||e==="flagSettings"?bt().model:aat()?.model??bt().model,n=i.ANTHROPIC_MODEL||t||void 0;return n&&jfs(n,"persisted")||Bd()}function jfs(e,t){if(!io(e))return BC(e)??void 0;return I_n(e,t)?void 0:e}
export{Eyr,jfs};
