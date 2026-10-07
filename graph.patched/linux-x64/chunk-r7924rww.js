// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{_}from"./chunk-yffha6me.js";import{t}from"./chunk-gvn18sr5.js";import{i}from"./chunk-s90w5q15.js";import{an}from"./chunk-c66e3zm1.js";import{le,g,L}from"./chunk-1mwacejt.js";import{i$e}from"./chunk-8xp7pmky.js";L();function l(o,n,r){return o.isWindowActivation||c(n,r)}function S_(){let o=an(),[n]=g(()=>o.now());return le((r)=>{let e=o.now();if(!l(r,n,e))return!1;let u=r.isWindowActivation?_("window_activation"):_("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),i("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n])}function Oat(){let o=an(),[n]=g(()=>o.now());return le(()=>c(n,o.now()),[o,n])}function c(o,n){return n-o<i$e}
export{S_,Oat};
