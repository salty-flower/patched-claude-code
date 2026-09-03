// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{we}from"./chunk-zvbtt3p1.js";import{o,n,md,Ste,Gy}from"./chunk-t50adtrb.js";import{_}from"./chunk-0jrfbepr.js";import{e,r}from"./chunk-v5r13aq1.js";import{hn,B,Ge,Dn,v,d,j}from"./chunk-xyxaqzpf.js";j();function N8(te){let p=_(10),{children:k,lock:q}=te,re=q===void 0?"always":q,[D,oe]=Ste(),{isVisible:ne}=oe,{rows:M}=we(),E=v(null),H=v(0),[ie,ce]=d(0),z;if(p[0]!==D)z=(fe)=>{D(fe)},p[0]=D,p[1]=z;else z=p[1];let O=z,ae=re==="always"||!ne,A;if(p[2]!==M)A=()=>{if(!E.current){return}let{height:F}=Gy(E.current);if(F>H.current)H.current=Math.min(F,M),ce(H.current)},p[2]=M,p[3]=A;else A=p[3];Dn(A);const S=ae?ie:void 0;let R;if(p[4]!==k)R=e(o,{ref:E,flexDirection:"column",children:k}),p[4]=k,p[5]=R;else R=p[5];let I;if(p[6]!==O||p[7]!==S||p[8]!==R)I=e(o,{minHeight:S,ref:O,children:R}),p[6]=O,p[7]=S,p[8]=R,p[9]=I;else I=p[9];return I}j();j();function Ie(he){let w=_(11),{children:h,height:g,screenReaderLabel:x}=he;if(Ge(i)){return h}const C=x===void 0;let y;if(w[0]!==x||w[1]!==C)y=e(md,{fromLeftEdge:!0,flexShrink:0,children:r(n,{"aria-hidden":C,"aria-label":x,dimColor:!0,children:["  ","\u23BF \xA0"]})}),w[0]=x,w[1]=C,w[2]=y;else y=w[2];let N;if(w[3]!==h)N=e(o,{flexShrink:1,flexGrow:1,children:h}),w[3]=h,w[4]=N;else N=w[4];let J;if(w[5]!==g||w[6]!==y||w[7]!==N)J=e(P,{children:r(o,{flexDirection:"row",height:g,overflowY:"hidden",children:[y,N]})}),w[5]=g,w[6]=y,w[7]=N,w[8]=J;else J=w[8];let b=J;if(g!==void 0){return b}let K;if(w[9]!==b)K=e(N8,{lock:"offscreen",children:b}),w[9]=b,w[10]=K;else K=w[10];return K}var i=hn(!1);function nye(){return Ge(i)}function P(ge){let xe=_(2),{children:G}=ge,Q;if(xe[0]!==G)Q=e(i.Provider,{value:!0,children:G}),xe[0]=G,xe[1]=Q;else Q=xe[1];return Q}
export{N8,Ie,nye};
