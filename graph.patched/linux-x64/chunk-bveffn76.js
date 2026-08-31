// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{a}from"./chunk-m9gbfvns.js";import{mWt}from"./chunk-zkmsnx9j.js";import{pht}from"./chunk-nfq0nhad.js";import{rlt,uxe}from"./chunk-90j7vxwd.js";import{y}from"./chunk-a5ahs27a.js";import{Qq}from"./chunk-kr14q0mt.js";import{twe,vC}from"./chunk-5z4q9wvk.js";import{e}from"./chunk-ys8dsnqt.js";import{A,u,F}from"./chunk-v59pjxqq.js";import{Slt,hxe,xWe}from"./chunk-7xa3banm.js";import{P}from"./chunk-edxkqkcr.js";import{d}from"./chunk-5nnrmmhw.js";F();var T={light:"#f9f9f7",dark:"#1f1f1e"};function j0n(t,o,n){if(!n)return;let i;if(t==="auto"){if(o===void 0)return;i=o}else i=xWe(t);return pht(i)?T.light:T.dark}function f(){let E=y(4),[p,x]=u(Slt),S,k;if(E[0]===d)S=()=>hxe(()=>x(Slt())),k=[],E[0]=S,E[1]=k;else S=E[0],k=E[1];A(S,k);let N;if(E[2]!==p)N=j0n(rlt(),p,mWt()),E[2]=p,E[3]=N;else N=E[3];return N}function OTt(I){let R=y(9),{children:l,mouseTracking:c,killRing:g}=I,h=f(),_;if(R[0]!==l||R[1]!==g)_=e(uxe,{handle:g,children:l}),R[0]=l,R[1]=g,R[2]=_;else _=R[2];let r=_;if(twe()){let m;if(R[3]!==c)m=c??vC(),R[3]=c,R[4]=m;else m=R[4];let v;if(R[5]!==h||R[6]!==m||R[7]!==r)v=e(Qq,{mouseTracking:m,background:h,children:r}),R[5]=h,R[6]=m,R[7]=r,R[8]=v;else v=R[8];return v}return r}function KHr(){if(P()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{j0n,OTt,KHr};
