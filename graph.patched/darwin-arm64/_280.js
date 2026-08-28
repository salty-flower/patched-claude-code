// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{ieb as v,jeb as D}from"./_496.js";import{leb as u,neb as c}from"./_497.js";import{TIb as A,_Ib as i,fJb as M,hJb as l,lJb as C}from"./_577.js";import{Exd as P,Fxd as a}from"./_839.js";function V(E){let s=v(4),{children:d}=E,y;if(s[0]===a)y=[],s[0]=y;else y=s[0];let t=l(y),x;if(s[1]===a)x={getDenials:()=>t.current,recordDenial:(K)=>{t.current=[K,...t.current.slice(0,p-1)]},removeDenial:(S)=>{t.current=t.current.filter((k)=>k!==S)}},s[1]=x;else x=s[1];let q=x,R;if(s[2]!==d)R=u(n.Provider,{value:q,children:d}),s[2]=d,s[3]=R;else R=s[3];return R}function N(){let g=i(n);if(!g){throw ReferenceError("useAutoModeDenials cannot be called outside of an <AutoModeDenialsProvider /> (mounted by <AppStateProvider />)")}return g}var n,p=20;var b=P(()=>{C();c();D();n=A(null)});
export{V as _C,N as $C,b as aD};
