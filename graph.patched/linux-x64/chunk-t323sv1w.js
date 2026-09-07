// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{a}from"./chunk-bxegdt3f.js";import{Q4t}from"./chunk-dpf7tbtj.js";import{Cbt}from"./chunk-mhx71bd6.js";import{hat,Lxe}from"./chunk-rx3ttece.js";import{y}from"./chunk-y1h9ee0c.js";import{F4}from"./chunk-vt4axwh9.js";import{UAe,bI}from"./chunk-sv9mczec.js";import{e}from"./chunk-kwtapczy.js";import{E,d,F}from"./chunk-1c6mq242.js";import{Qft,g0e,P4e}from"./chunk-ar5ps2gm.js";import{L}from"./chunk-vmja0gjy.js";import{f}from"./chunk-1r5dbh9v.js";F();var T={light:"#f9f9f7",dark:"#1f1f1e"};function AFn(t,o,n){if(!n)return;let i;if(t==="auto"){if(o===void 0)return;i=o}else i=P4e(t);return Cbt(i)?T.light:T.dark}function s(){let S=y(4),[l,x]=d(Qft),k,N;if(S[0]===f)k=()=>g0e(()=>x(Qft())),N=[],S[0]=k,S[1]=N;else k=S[0],N=S[1];E(k,N);let _;if(S[2]!==l)_=AFn(hat(),l,Q4t()),S[2]=l,S[3]=_;else _=S[3];return _}function fLt(I){let R=y(9),{children:u,mouseTracking:c,killRing:g}=I,h=s(),A;if(R[0]!==u||R[1]!==g)A=e(Lxe,{handle:g,children:u}),R[0]=u,R[1]=g,R[2]=A;else A=R[2];let r=A;if(UAe()){let m;if(R[3]!==c)m=c??bI(),R[3]=c,R[4]=m;else m=R[4];let v;if(R[5]!==h||R[6]!==m||R[7]!==r)v=e(F4,{mouseTracking:m,background:h,children:r}),R[5]=h,R[6]=m,R[7]=r,R[8]=v;else v=R[8];return v}return r}function pmr(){if(L()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{AFn,fLt,pmr};
