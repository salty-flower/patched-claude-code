// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{a}from"./chunk-pv906ex9.js";import{Uqt}from"./chunk-2xhg17a0.js";import{xbt}from"./chunk-smt6rj8e.js";import{jdt,lOe}from"./chunk-h6bdhjfh.js";import{_}from"./chunk-0jrfbepr.js";import{I4}from"./chunk-5j29esg3.js";import{nCe,JH}from"./chunk-hge99vss.js";import{e}from"./chunk-v5r13aq1.js";import{C,d,j}from"./chunk-xyxaqzpf.js";import{ipt,gOe,p4e}from"./chunk-1qz48ww2.js";import{D}from"./chunk-gjjv0be0.js";import{f}from"./chunk-bge67taw.js";j();var T={light:"#f9f9f7",dark:"#1f1f1e"};function w1n(t,o,n){if(!n)return;let i;if(t==="auto"){if(o===void 0)return;i=o}else i=p4e(t);return xbt(i)?T.light:T.dark}function s(){let y=_(4),[l,b]=d(ipt),E,S;if(y[0]===f)E=()=>gOe(()=>b(ipt())),S=[],y[0]=E,y[1]=S;else E=y[0],S=y[1];C(E,S);let k;if(y[2]!==l)k=w1n(jdt(),l,Uqt()),y[2]=l,y[3]=k;else k=y[3];return k}function m0t(x){let R=_(9),{children:u,mouseTracking:c,killRing:g}=x,h=s(),N;if(R[0]!==u||R[1]!==g)N=e(lOe,{handle:g,children:u}),R[0]=u,R[1]=g,R[2]=N;else N=R[2];let r=N;if(nCe()){let m;if(R[3]!==c)m=c??JH(),R[3]=c,R[4]=m;else m=R[4];let A;if(R[5]!==h||R[6]!==m||R[7]!==r)A=e(I4,{mouseTracking:m,background:h,children:r}),R[5]=h,R[6]=m,R[7]=r,R[8]=A;else A=R[8];return A}return r}function FCr(){if(D()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{w1n,m0t,FCr};
