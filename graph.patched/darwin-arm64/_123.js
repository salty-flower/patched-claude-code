// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Rn as A,Un as G,Vn as T}from"./_124.js";import{$n as E,Xn as D,go as U}from"./_125.js";import{tH as f,vH as d,wH as y,xH as h}from"./_324.js";import{lO as p,zO as N}from"./_384.js";import{leb as t,neb as s}from"./_497.js";import{Lqc as O,Mpc as g,Rpc as c,Skc as R,skc as l}from"./_668.js";import{And as m,krd as x}from"./_812.js";import{Bxd as _}from"./_839.js";N();O();x();R();h();s();var u=(T(),_(G)).ExtraUsageDialog;async function j(I,n){let e=p(I);if(u&&d())return t(u,{onDone:e});let o=await y({openInBrowser:!0},n.credentials);if(o.type==="message")return e(o.value),null;if(o.type==="confirm-admin-request"){if(l())return e(f),null;return t(A,{extraUsage:o.extraUsage,onDone:e})}let a=c();if(a==="team"||a==="enterprise")return e(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return e(`Visit ${o.url} to manage usage credits.`),null;let r=g(),w=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},C=m();return t(U,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(i,b,L)=>{let S=await D(n,i,{setAppState:L,previousAccount:w,previousGatewayAuth:C});e(...E(n,i,S))}})}
export{j as Qn};
