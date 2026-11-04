// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{t}from"./chunk-5nh49npx.js";function eu(e,o,r={},u="debug"){let n=e===void 0?"[remote-tools]":`[remote-tools call=${e}]`,g=Object.entries(r).flatMap(([d,i])=>i===void 0?[]:[`${d}=${i}`]).join(" ");t(g===""?`${n} ${o}`:`${n} ${o} ${g}`,{level:u})}function Ugn(e){return e==="outcome_of"?"verbose":"debug"}
export{eu,Ugn};
