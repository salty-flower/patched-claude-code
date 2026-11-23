// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{_}from"./chunk-bdfv2ky4.js";import{mte}from"./chunk-ksq2mgyv.js";import{XG}from"./chunk-0s5xarq7.js";import{zVe}from"./chunk-wqb2b4v0.js";import{hzn,Rqe,gzn}from"./chunk-hkb5c8d9.js";import{Je}from"./chunk-xynpsnk2.js";var r=null;function yXt(n,o){if(n===XG.kind||n===zVe.kind)return!0;if(n===hzn)return o==="sdk_host";if(n===Rqe)return o==="sdk_host";if(n===gzn)return o==="sdk_host";return o==="sdk_host"&&r!==null&&r.slackConnectDialogs.some((e)=>e.kind===n)}function Cur(n){return!yXt(n,"sdk_host")||yXt(n,"remote_control")}var s=/\u2028|\u2029/g,i="tengu_sober_inkwell";function t(){return Je(i,{safe:!0})}function Ots(n){return _(n).replace(s,(o)=>o==="\u2028"?"\\u2028":"\\u2029")}function Mq(n){if(t())return mte(_(n));return Ots(n)}function Its(n,o){if(t())return mte(_(n,null,o));return _(n,null,o)}
export{Ots,Mq,Its,yXt,Cur};
