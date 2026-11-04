// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Pe}from"./chunk-6qcfjjmw.js";import{yt}from"./chunk-8yc04s9d.js";var r=new Set([Pe,yt]);function jxe(e){return r.has(e)}function hqs(e,n){return jxe(e)?e:n}function Znt(e){return e===yt?"Select-Object -First, Select-Object -Last or Select-String":"head, tail or grep"}function mH(e){return e.isMcp!==!0&&jxe(e.name)}
export{jxe,hqs,Znt,mH};
