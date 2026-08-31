// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{a}from"./chunk-w3k8bej2.js";import{h9t}from"./chunk-kqx0tzt6.js";import{Iht}from"./chunk-kth57cvg.js";import{ilt,pxe}from"./chunk-08qy2y0j.js";import{_}from"./chunk-rykc5fv4.js";import{tq}from"./chunk-reat7fdd.js";import{fTe,Hk}from"./chunk-vw68yttj.js";import{e}from"./chunk-wk3xnwvn.js";import{A,u,F}from"./chunk-w6mhhrt2.js";import{Tlt,yxe,D9e}from"./chunk-ha74fg9f.js";import{D}from"./chunk-zyp65cht.js";import{d}from"./chunk-rqyyny1n.js";F();var T={light:"#f9f9f7",dark:"#1f1f1e"};function VDn(t,o,n){if(!n)return;let i;if(t==="auto"){if(o===void 0)return;i=o}else i=D9e(t);return Iht(i)?T.light:T.dark}function f(){let y=_(4),[p,x]=u(Tlt),E,S;if(y[0]===d)E=()=>yxe(()=>x(Tlt())),S=[],y[0]=E,y[1]=S;else E=y[0],S=y[1];A(E,S);let k;if(y[2]!==p)k=VDn(ilt(),p,h9t()),y[2]=p,y[3]=k;else k=y[3];return k}function NRt(I){let R=_(9),{children:l,mouseTracking:c,killRing:g}=I,h=f(),N;if(R[0]!==l||R[1]!==g)N=e(pxe,{handle:g,children:l}),R[0]=l,R[1]=g,R[2]=N;else N=R[2];let r=N;if(fTe()){let m;if(R[3]!==c)m=c??Hk(),R[3]=c,R[4]=m;else m=R[4];let v;if(R[5]!==h||R[6]!==m||R[7]!==r)v=e(tq,{mouseTracking:m,background:h,children:r}),R[5]=h,R[6]=m,R[7]=r,R[8]=v;else v=R[8];return v}return r}function tTr(){if(D()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{VDn,NRt,tTr};
