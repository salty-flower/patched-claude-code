// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ee}from"./chunk-eze1rwjh.js";import{o,t,pd,qZ,Rb}from"./chunk-snr8xejh.js";import{y}from"./chunk-a5ahs27a.js";import{e,r}from"./chunk-ys8dsnqt.js";import{_n,U,ze,Gn,v,u,F}from"./chunk-v59pjxqq.js";F();function R3(te){let p=y(10),{children:D,lock:q}=te,re=q===void 0?"always":q,[M,oe]=qZ(),{isVisible:ne}=oe,{rows:E}=Ee(),H=v(null),O=v(0),[ie,ce]=u(0),z;if(p[0]!==M)z=(fe)=>{M(fe)},p[0]=M,p[1]=z;else z=p[1];let S=z,ae=re==="always"||!ne,A;if(p[2]!==E)A=()=>{if(!H.current){return}let{height:I}=Rb(H.current);if(I>O.current)O.current=Math.min(I,E),ce(O.current)},p[2]=E,p[3]=A;else A=p[3];Gn(A);const B=ae?ie:void 0;let R;if(p[4]!==D)R=e(o,{ref:H,flexDirection:"column",children:D}),p[4]=D,p[5]=R;else R=p[5];let J;if(p[6]!==S||p[7]!==B||p[8]!==R)J=e(o,{minHeight:B,ref:S,children:R}),p[6]=S,p[7]=B,p[8]=R,p[9]=J;else J=p[9];return J}F();F();function Le(he){let w=y(11),{children:h,height:g,screenReaderLabel:x}=he;if(ze(i)){return h}const C=x===void 0;let N;if(w[0]!==x||w[1]!==C)N=e(pd,{fromLeftEdge:!0,flexShrink:0,children:r(t,{"aria-hidden":C,"aria-label":x,dimColor:!0,children:["  ","\u23BF \xA0"]})}),w[0]=x,w[1]=C,w[2]=N;else N=w[2];let b;if(w[3]!==h)b=e(o,{flexShrink:1,flexGrow:1,children:h}),w[3]=h,w[4]=b;else b=w[4];let K;if(w[5]!==g||w[6]!==N||w[7]!==b)K=e(k,{children:r(o,{flexDirection:"row",height:g,overflowY:"hidden",children:[N,b]})}),w[5]=g,w[6]=N,w[7]=b,w[8]=K;else K=w[8];let P=K;if(g!==void 0){return P}let Q;if(w[9]!==P)Q=e(R3,{lock:"offscreen",children:P}),w[9]=P,w[10]=Q;else Q=w[10];return Q}var i=_n(!1);function NUe(){return ze(i)}function k(ge){let xe=y(2),{children:G}=ge,W;if(xe[0]!==G)W=e(i.Provider,{value:!0,children:G}),xe[0]=G,xe[1]=W;else W=xe[1];return W}
export{R3,Le,NUe};
