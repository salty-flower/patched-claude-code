// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{ae}from"./chunk-6y108fxb.js";function p9n(e){if(ae()){let s=new Date().toISOString();return e.flatMap((t)=>(t.pollEvent?.displayRows??[]).map((a)=>({...a,timestamp:s})))}return[]}
export{p9n};
