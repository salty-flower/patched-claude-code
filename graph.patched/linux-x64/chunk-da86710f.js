// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{_o}from"./chunk-5ksdgpmh.js";import{RF,e5,UE,Sje,Qme,Ea,MH,kR}from"./chunk-vbtj2k8h.js";import{d$,w8}from"./chunk-qrzd9bek.js";import{g}from"./chunk-yhctzac5.js";import{e}from"./chunk-azctepqx.js";import{ze,Cie,N}from"./chunk-q0z49y3j.js";N();function d6(C){let d=g(11),{children:m,mouseTracking:w,background:s}=C,n=w===void 0?"full":w,D=ze(MH),t=ze(kR),A,S;if(d[0]!==s||d[1]!==t)A=()=>{let p=_o.get(process.stdout);if(!t||!s){return}return t(Sje(s)),p?.setAltScreenBackground(s),()=>{if(p?!p.isAltScreenActive:!1){return}p?.setAltScreenBackground(void 0),t(Qme())}},S=[t,s],d[0]=s,d[1]=t,d[2]=A,d[3]=S;else A=d[2],S=d[3];Cie(A,S);let v,y;if(d[4]!==n||d[5]!==t)v=()=>{let f=_o.get(process.stdout);if(!t){return}return t(e5()+w8(n)),f?.setAltScreenActive(!0,n),()=>{let F=f?!f.isAltScreenActive:!1;if(f?.setAltScreenActive(!1),f?.clearTextSelection(),F){t(n!=="off"?d$:"");return}t((n!=="off"?d$:"")+UE()+(f?.hasUnmounted?"":RF()))}},y=[t,n],d[4]=n,d[5]=t,d[6]=v,d[7]=y;else v=d[6],y=d[7];Cie(v,y);const a=D?.rows??24;let P;if(d[8]!==m||d[9]!==a)P=e(Ea,{flexDirection:"column",height:a,width:"100%",flexShrink:0,children:m}),d[8]=m,d[9]=a,d[10]=P;else P=d[10];return P}
export{d6};
