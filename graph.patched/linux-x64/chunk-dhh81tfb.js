// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{a}from"./chunk-q2vrcqny.js";import{M}from"./chunk-kh3dq6rw.js";import{Mun}from"./chunk-x71wjcev.js";import{fLt}from"./chunk-rrga261b.js";import{jvt,jUe}from"./chunk-45v5a0az.js";import{S}from"./chunk-6qjhsn35.js";import{oY}from"./chunk-m1g50vjw.js";import{OOe,B0}from"./chunk-ybvwmz5r.js";import{e}from"./chunk-437ab22y.js";import{Pxt,G2e,_nt}from"./chunk-arbhcnmx.js";import{k,d,L}from"./chunk-cf8g1269.js";import{y}from"./chunk-bbmh8g33.js";L();var h={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function For(r,o,n){if(!n)return;let t;if(r==="auto"){if(o===void 0)return;t=o}else t=_nt(r);return fLt(t)?h.light:h.dark}function m(){let R=S(4),[l,I]=d(Pxt),E,N;if(R[0]===y)E=()=>G2e(()=>I(Pxt())),N=[],R[0]=E,R[1]=N;else E=R[0],N=R[1];k(E,N);let _;if(R[2]!==l)_=For(jvt(),l,Mun()),R[2]=l,R[3]=_;else _=R[3];return _}function aVt(O){let g=S(9),{children:p,mouseTracking:s,killRing:c}=O,T=m(),v;if(g[0]!==p||g[1]!==c)v=e(jUe,{handle:c,children:p}),g[0]=p,g[1]=c,g[2]=v;else v=g[2];let i=v;if(OOe()){let f;if(g[3]!==s)f=s??B0(),g[3]=s,g[4]=f;else f=g[4];let A;if(g[5]!==T||g[6]!==f||g[7]!==i)A=e(oY,{mouseTracking:f,surface:T,children:i}),g[5]=T,g[6]=f,g[7]=i,g[8]=A;else A=g[8];return A}return i}function dKr(){if(M()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{For,aVt,dKr};
