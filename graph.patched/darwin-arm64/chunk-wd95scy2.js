// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{S}from"./chunk-v8gz5b0e.js";import{t}from"./chunk-bdfv2ky4.js";import{l}from"./chunk-mfxenhbr.js";import{Mn}from"./chunk-b2f7pn4f.js";import{cpt}from"./chunk-wc3psek1.js";import{ce,y,j}from"./chunk-07a1744w.js";j();function u(o,n,r){return o.isWindowActivation||i(n,r)}function Dk(){let o=Mn(),[n]=y(()=>o.now());return ce((r)=>{let e=o.now();if(!u(r,n,e))return!1;let c=r.isWindowActivation?S("window_activation"):S("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),l("tengu_select_stray_click_dropped",{reason:c}),r.dropAsStray(),!0},[o,n])}function cYt(){let o=Mn(),[n]=y(()=>o.now());return ce(()=>i(n,o.now()),[o,n])}function i(o,n){return n-o<cpt}
export{Dk,cYt};
