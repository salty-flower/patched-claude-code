// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Kxc as e,Mxc as c}from"./_675.js";import{AAc as i,wAc as n}from"./_689.js";import{Exd as a}from"./_839.js";function f(){return e().status==="ok"&&n()!==null}function g(t){let r=t.startsWith("/api/frame/")?t.slice(10):t;return`${s}${r}`}function l(t,r){return`${R}/${encodeURIComponent(t)}${r}`}function C(t){return{"x-frame-asset-token":t}}var o="/v1/code/agent-proxy",s,R,A="artifact_mount";var p=a(()=>{c();i();s=`${o}/frame`;R=`${o}/artifact`});
export{f as j2b,o as k2b,g as l2b,A as m2b,l as n2b,C as o2b,p as p2b};
