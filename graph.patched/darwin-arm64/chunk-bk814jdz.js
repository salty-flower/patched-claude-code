// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{S}from"./chunk-gas689jj.js";import{t}from"./chunk-wvb0gwjm.js";import{i}from"./chunk-9cfndpw0.js";import{jTe}from"./chunk-vnnj4fsp.js";import{jt}from"./chunk-v1jfv1hk.js";import{oe,g,L}from"./chunk-1cnhgfv0.js";L();function l(o,n,r){return o.isWindowActivation||c(n,r)}function Gg(){let o=jt(),[n]=g(()=>o.now());return oe((r)=>{let e=o.now();if(!l(r,n,e))return!1;let u=r.isWindowActivation?S("window_activation"):S("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),i("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n])}function g8e(){let o=jt(),[n]=g(()=>o.now());return oe(()=>c(n,o.now()),[o,n])}function c(o,n){return n-o<jTe}
export{Gg,g8e};
