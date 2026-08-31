// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ee}from"./chunk-ykk2gyhr.js";import{o,t,md,YZ,xS}from"./chunk-hm4dvvtr.js";import{_}from"./chunk-rykc5fv4.js";import{e,r}from"./chunk-wk3xnwvn.js";import{yn,B,We,qn,C,u,F}from"./chunk-w6mhhrt2.js";F();function OK(te){let p=_(10),{children:k,lock:q}=te,re=q===void 0?"always":q,[v,oe]=YZ(),{isVisible:ne}=oe,{rows:D}=Ee(),M=C(null),E=C(0),[ie,ce]=u(0),z;if(p[0]!==v)z=(fe)=>{v(fe)},p[0]=v,p[1]=z;else z=p[1];let H=z,ae=re==="always"||!ne,A;if(p[2]!==D)A=()=>{if(!M.current){return}let{height:I}=xS(M.current);if(I>E.current)E.current=Math.min(I,D),ce(E.current)},p[2]=D,p[3]=A;else A=p[3];qn(A);const O=ae?ie:void 0;let R;if(p[4]!==k)R=e(o,{ref:M,flexDirection:"column",children:k}),p[4]=k,p[5]=R;else R=p[5];let J;if(p[6]!==H||p[7]!==O||p[8]!==R)J=e(o,{minHeight:O,ref:H,children:R}),p[6]=H,p[7]=O,p[8]=R,p[9]=J;else J=p[9];return J}F();F();function Pe(he){let w=_(11),{children:h,height:g,screenReaderLabel:x}=he;if(We(i)){return h}const S=x===void 0;let y;if(w[0]!==x||w[1]!==S)y=e(md,{fromLeftEdge:!0,flexShrink:0,children:r(t,{"aria-hidden":S,"aria-label":x,dimColor:!0,children:["  ","\u23BF \xA0"]})}),w[0]=x,w[1]=S,w[2]=y;else y=w[2];let N;if(w[3]!==h)N=e(o,{flexShrink:1,flexGrow:1,children:h}),w[3]=h,w[4]=N;else N=w[4];let K;if(w[5]!==g||w[6]!==y||w[7]!==N)K=e(P,{children:r(o,{flexDirection:"row",height:g,overflowY:"hidden",children:[y,N]})}),w[5]=g,w[6]=y,w[7]=N,w[8]=K;else K=w[8];let b=K;if(g!==void 0){return b}let Q;if(w[9]!==b)Q=e(OK,{lock:"offscreen",children:b}),w[9]=b,w[10]=Q;else Q=w[10];return Q}var i=yn(!1);function VBe(){return We(i)}function P(ge){let xe=_(2),{children:G}=ge,U;if(xe[0]!==G)U=e(i.Provider,{value:!0,children:G}),xe[0]=G,xe[1]=U;else U=xe[1];return U}
export{OK,Pe,VBe};
