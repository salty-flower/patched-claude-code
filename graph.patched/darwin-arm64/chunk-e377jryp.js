// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{_}from"./chunk-g9zw99sb.js";import{t}from"./chunk-3wz0srxw.js";import{i}from"./chunk-aykv0zbt.js";import{Zt}from"./chunk-behv2vm9.js";import{ie,g,M}from"./chunk-757fgf90.js";import{E0e}from"./chunk-as24m2g2.js";M();function l(o,n,r){return o.isWindowActivation||c(n,r)}function th(){let o=Zt(),[n]=g(()=>o.now());return ie((r)=>{let e=o.now();if(!l(r,n,e))return!1;let u=r.isWindowActivation?_("window_activation"):_("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),i("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n])}function TQe(){let o=Zt(),[n]=g(()=>o.now());return ie(()=>c(n,o.now()),[o,n])}function c(o,n){return n-o<E0e}
export{th,TQe};
