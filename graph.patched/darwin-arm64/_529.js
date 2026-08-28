// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Jzb as c,Kzb as d}from"./_548.js";import{cgd as o,xgd as m}from"./_810.js";import{Mid as s,Tid as r,krd as a}from"./_812.js";import{Exd as g}from"./_839.js";import{join as p}from"path";function D(){return p(o(),"uploads",s())}function E(t,e){return`${t}-${l(e)}`}function u(t){return c(t.replace(/_+$/,""))}function l(t){return u(t)?t+"_":t}function H(t){let e=t.replace(f,"");if(e.endsWith("_")&&u(e))return e.slice(0,-1);return e||t}function R(t,e){let n=r();if(!n.has(t)&&n.size>=A){let i=n.keys().next().value;if(i!==void 0)n.delete(i)}n.set(t,e)}function S(t){return r().get(t)}var f,A=1024;var h=g(()=>{a();m();d();f=/^[A-Za-z0-9_-]{8}-/});
export{D as _nb,E as $nb,H as aob,R as bob,S as cob,h as dob};
