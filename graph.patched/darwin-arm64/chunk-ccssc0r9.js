// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{S}from"./chunk-h58p4vvs.js";import{t}from"./chunk-5nh49npx.js";import{l}from"./chunk-hm8vbfs0.js";import{vn}from"./chunk-v5qk8x3w.js";import{znt}from"./chunk-qfycx4yg.js";import{ue,y,j}from"./chunk-rt5zqm44.js";j();function u(o,n,r){return o.isWindowActivation||i(n,r)}function ZE(){let o=vn(),[n]=y(()=>o.now());return ue((r)=>{let e=o.now();if(!u(r,n,e))return!1;let c=r.isWindowActivation?S("window_activation"):S("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),l("tengu_select_stray_click_dropped",{reason:c}),r.dropAsStray(),!0},[o,n])}function yWt(){let o=vn(),[n]=y(()=>o.now());return ue(()=>i(n,o.now()),[o,n])}function i(o,n){return n-o<znt}
export{ZE,yWt};
