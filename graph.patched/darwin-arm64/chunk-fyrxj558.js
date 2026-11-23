// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{FD}from"./chunk-mddke2ke.js";import{rtn}from"./chunk-8e93tbyw.js";import{cxe}from"./chunk-wqb2b4v0.js";function t(e){if(!Array.isArray(e))return rtn(e);return e.some((r)=>rtn([r]))}function nRe(e){if(t(e))return"seeded-comment";return(Array.isArray(e)?e.map(i):[e]).some((n)=>typeof n==="string"&&cxe(n))?"teammate-reply":void 0}function Ons(e){return nRe(Array.isArray(e)?e.map((r)=>typeof r==="object"&&r!==null&&("text"in r)?{...r,text:o(r.text)}:r):o(e))}function o(e){return typeof e==="string"?e.replaceAll(`<\\${FD}`,`<${FD}`):e}function i(e){return typeof e==="object"&&e!==null&&"text"in e?e.text:void 0}
export{nRe,Ons};
