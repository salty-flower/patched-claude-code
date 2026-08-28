// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{$_a as f,J_a as I,L_a as H,a$a as P}from"./_485.js";import{ieb as T,jeb as S}from"./_496.js";import{leb as c,neb as O}from"./_497.js";import{ADb as g,EDb as N,KDb as y,RDb as F}from"./_563.js";import{aJb as b,hJb as u,lJb as D}from"./_577.js";import{$ad as x,Zad as p}from"./_800.js";import{Bwd as K,twd as s}from"./_836.js";import{Exd as m}from"./_839.js";function d(t,e,o){let i=I(),n=i?y(t,e,i.bindings):void 0,r=n===void 0,a=i?"action_not_found":"no_context",_=u(!1);if(b(()=>{if(r&&!_.current)_.current=!0,p("tengu_keybinding_fallback_used",{action:t,context:s(e),fallback:o,reason:s(a)})},[r,t,e,o,a]),n===void 0)return o;return n===null?"":g(n)}var l=m(()=>{D();x();K();H();N();F()});function k(Q){let Y=T(5),{action:U,context:W,fallback:X,description:E,parens:R,bold:A}=Q,C=d(U,W,X),h;if(Y[0]!==A||Y[1]!==C||Y[2]!==E||Y[3]!==R)h=c(f,{chord:C,action:E,parens:R,bold:A}),Y[0]=A,Y[1]=C,Y[2]=E,Y[3]=R,Y[4]=h;else h=Y[4];return h}var v=m(()=>{l();P();O();S()});
export{d as z_a,l as A_a,k as B_a,v as C_a};
