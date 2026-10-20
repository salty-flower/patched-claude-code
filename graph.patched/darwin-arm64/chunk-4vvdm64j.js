// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{S}from"./chunk-ny2cqbmq.js";import{t}from"./chunk-tdxkq523.js";import{i}from"./chunk-dj0gyv94.js";import{an}from"./chunk-t3eqa5fc.js";import{mKe}from"./chunk-p4db44gq.js";import{le,y,B}from"./chunk-2txtxkxk.js";B();function l(o,n,r){return o.isWindowActivation||c(n,r)}function Ob(){let o=an(),[n]=y(()=>o.now());return le((r)=>{let e=o.now();if(!l(r,n,e))return!1;let u=r.isWindowActivation?S("window_activation"):S("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),i("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n])}function Ikt(){let o=an(),[n]=y(()=>o.now());return le(()=>c(n,o.now()),[o,n])}function c(o,n){return n-o<mKe}
export{Ob,Ikt};
