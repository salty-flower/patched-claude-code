// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{iR}from"./chunk-tcx7rcpg.js";import{l}from"./chunk-hs29jdk6.js";import{sm}from"./chunk-374g520d.js";import{UAt,BI}from"./chunk-a5a37ds7.js";import{X_t,lr}from"./chunk-zaxe68t4.js";import{Dq,A9,QMn,JQt}from"./chunk-qbzypfqz.js";import{Fbe}from"./chunk-n68w8328.js";var $ir="https://claude.ai/settings/data-privacy-controls";function Uir(){let e=X_t();return e===void 0?void 0:sm(e)}async function B1a({credentials:e,storageV5:o}){if(!BI()||!UAt()||await QMn(e))return!1;let[r,n]=await Promise.all([Dq(e),A9(e)]);if(!r.success)return!1;return JQt(r.data,o,e),r.data.grove_enabled===null&&n.success&&!n.data.notice_is_grace_period}async function C4a(e){if(!await B1a(e))return;l("tengu_grove_print_viewed",{dismissable:!1});let o=Uir();iR(Fbe()==="consentService"?`
[ACTION REQUIRED] We've updated our Consumer Terms and Privacy Policy. You must run \`claude\` to review the updated terms.

`:`
[ACTION REQUIRED] We've updated our Consumer Terms and Privacy Policy. You'll need to accept them at ${$ir}${o===void 0?"":` as ${o}`} to continue.

`),await lr(1)}
export{$ir,Uir,B1a,C4a};
