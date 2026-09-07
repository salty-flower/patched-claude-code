// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{be}from"./chunk-vx6rcfh8.js";import{o,n,sd,CZ,Xd}from"./chunk-hrm5smjv.js";import{_}from"./chunk-c8ey99v5.js";import{e,r}from"./chunk-smtaex5n.js";import{Jt,De,vn,C,d,N}from"./chunk-jegfnmzv.js";N();function d8(ee){let p=_(10),{children:D,lock:q}=ee,te=q===void 0?"always":q,[M,re]=CZ(),{isVisible:oe}=re,{rows:k}=be(),E=C(null),H=C(0),[ne,ie]=d(0),z;if(p[0]!==M)z=(ce)=>{M(ce)},p[0]=M,p[1]=z;else z=p[1];let O=z,fe=te==="always"||!oe,A;if(p[2]!==k)A=()=>{if(!E.current){return}let{height:F}=Xd(E.current);if(F>H.current)H.current=Math.min(F,k),ie(H.current)},p[2]=k,p[3]=A;else A=p[3];vn(A);const S=fe?ne:void 0;let R;if(p[4]!==D)R=e(o,{ref:E,flexDirection:"column",children:D}),p[4]=D,p[5]=R;else R=p[5];let I;if(p[6]!==O||p[7]!==S||p[8]!==R)I=e(o,{minHeight:S,ref:O,children:R}),p[6]=O,p[7]=S,p[8]=R,p[9]=I;else I=p[9];return I}N();N();function xe(Re){let w=_(11),{children:h,height:g,screenReaderLabel:x}=Re;if(De(i)){return h}const B=x===void 0;let y;if(w[0]!==x||w[1]!==B)y=e(sd,{fromLeftEdge:!0,flexShrink:0,children:r(n,{"aria-hidden":B,"aria-label":x,dimColor:!0,children:["  ","\u23BF \xA0"]})}),w[0]=x,w[1]=B,w[2]=y;else y=w[2];let P;if(w[3]!==h)P=e(o,{flexShrink:1,flexGrow:1,children:h}),w[3]=h,w[4]=P;else P=w[4];let J;if(w[5]!==g||w[6]!==y||w[7]!==P)J=e(v,{children:r(o,{flexDirection:"row",height:g,overflowY:"hidden",children:[y,P]})}),w[5]=g,w[6]=y,w[7]=P,w[8]=J;else J=w[8];let b=J;if(g!==void 0){return b}let K;if(w[9]!==b)K=e(d8,{lock:"offscreen",children:b}),w[9]=b,w[10]=K;else K=w[10];return K}var i=Jt(!1);function B_e(){return De(i)}function v(he){let ge=_(2),{children:G}=he,Q;if(ge[0]!==G)Q=e(i.Provider,{value:!0,children:G}),ge[0]=G,ge[1]=Q;else Q=ge[1];return Q}
export{d8,xe,B_e};
