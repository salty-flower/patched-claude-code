// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{xo}from"./chunk-n08teymt.js";import{EU,u4,$A,HWe,Bye,Ya,MI,Lx}from"./chunk-d4fzrbr9.js";import{$N,T6}from"./chunk-ak9ad989.js";import{y}from"./chunk-a5ahs27a.js";import{e}from"./chunk-ys8dsnqt.js";import{ze,jae,F}from"./chunk-v59pjxqq.js";F();function Qq(C){let d=y(11),{children:m,mouseTracking:w,background:s}=C,n=w===void 0?"full":w,D=ze(MI),t=ze(Lx),A,S;if(d[0]!==s||d[1]!==t)A=()=>{let p=xo.get(process.stdout);if(!t||!s){return}return t(HWe(s)),p?.setAltScreenBackground(s),()=>{if(p?!p.isAltScreenActive:!1){return}p?.setAltScreenBackground(void 0),t(Bye())}},S=[t,s],d[0]=s,d[1]=t,d[2]=A,d[3]=S;else A=d[2],S=d[3];jae(A,S);let v,P;if(d[4]!==n||d[5]!==t)v=()=>{let f=xo.get(process.stdout);if(!t){return}return t(u4()+T6(n)),f?.setAltScreenActive(!0,n),()=>{let H=f?!f.isAltScreenActive:!1;if(f?.setAltScreenActive(!1),f?.clearTextSelection(),H){t(n!=="off"?$N:"");return}t((n!=="off"?$N:"")+$A()+(f?.hasUnmounted?"":EU()))}},P=[t,n],d[4]=n,d[5]=t,d[6]=v,d[7]=P;else v=d[6],P=d[7];jae(v,P);const a=D?.rows??24;let x;if(d[8]!==m||d[9]!==a)x=e(Ya,{flexDirection:"column",height:a,width:"100%",flexShrink:0,children:m}),d[8]=m,d[9]=a,d[10]=x;else x=d[10];return x}
export{Qq};
