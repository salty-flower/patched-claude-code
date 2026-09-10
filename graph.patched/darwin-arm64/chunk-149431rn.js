// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{a}from"./chunk-dv6tepz3.js";import{$Yt}from"./chunk-yt29e1qq.js";import{mvt}from"./chunk-nqc9vg43.js";import{Ldt,hDe}from"./chunk-cz2552wv.js";import{y}from"./chunk-jy8hazaz.js";import{P9}from"./chunk-swr0whfs.js";import{Fke,P0}from"./chunk-580mw5b0.js";import{e}from"./chunk-qs39f0kj.js";import{E,d,M}from"./chunk-xgsrj7pc.js";import{Wht,jMe,u5e}from"./chunk-c4hkpa14.js";import{O}from"./chunk-10wetekf.js";import{p}from"./chunk-bkhfcpjc.js";M();var T={light:"#f9f9f7",dark:"#1f1f1e"};function Czn(t,o,n){if(!n)return;let i;if(t==="auto"){if(o===void 0)return;i=o}else i=u5e(t);return mvt(i)?T.light:T.dark}function f(){let S=y(4),[l,x]=d(Wht),k,N;if(S[0]===p)k=()=>jMe(()=>x(Wht())),N=[],S[0]=k,S[1]=N;else k=S[0],N=S[1];E(k,N);let _;if(S[2]!==l)_=Czn(Ldt(),l,$Yt()),S[2]=l,S[3]=_;else _=S[3];return _}function AMt(I){let R=y(9),{children:u,mouseTracking:c,killRing:g}=I,h=f(),A;if(R[0]!==u||R[1]!==g)A=e(hDe,{handle:g,children:u}),R[0]=u,R[1]=g,R[2]=A;else A=R[2];let r=A;if(Fke()){let m;if(R[3]!==c)m=c??P0(),R[3]=c,R[4]=m;else m=R[4];let v;if(R[5]!==h||R[6]!==m||R[7]!==r)v=e(P9,{mouseTracking:m,background:h,children:r}),R[5]=h,R[6]=m,R[7]=r,R[8]=v;else v=R[8];return v}return r}function Bvr(){if(O()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{Czn,AMt,Bvr};
