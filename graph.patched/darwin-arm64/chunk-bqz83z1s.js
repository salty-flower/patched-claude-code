// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{_3s}from"./chunk-jy9g8404.js";import{ds}from"./chunk-53x2yxpb.js";import{ng,Wp}from"./chunk-msbe8e4w.js";function MLo(n,t){let o=Array.isArray(n?.questions)&&typeof n.questions[0]?.question==="string"?n.questions[0].question:void 0,r=typeof n?.description==="string"?n.description:"",e=o??_3s(r)?.running??(r||(t()??""));return e?Wp(ds(e).replace(/\s+/g," ").trim(),ng):""}
export{MLo};
