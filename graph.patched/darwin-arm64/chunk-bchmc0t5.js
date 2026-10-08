// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{S}from"./chunk-eak61y8v.js";import{t}from"./chunk-b5feae42.js";import{i}from"./chunk-ne43gjnt.js";import{ln}from"./chunk-8pkmgy8b.js";import{le,g,N}from"./chunk-f6geyac8.js";import{R1e}from"./chunk-5a58rh2c.js";N();function l(o,n,r){return o.isWindowActivation||c(n,r)}function $_(){let o=ln(),[n]=g(()=>o.now());return le((r)=>{let e=o.now();if(!l(r,n,e))return!1;let u=r.isWindowActivation?S("window_activation"):S("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),i("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n])}function eut(){let o=ln(),[n]=g(()=>o.now());return le(()=>c(n,o.now()),[o,n])}function c(o,n){return n-o<R1e}
export{$_,eut};
