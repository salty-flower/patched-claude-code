// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Se}from"./chunk-ap4kxy5z.js";import{o,n,od,yZ,Kd}from"./chunk-bkvzfc5q.js";import{y}from"./chunk-wdpeygc3.js";import{e,r}from"./chunk-smtaex5n.js";import{Jt,De,kn,v,d,N}from"./chunk-vm1tjjym.js";N();function r6(ee){let p=y(10),{children:k,lock:A}=ee,te=A===void 0?"always":A,[E,re]=yZ(),{isVisible:oe}=re,{rows:H}=Se(),O=v(null),S=v(0),[ne,ie]=d(0),C;if(p[0]!==E)C=(ce)=>{E(ce)},p[0]=E,p[1]=C;else C=p[1];let B=C,fe=te==="always"||!oe,F;if(p[2]!==H)F=()=>{if(!O.current){return}let{height:I}=Kd(O.current);if(I>S.current)S.current=Math.min(I,H),ie(S.current)},p[2]=H,p[3]=F;else F=p[3];kn(F);const G=fe?ne:void 0;let R;if(p[4]!==k)R=e(o,{ref:O,flexDirection:"column",children:k}),p[4]=k,p[5]=R;else R=p[5];let J;if(p[6]!==B||p[7]!==G||p[8]!==R)J=e(o,{minHeight:G,ref:B,children:R}),p[6]=B,p[7]=G,p[8]=R,p[9]=J;else J=p[9];return J}N();N();function Ie(Re){let w=y(11),{children:h,height:g,screenReaderLabel:x}=Re;if(De(i)){return h}const L=x===void 0;let P;if(w[0]!==x||w[1]!==L)P=e(od,{fromLeftEdge:!0,flexShrink:0,children:r(n,{"aria-hidden":L,"aria-label":x,dimColor:!0,children:["  ","\u23BF \xA0"]})}),w[0]=x,w[1]=L,w[2]=P;else P=w[2];let b;if(w[3]!==h)b=e(o,{flexShrink:1,flexGrow:1,children:h}),w[3]=h,w[4]=b;else b=w[4];let K;if(w[5]!==g||w[6]!==P||w[7]!==b)K=e(M,{children:r(o,{flexDirection:"row",height:g,overflowY:"hidden",children:[P,b]})}),w[5]=g,w[6]=P,w[7]=b,w[8]=K;else K=w[8];let D=K;if(g!==void 0){return D}let Q;if(w[9]!==D)Q=e(r6,{lock:"offscreen",children:D}),w[9]=D,w[10]=Q;else Q=w[10];return Q}var i=Jt(!1);function Dye(){return De(i)}function M(he){let ge=y(2),{children:T}=he,U;if(ge[0]!==T)U=e(i.Provider,{value:!0,children:T}),ge[0]=T,ge[1]=U;else U=ge[1];return U}
export{r6,Ie,Dye};
