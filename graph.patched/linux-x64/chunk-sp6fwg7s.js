// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{bC}from"./chunk-rgw5185p.js";import{al}from"./chunk-8m59mbsr.js";function t(r){return"isApiErrorMessage"in r&&r.isApiErrorMessage===!0}function LMn(r){return t(r)&&r.error==null&&r.api_error_status==null}function u_r(r){return r.is_api_error_message===!0||t(r)}function XHe(r){return bC(al(r))}function f_r(r){return r.map((e)=>e.type==="text"&&("text"in e)&&typeof e.text==="string"?{...e,text:XHe(e.text)}:e)}
export{LMn,u_r,XHe,f_r};
