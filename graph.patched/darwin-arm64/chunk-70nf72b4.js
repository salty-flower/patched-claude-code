// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{S}from"./chunk-76anb6yt.js";import{t}from"./chunk-gyf58rwf.js";import{i}from"./chunk-4nygtnjw.js";import{on}from"./chunk-1r9zp6s1.js";import{le,y,N}from"./chunk-kexg5hxg.js";import{vje}from"./chunk-06azbynj.js";N();function l(o,n,r){return o.isWindowActivation||c(n,r)}function aS(){let o=on(),[n]=y(()=>o.now());return le((r)=>{let e=o.now();if(!l(r,n,e))return!1;let u=r.isWindowActivation?S("window_activation"):S("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),i("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n])}function Vmt(){let o=on(),[n]=y(()=>o.now());return le(()=>c(n,o.now()),[o,n])}function c(o,n){return n-o<vje}
export{aS,Vmt};
