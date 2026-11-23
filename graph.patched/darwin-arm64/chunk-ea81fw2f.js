// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-428zme0n.js";import{St,ZC}from"./chunk-x4r54n7x.js";import{io,q_n,WA,_at,Ud}from"./chunk-e44qnbvj.js";function qyr(){let e=ZC("model"),t=e==="policySettings"||e==="flagSettings"?St().model:_at()?.model??St().model,n=i.ANTHROPIC_MODEL||t||void 0;return n&&hps(n,"persisted")||Ud()}function hps(e,t){if(!io(e))return WA(e)??void 0;return q_n(e,t)?void 0:e}
export{qyr,hps};
