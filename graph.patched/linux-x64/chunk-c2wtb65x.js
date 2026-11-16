// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{_}from"./chunk-ray9kegj.js";import{ote}from"./chunk-3x18nsrw.js";import{Yz}from"./chunk-6vxgmvy8.js";import{Uqe}from"./chunk-zaxe68t4.js";import{Vzn,k6e,qzn}from"./chunk-w2nk4j0v.js";import{Je}from"./chunk-eye8byva.js";var r=null;function lXt(n,o){if(n===Yz.kind||n===Uqe.kind)return!0;if(n===Vzn)return o==="sdk_host";if(n===k6e)return o==="sdk_host";if(n===qzn)return o==="sdk_host";return o==="sdk_host"&&r!==null&&r.slackConnectDialogs.some((e)=>e.kind===n)}function rur(n){return!lXt(n,"sdk_host")||lXt(n,"remote_control")}var s=/\u2028|\u2029/g,i="tengu_sober_inkwell";function t(){return Je(i,{safe:!0})}function _ts(n){return _(n).replace(s,(o)=>o==="\u2028"?"\\u2028":"\\u2029")}function T6(n){if(t())return ote(_(n));return _ts(n)}function yts(n,o){if(t())return ote(_(n,null,o));return _(n,null,o)}
export{_ts,T6,yts,lXt,rur};
