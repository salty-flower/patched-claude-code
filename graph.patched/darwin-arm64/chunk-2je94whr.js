// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{a}from"./chunk-wkhfcbsj.js";import{D}from"./chunk-vzm3bfp5.js";import{Wun}from"./chunk-79pxazh1.js";import{HMt}from"./chunk-jnme382m.js";import{wvt,sBe}from"./chunk-zzwb5b26.js";import{b}from"./chunk-mvpw0rjp.js";import{pY}from"./chunk-f1gk2q48.js";import{WOe,QI}from"./chunk-89teerhq.js";import{e}from"./chunk-437ab22y.js";import{LRt,Cje,Htt}from"./chunk-bhxd1j6x.js";import{A,d,M}from"./chunk-ncc6kxz8.js";import{y}from"./chunk-y8wd7we8.js";M();var h={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function cir(r,o,n){if(!n)return;let t;if(r==="auto"){if(o===void 0)return;t=o}else t=Htt(r);return HMt(t)?h.light:h.dark}function m(){let S=b(4),[l,I]=d(LRt),R,k;if(S[0]===y)R=()=>Cje(()=>I(LRt())),k=[],S[0]=R,S[1]=k;else R=S[0],k=S[1];A(R,k);let E;if(S[2]!==l)E=cir(wvt(),l,Wun()),S[2]=l,S[3]=E;else E=S[3];return E}function X3t(O){let g=b(9),{children:p,mouseTracking:s,killRing:c}=O,T=m(),N;if(g[0]!==p||g[1]!==c)N=e(sBe,{handle:c,children:p}),g[0]=p,g[1]=c,g[2]=N;else N=g[2];let i=N;if(WOe()){let f;if(g[3]!==s)f=s??QI(),g[3]=s,g[4]=f;else f=g[4];let _;if(g[5]!==T||g[6]!==f||g[7]!==i)_=e(pY,{mouseTracking:f,surface:T,children:i}),g[5]=T,g[6]=f,g[7]=i,g[8]=_;else _=g[8];return _}return i}function YVr(){if(D()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{cir,X3t,YVr};
