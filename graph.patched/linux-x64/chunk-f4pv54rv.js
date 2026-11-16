// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{LD}from"./chunk-8c4ttmk8.js";import{_en}from"./chunk-te9037c9.js";import{sxe}from"./chunk-zaxe68t4.js";function t(e){if(!Array.isArray(e))return _en(e);return e.some((r)=>_en([r]))}function YCe(e){if(t(e))return"seeded-comment";return(Array.isArray(e)?e.map(i):[e]).some((n)=>typeof n==="string"&&sxe(n))?"teammate-reply":void 0}function Qts(e){return YCe(Array.isArray(e)?e.map((r)=>typeof r==="object"&&r!==null&&("text"in r)?{...r,text:o(r.text)}:r):o(e))}function o(e){return typeof e==="string"?e.replaceAll(`<\\${LD}`,`<${LD}`):e}function i(e){return typeof e==="object"&&e!==null&&"text"in e?e.text:void 0}
export{YCe,Qts};
