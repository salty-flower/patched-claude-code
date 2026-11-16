// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-bdfv2ky4.js";function Uu(e,o,r={},u="debug"){let n=e===void 0?"[remote-tools]":`[remote-tools call=${e}]`,g=Object.entries(r).flatMap(([d,i])=>i===void 0?[]:[`${d}=${i}`]).join(" ");t(g===""?`${n} ${o}`:`${n} ${o} ${g}`,{level:u})}function RMn(e){return e==="outcome_of"?"verbose":"debug"}
export{Uu,RMn};
