// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Doe}from"./chunk-bkcxqeq8.js";import{fwt}from"./chunk-gbppnkga.js";import{rUe}from"./chunk-tp1zt0km.js";import{NNe,KHt}from"./chunk-jjdny5he.js";import{qHt}from"./chunk-b6bmyv17.js";import{cv}from"./chunk-afhpyf29.js";function EHn(e){if(fwt(e.client,e.name)!==void 0)return"file_reference";if(qHt(e.meta)!==void 0&&rUe.some((t)=>Doe(e.client,t)))return"listed_mark";if(cv(e.client.config)===void 0)return;let{marked:r,unfilled:n,everyCall:i}=NNe(e.schema);return r.length>0||n.length>0||i||KHt(e.schema).length>0?"schema_mark":void 0}
export{EHn};
