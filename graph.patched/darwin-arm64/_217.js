// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{vy as A,wy as K}from"./_224.js";import{Wy as S,Xy as O}from"./_234.js";import{ecb as J,kbb as u,nbb as i,sbb as y}from"./_488.js";import{ieb as D,jeb as I}from"./_496.js";import{leb as r,meb as s,neb as C}from"./_497.js";import{aJb as g,iJb as b,lJb as H}from"./_577.js";import{hnc as n,inc as G}from"./_668.js";import{Exd as F,Fxd as h}from"./_839.js";function U(p,z){let x=p.match(B);if(!x){return r(i,{dimColor:!0,children:p},z)}let R=x[0];let E=x.index??0;let tt=p.slice(0,E);let rt=p.slice(E+R.length);return s(i,{dimColor:!0,children:[tt,r(y,{url:R,children:R}),rt]},z)}function Q(){let c=D(10),T;if(c[0]===h)T=n.getInstance().getStatus(),c[0]=T;else T=c[0];let[t,M]=b(T),Y,q;if(c[1]===h)Y=()=>n.getInstance().subscribe(M),q=[],c[1]=Y,c[2]=q;else Y=c[1],q=c[2];if(g(Y,q),!t.isAuthenticating&&!t.error&&t.output.length===0){return null}if(!t.isAuthenticating&&!t.error){return null}let l;if(c[3]!==t.output)l=t.output.length>0&&r(u,{flexDirection:"column",children:t.output.slice(-5).map(U)}),c[3]=t.output,c[4]=l;else l=c[4];let f;if(c[5]!==t.error)f=t.error&&r(A,{error:t.error}),c[5]=t.error,c[6]=f;else f=c[6];let v;if(c[7]!==l||c[8]!==f)v=r(u,{marginY:1,children:s(S,{color:"permission",title:"Authentication",children:[l,f]})}),c[7]=l,c[8]=f,c[9]=v;else v=c[9];return v}var B;var V=F(()=>{H();J();G();K();O();C();I();B=/https?:\/\/\S+/});
export{Q as ey,V as fy};
