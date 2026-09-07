// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{a}from"./chunk-td8fcebs.js";import{Wqt}from"./chunk-jz4ynexx.js";import{Ryt}from"./chunk-jde10qxn.js";import{xst,ORe}from"./chunk-qgb89med.js";import{y}from"./chunk-wdpeygc3.js";import{o4}from"./chunk-0hmqt685.js";import{QEe,uR}from"./chunk-yeer05rb.js";import{e}from"./chunk-smtaex5n.js";import{out,zLe,cqe}from"./chunk-9m74qzt9.js";import{E,d,N}from"./chunk-vm1tjjym.js";import{L}from"./chunk-y7bjs1t6.js";import{p}from"./chunk-55pqc2de.js";N();var T={light:"#f9f9f7",dark:"#1f1f1e"};function uOn(t,o,n){if(!n)return;let i;if(t==="auto"){if(o===void 0)return;i=o}else i=cqe(t);return Ryt(i)?T.light:T.dark}function f(){let S=y(4),[l,x]=d(out),k,_;if(S[0]===p)k=()=>zLe(()=>x(out())),_=[],S[0]=k,S[1]=_;else k=S[0],_=S[1];E(k,_);let A;if(S[2]!==l)A=uOn(xst(),l,Wqt()),S[2]=l,S[3]=A;else A=S[3];return A}function pRt(I){let R=y(9),{children:u,mouseTracking:c,killRing:g}=I,h=f(),v;if(R[0]!==u||R[1]!==g)v=e(ORe,{handle:g,children:u}),R[0]=u,R[1]=g,R[2]=v;else v=R[2];let r=v;if(QEe()){let m;if(R[3]!==c)m=c??uR(),R[3]=c,R[4]=m;else m=R[4];let C;if(R[5]!==h||R[6]!==m||R[7]!==r)C=e(o4,{mouseTracking:m,background:h,children:r}),R[5]=h,R[6]=m,R[7]=r,R[8]=C;else C=R[8];return C}return r}function ddr(){if(L()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{uOn,pRt,ddr};
