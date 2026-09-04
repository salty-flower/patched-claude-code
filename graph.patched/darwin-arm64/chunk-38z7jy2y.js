// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{a}from"./chunk-g2ngvza5.js";import{Vzt}from"./chunk-q2vw2y61.js";import{wbt}from"./chunk-3n92dvfh.js";import{Wat,BIe}from"./chunk-88069q2j.js";import{y}from"./chunk-pqa42v56.js";import{iz}from"./chunk-pewhen85.js";import{nve,l0}from"./chunk-5fh4m8pg.js";import{e}from"./chunk-6ccz96s4.js";import{Xpt,aDe,nze}from"./chunk-vj7emh0p.js";import{C,p,j}from"./chunk-8wk5q2vw.js";import{O}from"./chunk-fgjq2155.js";import{f}from"./chunk-agfzafth.js";j();var T={light:"#f9f9f7",dark:"#1f1f1e"};function U$n(t,o,n){if(!n)return;let i;if(t==="auto"){if(o===void 0)return;i=o}else i=nze(t);return wbt(i)?T.light:T.dark}function d(){let E=y(4),[l,b]=p(Xpt),S,k;if(E[0]===f)S=()=>aDe(()=>b(Xpt())),k=[],E[0]=S,E[1]=k;else S=E[0],k=E[1];C(S,k);let N;if(E[2]!==l)N=U$n(Wat(),l,Vzt()),E[2]=l,E[3]=N;else N=E[3];return N}function QIt(x){let R=y(9),{children:u,mouseTracking:c,killRing:g}=x,h=d(),_;if(R[0]!==u||R[1]!==g)_=e(BIe,{handle:g,children:u}),R[0]=u,R[1]=g,R[2]=_;else _=R[2];let r=_;if(nve()){let m;if(R[3]!==c)m=c??l0(),R[3]=c,R[4]=m;else m=R[4];let A;if(R[5]!==h||R[6]!==m||R[7]!==r)A=e(iz,{mouseTracking:m,background:h,children:r}),R[5]=h,R[6]=m,R[7]=r,R[8]=A;else A=R[8];return A}return r}function Exr(){if(O()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{U$n,QIt,Exr};
