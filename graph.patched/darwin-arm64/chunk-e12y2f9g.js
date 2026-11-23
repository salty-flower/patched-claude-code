// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{wA}from"./chunk-hs31g192.js";import{al}from"./chunk-1fk1dcgw.js";function t(r){return"isApiErrorMessage"in r&&r.isApiErrorMessage===!0}function J0n(r){return t(r)&&r.error==null&&r.api_error_status==null}function D_r(r){return r.is_api_error_message===!0||t(r)}function QHe(r){return wA(al(r))}function L_r(r){return r.map((e)=>e.type==="text"&&("text"in e)&&typeof e.text==="string"?{...e,text:QHe(e.text)}:e)}
export{J0n,D_r,QHe,L_r};
