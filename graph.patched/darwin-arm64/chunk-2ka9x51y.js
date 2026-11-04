// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{ai,$n}from"./chunk-h21zbzen.js";var PK=(o)=>o.endsWith(`@${ai}`);function JLt(o,e){let t=$n(o);return[...e??[]].some((r)=>!PK(r)&&$n(r)===t)}export{PK,JLt};
