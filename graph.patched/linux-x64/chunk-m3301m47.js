// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{we}from"./chunk-5f7qr2p0.js";import{o,t,Nu,SJ,Zy}from"./chunk-167xpx5m.js";import{g}from"./chunk-yhctzac5.js";import{e,r}from"./chunk-azctepqx.js";import{fn,U,ze,Zn,E,u,N}from"./chunk-q0z49y3j.js";N();function X7(te){let p=g(10),{children:D,lock:z}=te,re=z===void 0?"always":z,[M,oe]=SJ(),{isVisible:ne}=oe,{rows:H}=we(),O=E(null),S=E(0),[ie,ce]=u(0),A;if(p[0]!==M)A=(fe)=>{M(fe)},p[0]=M,p[1]=A;else A=p[1];let B=A,ae=re==="always"||!ne,F;if(p[2]!==H)F=()=>{if(!O.current){return}let{height:I}=Zy(O.current);if(I>S.current)S.current=Math.min(I,H),ce(S.current)},p[2]=H,p[3]=F;else F=p[3];Zn(F);const C=ae?ie:void 0;let R;if(p[4]!==D)R=e(o,{ref:O,flexDirection:"column",children:D}),p[4]=D,p[5]=R;else R=p[5];let J;if(p[6]!==B||p[7]!==C||p[8]!==R)J=e(o,{minHeight:C,ref:B,children:R}),p[6]=B,p[7]=C,p[8]=R,p[9]=J;else J=p[9];return J}N();N();function Ie(he){let y=g(11),{children:h,height:x,screenReaderLabel:w}=he;if(ze(i)){return h}const G=w===void 0;let b;if(y[0]!==w||y[1]!==G)b=e(Nu,{fromLeftEdge:!0,flexShrink:0,children:r(t,{"aria-hidden":G,"aria-label":w,dimColor:!0,children:["  ","\u23BF \xA0"]})}),y[0]=w,y[1]=G,y[2]=b;else b=y[2];let P;if(y[3]!==h)P=e(o,{flexShrink:1,flexGrow:1,children:h}),y[3]=h,y[4]=P;else P=y[4];let K;if(y[5]!==x||y[6]!==b||y[7]!==P)K=e(v,{children:r(o,{flexDirection:"row",height:x,overflowY:"hidden",children:[b,P]})}),y[5]=x,y[6]=b,y[7]=P,y[8]=K;else K=y[8];let k=K;if(x!==void 0){return k}let Q;if(y[9]!==k)Q=e(X7,{lock:"offscreen",children:k}),y[9]=k,y[10]=Q;else Q=y[10];return Q}var i=fn(!1);function XNe(){return ze(i)}function v(ge){let xe=g(2),{children:L}=ge,W;if(xe[0]!==L)W=e(i.Provider,{value:!0,children:L}),xe[0]=L,xe[1]=W;else W=xe[1];return W}
export{X7,Ie,XNe};
