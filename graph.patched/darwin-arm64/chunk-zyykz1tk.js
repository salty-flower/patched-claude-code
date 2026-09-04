// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{we}from"./chunk-vnftkrjc.js";import{o,n,Td,Yee,mh}from"./chunk-86a8apqx.js";import{y}from"./chunk-pqa42v56.js";import{e,r}from"./chunk-6ccz96s4.js";import{yn,B,qe,Mn,v,p,j}from"./chunk-8wk5q2vw.js";j();function S7(te){let u=y(10),{children:D,lock:z}=te,re=z===void 0?"always":z,[M,oe]=Yee(),{isVisible:ne}=oe,{rows:E}=we(),H=v(null),O=v(0),[ie,ce]=p(0),A;if(u[0]!==M)A=(fe)=>{M(fe)},u[0]=M,u[1]=A;else A=u[1];let S=A,ae=re==="always"||!ne,F;if(u[2]!==E)F=()=>{if(!H.current){return}let{height:I}=mh(H.current);if(I>O.current)O.current=Math.min(I,E),ce(O.current)},u[2]=E,u[3]=F;else F=u[3];Mn(F);const C=ae?ie:void 0;let R;if(u[4]!==D)R=e(o,{ref:H,flexDirection:"column",children:D}),u[4]=D,u[5]=R;else R=u[5];let J;if(u[6]!==S||u[7]!==C||u[8]!==R)J=e(o,{minHeight:C,ref:S,children:R}),u[6]=S,u[7]=C,u[8]=R,u[9]=J;else J=u[9];return J}j();j();function Pe(he){let w=y(11),{children:h,height:g,screenReaderLabel:x}=he;if(qe(i)){return h}const G=x===void 0;let N;if(w[0]!==x||w[1]!==G)N=e(Td,{fromLeftEdge:!0,flexShrink:0,children:r(n,{"aria-hidden":G,"aria-label":x,dimColor:!0,children:["  ","\u23BF \xA0"]})}),w[0]=x,w[1]=G,w[2]=N;else N=w[2];let b;if(w[3]!==h)b=e(o,{flexShrink:1,flexGrow:1,children:h}),w[3]=h,w[4]=b;else b=w[4];let K;if(w[5]!==g||w[6]!==N||w[7]!==b)K=e(k,{children:r(o,{flexDirection:"row",height:g,overflowY:"hidden",children:[N,b]})}),w[5]=g,w[6]=N,w[7]=b,w[8]=K;else K=w[8];let P=K;if(g!==void 0){return P}let Q;if(w[9]!==P)Q=e(S7,{lock:"offscreen",children:P}),w[9]=P,w[10]=Q;else Q=w[10];return Q}var i=yn(!1);function cSe(){return qe(i)}function k(ge){let xe=y(2),{children:L}=ge,U;if(xe[0]!==L)U=e(i.Provider,{value:!0,children:L}),xe[0]=L,xe[1]=U;else U=xe[1];return U}
export{S7,Pe,cSe};
