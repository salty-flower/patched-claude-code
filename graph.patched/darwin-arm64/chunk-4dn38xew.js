// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{S}from"./chunk-dnq93t1z.js";import{t}from"./chunk-bnfhb7sj.js";import{i}from"./chunk-52pf9qag.js";import{cn}from"./chunk-sm4gyzj8.js";import{p6e}from"./chunk-xht2qger.js";import{ae,y,F}from"./chunk-57p87fb1.js";F();function l(o,n,r){return o.isWindowActivation||c(n,r)}function ib(){let o=cn(),[n]=y(()=>o.now());return ae((r)=>{let e=o.now();if(!l(r,n,e))return!1;let u=r.isWindowActivation?S("window_activation"):S("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),i("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n])}function nEt(){let o=cn(),[n]=y(()=>o.now());return ae(()=>c(n,o.now()),[o,n])}function c(o,n){return n-o<p6e}
export{ib,nEt};
