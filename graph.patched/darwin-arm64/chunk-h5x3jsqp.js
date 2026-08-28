// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{we}from"./chunk-tp4v0fb4.js";import{o,t,$u,CJ,Zy}from"./chunk-htcaw08y.js";import{g}from"./chunk-8mr77ghb.js";import{e,r}from"./chunk-80eepr01.js";import{fn,B,We,Zn,T,u,N}from"./chunk-5752v0zq.js";N();function nX(te){let p=g(10),{children:D,lock:A}=te,re=A===void 0?"always":A,[M,oe]=CJ(),{isVisible:ne}=oe,{rows:E}=we(),H=T(null),O=T(0),[ie,ce]=u(0),F;if(p[0]!==M)F=(fe)=>{M(fe)},p[0]=M,p[1]=F;else F=p[1];let S=F,ae=re==="always"||!ne,I;if(p[2]!==E)I=()=>{if(!H.current){return}let{height:J}=Zy(H.current);if(J>O.current)O.current=Math.min(J,E),ce(O.current)},p[2]=E,p[3]=I;else I=p[3];Zn(I);const C=ae?ie:void 0;let R;if(p[4]!==D)R=e(o,{ref:H,flexDirection:"column",children:D}),p[4]=D,p[5]=R;else R=p[5];let K;if(p[6]!==S||p[7]!==C||p[8]!==R)K=e(o,{minHeight:C,ref:S,children:R}),p[6]=S,p[7]=C,p[8]=R,p[9]=K;else K=p[9];return K}N();N();function Ie(he){let y=g(11),{children:h,height:x,screenReaderLabel:w}=he;if(We(i)){return h}const G=w===void 0;let b;if(y[0]!==w||y[1]!==G)b=e($u,{fromLeftEdge:!0,flexShrink:0,children:r(t,{"aria-hidden":G,"aria-label":w,dimColor:!0,children:["  ","\u23BF \xA0"]})}),y[0]=w,y[1]=G,y[2]=b;else b=y[2];let P;if(y[3]!==h)P=e(o,{flexShrink:1,flexGrow:1,children:h}),y[3]=h,y[4]=P;else P=y[4];let Q;if(y[5]!==x||y[6]!==b||y[7]!==P)Q=e(v,{children:r(o,{flexDirection:"row",height:x,overflowY:"hidden",children:[b,P]})}),y[5]=x,y[6]=b,y[7]=P,y[8]=Q;else Q=y[8];let k=Q;if(x!==void 0){return k}let U;if(y[9]!==k)U=e(nX,{lock:"offscreen",children:k}),y[9]=k,y[10]=U;else U=y[10];return U}var i=fn(!1);function o$e(){return We(i)}function v(ge){let xe=g(2),{children:L}=ge,W;if(xe[0]!==L)W=e(i.Provider,{value:!0,children:L}),xe[0]=L,xe[1]=W;else W=xe[1];return W}
export{nX,Ie,o$e};
