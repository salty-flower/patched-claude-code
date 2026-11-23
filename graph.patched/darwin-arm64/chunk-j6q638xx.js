// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{lR}from"./chunk-cr30fncm.js";import{l}from"./chunk-mfxenhbr.js";import{sm}from"./chunk-gywtf5sd.js";import{zCt,GO}from"./chunk-e44qnbvj.js";import{oyt,dr}from"./chunk-wqb2b4v0.js";import{NV,D8,gMn,lZt}from"./chunk-p52tdr0h.js";import{VSe}from"./chunk-kkhg3n3w.js";var lar="https://claude.ai/settings/data-privacy-controls";function dar(){let e=oyt();return e===void 0?void 0:sm(e)}async function xBa({credentials:e,storageV5:o}){if(!GO()||!zCt()||await gMn(e))return!1;let[r,n]=await Promise.all([NV(e),D8(e)]);if(!r.success)return!1;return lZt(r.data,o,e),r.data.grove_enabled===null&&n.success&&!n.data.notice_is_grace_period}async function hqa(e){if(!await xBa(e))return;l("tengu_grove_print_viewed",{dismissable:!1});let o=dar();lR(VSe()==="consentService"?`
[ACTION REQUIRED] We've updated our Consumer Terms and Privacy Policy. You must run \`claude\` to review the updated terms.

`:`
[ACTION REQUIRED] We've updated our Consumer Terms and Privacy Policy. You'll need to accept them at ${lar}${o===void 0?"":` as ${o}`} to continue.

`),await dr(1)}
export{lar,dar,xBa,hqa};
