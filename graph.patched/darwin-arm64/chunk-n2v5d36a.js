// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{S}from"./chunk-ydpbzmt4.js";import{t}from"./chunk-d7b0m8qy.js";import{a}from"./chunk-wq923bwc.js";import{pn}from"./chunk-7car90a2.js";import{A5e}from"./chunk-pma0w0g1.js";import{de,y,j}from"./chunk-s8vmszp2.js";j();function u(o,n,r){return o.isWindowActivation||i(n,r)}function lw(){let o=pn(),[n]=y(()=>o.now());return de((r)=>{let e=o.now();if(!u(r,n,e))return!1;let c=r.isWindowActivation?S("window_activation"):S("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),a("tengu_select_stray_click_dropped",{reason:c}),r.dropAsStray(),!0},[o,n])}function uPt(){let o=pn(),[n]=y(()=>o.now());return de(()=>i(n,o.now()),[o,n])}function i(o,n){return n-o<A5e}
export{lw,uPt};
