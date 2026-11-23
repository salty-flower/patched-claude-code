// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Jg,OX}from"./chunk-b5xhmzas.js";var n=/(?![\u200C\u200D])[\p{Cf}\u2028\u2029]/gu,o=/[\u001b\u0080-\u009f]/g,c=8;function wA(u){let e=u.replace(o,"").replace(OX,"").replace(/[\v\f\r]/g,"");for(let r=0;r<c;r++){let t=Jg(e.replace(n,""));if(t===e)return e;e=t}return e.replace(/[\ud800-\udfff]/g,"").replace(n,"")}
export{wA};
