// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{a}from"./chunk-qymratxs.js";import{WKt}from"./chunk-7jgt373m.js";import{TEt}from"./chunk-1mjmnrs1.js";import{tut,VPe}from"./chunk-jc1bvqd6.js";import{y}from"./chunk-hshe4789.js";import{c9}from"./chunk-rk092hnv.js";import{PTe,h0}from"./chunk-psjx8myz.js";import{e}from"./chunk-zhg3ync1.js";import{E,d,N}from"./chunk-w8p0f9k6.js";import{fgt,ALe,F9e}from"./chunk-a9t5srbs.js";import{O}from"./chunk-5dnafksn.js";import{p}from"./chunk-2cavdc9w.js";N();var T={light:"#f9f9f7",dark:"#1f1f1e"};function Ljn(t,o,n){if(!n)return;let i;if(t==="auto"){if(o===void 0)return;i=o}else i=F9e(t);return TEt(i)?T.light:T.dark}function f(){let S=y(4),[l,x]=d(fgt),k,_;if(S[0]===p)k=()=>ALe(()=>x(fgt())),_=[],S[0]=k,S[1]=_;else k=S[0],_=S[1];E(k,_);let A;if(S[2]!==l)A=Ljn(tut(),l,WKt()),S[2]=l,S[3]=A;else A=S[3];return A}function ADt(I){let R=y(9),{children:u,mouseTracking:c,killRing:g}=I,h=f(),v;if(R[0]!==u||R[1]!==g)v=e(VPe,{handle:g,children:u}),R[0]=u,R[1]=g,R[2]=v;else v=R[2];let r=v;if(PTe()){let m;if(R[3]!==c)m=c??h0(),R[3]=c,R[4]=m;else m=R[4];let C;if(R[5]!==h||R[6]!==m||R[7]!==r)C=e(c9,{mouseTracking:m,background:h,children:r}),R[5]=h,R[6]=m,R[7]=r,R[8]=C;else C=R[8];return C}return r}function Lbr(){if(O()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{Ljn,ADt,Lbr};
