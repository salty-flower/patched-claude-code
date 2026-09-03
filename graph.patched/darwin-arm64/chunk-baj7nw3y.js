// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{_}from"./chunk-0jrfbepr.js";import{r1}from"./chunk-h6md7820.js";import{o,n,ht}from"./chunk-t50adtrb.js";import{Ri}from"./chunk-ahwqxfjm.js";import{zr}from"./chunk-21xr4p8h.js";import{e,r}from"./chunk-v5r13aq1.js";import{C,d,j}from"./chunk-xyxaqzpf.js";import{f}from"./chunk-bge67taw.js";j();function P(p,L){let b=p.match(A);if(!b){return e(n,{dimColor:!0,children:p},L)}let y=b[0];let N=b.index??0;let G=p.slice(0,N);let H=p.slice(N+y.length);return r(n,{dimColor:!0,children:[G,e(ht,{url:y,children:y}),H]},L)}var A=/https?:\/\/\S+/;function Z_e(){let i=_(10),R;if(i[0]===f)R=r1.getInstance().getStatus(),i[0]=R;else R=i[0];let[t,F]=d(R),I,B;if(i[1]===f)I=()=>r1.getInstance().subscribe(F),B=[],i[1]=I,i[2]=B;else I=i[1],B=i[2];if(C(I,B),!t.isAuthenticating&&!t.error&&t.output.length===0){return null}if(!t.isAuthenticating&&!t.error){return null}let a;if(i[3]!==t.output)a=t.output.length>0&&e(o,{flexDirection:"column",children:t.output.slice(-5).map(P)}),i[3]=t.output,i[4]=a;else a=i[4];let l;if(i[5]!==t.error)l=t.error&&e(zr,{error:t.error}),i[5]=t.error,i[6]=l;else l=i[6];let D;if(i[7]!==a||i[8]!==l)D=e(o,{marginY:1,children:r(Ri,{color:"permission",title:"Authentication",children:[a,l]})}),i[7]=a,i[8]=l,i[9]=D;else D=i[9];return D}
export{Z_e};
