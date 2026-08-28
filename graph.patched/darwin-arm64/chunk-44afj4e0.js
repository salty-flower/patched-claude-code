// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{a}from"./chunk-bn8q5mbz.js";import{X2t}from"./chunk-2yxpncxe.js";import{Dot,Cke}from"./chunk-h5mmehc6.js";import{g}from"./chunk-8mr77ghb.js";import{rft}from"./chunk-sjhv2w8k.js";import{hG}from"./chunk-5sva75g5.js";import{gbe,sR}from"./chunk-tb6pej3t.js";import{e}from"./chunk-80eepr01.js";import{E,u,N}from"./chunk-5752v0zq.js";import{Qot,Ike,H6e}from"./chunk-gxw4t49p.js";import{U}from"./chunk-xhxj67xc.js";import{p}from"./chunk-t2kfemrk.js";N();var y={light:"#f9f9f7",dark:"#1f1f1e"};function pkn(t,o,n){if(!n)return;let i;if(t==="auto"){if(o===void 0)return;i=o}else i=H6e(t);return rft(i)?y.light:y.dark}function f(){let S=g(4),[s,x]=u(Qot),k,_;if(S[0]===p)k=()=>Ike(()=>x(Qot())),_=[],S[0]=k,S[1]=_;else k=S[0],_=S[1];E(k,_);let A;if(S[2]!==s)A=pkn(Dot(),s,X2t()),S[2]=s,S[3]=A;else A=S[3];return A}function ATt(I){let T=g(9),{children:l,mouseTracking:c,killRing:h}=I,R=f(),v;if(T[0]!==l||T[1]!==h)v=e(Cke,{handle:h,children:l}),T[0]=l,T[1]=h,T[2]=v;else v=T[2];let r=v;if(gbe()){let m;if(T[3]!==c)m=c??sR(),T[3]=c,T[4]=m;else m=T[4];let C;if(T[5]!==R||T[6]!==m||T[7]!==r)C=e(hG,{mouseTracking:m,background:R,children:r}),T[5]=R,T[6]=m,T[7]=r,T[8]=C;else C=T[8];return C}return r}function wmr(){if(U()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{pkn,ATt,wmr};
