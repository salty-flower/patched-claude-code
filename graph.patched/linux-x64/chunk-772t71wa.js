// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{b}from"./chunk-bkr1h20c.js";import{t}from"./chunk-p46wpkfz.js";import{i}from"./chunk-nayw0pf7.js";import{ln}from"./chunk-13cxqtms.js";import{le,g,N}from"./chunk-y6zm4y48.js";import{SUe}from"./chunk-c47fp7vb.js";N();function l(o,n,r){return o.isWindowActivation||c(n,r)}function $_(){let o=ln(),[n]=g(()=>o.now());return le((r)=>{let e=o.now();if(!l(r,n,e))return!1;let u=r.isWindowActivation?b("window_activation"):b("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),i("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n])}function qdt(){let o=ln(),[n]=g(()=>o.now());return le(()=>c(n,o.now()),[o,n])}function c(o,n){return n-o<SUe}
export{$_,qdt};
