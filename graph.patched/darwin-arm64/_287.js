// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{ieb as S,jeb as d}from"./_496.js";import{leb as c,neb as a}from"./_497.js";import{TIb as l,_Ib as t,jJb as r,lJb as x}from"./_577.js";import{Exd as v}from"./_839.js";function b(N){let g=S(3),{session:f,children:p}=N,T;if(g[0]!==p||g[1]!==f)T=c(n.Provider,{value:f,children:p}),g[0]=p,g[1]=f,g[2]=T;else T=g[2];return T}function m(i){let C=S(3),e=t(n);if(!e){throw ReferenceError("useSession cannot be called outside of a <SessionProvider />")}let R;if(C[0]!==i||C[1]!==e)R=()=>i?i(e):e,C[0]=i,C[1]=e,C[2]=R;else R=C[2];let P=R;return r(e.subscribe,P,P)}var n;var h=v(()=>{x();a();d();n=l(null)});
export{b as kE,m as lE,h as mE};
