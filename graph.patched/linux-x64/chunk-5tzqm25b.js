// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{le}from"./chunk-pw3ekzpq.js";function npr(e){if(le()){let s=new Date().toISOString();return e.flatMap((t)=>(t.pollEvent?.displayRows??[]).map((a)=>({...a,timestamp:s})))}return[]}
export{npr};
