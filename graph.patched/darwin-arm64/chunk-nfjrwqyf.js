// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{sC,Cm,Zu,yl}from"./chunk-h9sag63s.js";import{Ce}from"./chunk-a190bznh.js";import{qn,qxt}from"./chunk-f4hwpxyv.js";import{ju}from"./chunk-9w5xhpz6.js";import{join as a}from"path";function fV(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:sC(e)}async function Wpt(e,t,n){return a(Zu(await yl(e,ju(n))),g$t(t))}async function Sue(e,t,n){let r=await yl(e,ju(n)),c=a(Zu(r),g$t(t)),o=Cm(r),i=n===void 0?void 0:pcn(o,t);return{path:c,projectKey:o,v5:n===void 0||i===void 0?void 0:{backend:n,key:i}}}function pcn(e,t){let n=Ce.dirSyncRecord(e,fV(t));return qn(n)===void 0?n:void 0}function g$t(e){return`${fV(e)}${qxt}`}
export{fV,Wpt,Sue,pcn,g$t};
