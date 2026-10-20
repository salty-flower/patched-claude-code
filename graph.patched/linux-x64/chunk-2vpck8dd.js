// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{b}from"./chunk-m3epja3j.js";import{t}from"./chunk-n5v91jc3.js";import{i}from"./chunk-sr4gfmny.js";import{an}from"./chunk-wfsayads.js";import{aqe}from"./chunk-yhb0qgpt.js";import{le,y,B}from"./chunk-a2fszd78.js";B();function l(o,n,r){return o.isWindowActivation||c(n,r)}function IS(){let o=an(),[n]=y(()=>o.now());return le((r)=>{let e=o.now();if(!l(r,n,e))return!1;let u=r.isWindowActivation?b("window_activation"):b("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),i("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n])}function vkt(){let o=an(),[n]=y(()=>o.now());return le(()=>c(n,o.now()),[o,n])}function c(o,n){return n-o<aqe}
export{IS,vkt};
