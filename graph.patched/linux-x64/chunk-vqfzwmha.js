// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{b}from"./chunk-zt4gdxqw.js";import{t}from"./chunk-ray9kegj.js";import{l}from"./chunk-hs29jdk6.js";import{Mn}from"./chunk-bzk3ayzm.js";import{npt}from"./chunk-1fpwqakg.js";import{ce,y,j}from"./chunk-mp0bjfh5.js";j();function u(o,n,r){return o.isWindowActivation||i(n,r)}function OE(){let o=Mn(),[n]=y(()=>o.now());return ce((r)=>{let e=o.now();if(!u(r,n,e))return!1;let c=r.isWindowActivation?b("window_activation"):b("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),l("tengu_select_stray_click_dropped",{reason:c}),r.dropAsStray(),!0},[o,n])}function d7t(){let o=Mn(),[n]=y(()=>o.now());return ce(()=>i(n,o.now()),[o,n])}function i(o,n){return n-o<npt}
export{OE,d7t};
