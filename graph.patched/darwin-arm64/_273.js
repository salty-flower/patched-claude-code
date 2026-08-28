// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Ibb as s,ccb as S,ecb as C}from"./_488.js";import{ocb as A}from"./_490.js";import{Mdb as w,Odb as B}from"./_491.js";import{ieb as x,jeb as R}from"./_496.js";import{keb as c,leb as r,neb as f}from"./_497.js";import{TIb as g,eJb as i,lJb as h}from"./_577.js";import{_6c as l}from"./_781.js";import{Exd as N}from"./_839.js";import{PassThrough as E}from"stream";function W(){}function d(I){let v=x(5),{children:p}=I,{exit:a}=s(),P,k;if(v[0]!==a)P=()=>{let K=setTimeout(a,0);return()=>clearTimeout(K)},k=[a],v[0]=a,v[1]=P,v[2]=k;else P=v[1],k=v[2];i(P,k);let y;if(v[3]!==p)y=r(c,{children:p}),v[3]=p,v[4]=y;else y=v[4];return y}async function F(t,e){t.render(r(d,{children:e})),await t.waitUntilExit()}async function O(t,{columns:e,storageV5:n}){let u="",m=!1,o=new E;if(e!==void 0)o.columns=e;return o.on("data",(T)=>{if(m)return;m=!0,u=T.toString()}),await(await S(r(d,{children:r(b.Provider,{value:!0,children:r(w,{value:W,children:t})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),u}async function G(t,e){let n=await O(t,e);return l(n)}var b;var U=N(()=>{h();A();B();C();f();R();b=g(!1)});
export{b as bC,d as cC,F as dC,O as eC,G as fC,U as gC};
