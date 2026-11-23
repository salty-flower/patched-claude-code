// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{le}from"./chunk-gwh19369.js";function kpr(e){if(le()){let s=new Date().toISOString();return e.flatMap((t)=>(t.pollEvent?.displayRows??[]).map((a)=>({...a,timestamp:s})))}return[]}
export{kpr};
