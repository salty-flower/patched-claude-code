// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{a}from"./chunk-dq2s4wjn.js";import{pqt}from"./chunk-k8be229j.js";import{z_t}from"./chunk-xhc3yqr3.js";import{Gst,GHe}from"./chunk-8gypb3p1.js";import{_}from"./chunk-c8ey99v5.js";import{f4}from"./chunk-ypk4we6b.js";import{iAe,wH}from"./chunk-cebek1ce.js";import{e}from"./chunk-smtaex5n.js";import{Tut,oPe,vGe}from"./chunk-n0w77gzh.js";import{E,d,N}from"./chunk-jegfnmzv.js";import{P}from"./chunk-s37nbkm2.js";import{f}from"./chunk-te942vjn.js";N();var T={light:"#f9f9f7",dark:"#1f1f1e"};function UNn(t,o,n){if(!n)return;let i;if(t==="auto"){if(o===void 0)return;i=o}else i=vGe(t);return z_t(i)?T.light:T.dark}function s(){let y=_(4),[l,x]=d(Tut),S,k;if(y[0]===f)S=()=>oPe(()=>x(Tut())),k=[],y[0]=S,y[1]=k;else S=y[0],k=y[1];E(S,k);let A;if(y[2]!==l)A=UNn(Gst(),l,pqt()),y[2]=l,y[3]=A;else A=y[3];return A}function xHt(I){let R=_(9),{children:u,mouseTracking:c,killRing:g}=I,h=s(),v;if(R[0]!==u||R[1]!==g)v=e(GHe,{handle:g,children:u}),R[0]=u,R[1]=g,R[2]=v;else v=R[2];let r=v;if(iAe()){let m;if(R[3]!==c)m=c??wH(),R[3]=c,R[4]=m;else m=R[4];let C;if(R[5]!==h||R[6]!==m||R[7]!==r)C=e(f4,{mouseTracking:m,background:h,children:r}),R[5]=h,R[6]=m,R[7]=r,R[8]=C;else C=R[8];return C}return r}function Jdr(){if(P()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{UNn,xHt,Jdr};
