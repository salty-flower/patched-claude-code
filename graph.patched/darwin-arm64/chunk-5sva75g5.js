// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{bo}from"./chunk-p6w7gvs4.js";import{L$,r9,jT,w6e,ohe,Ta,Fk,xP}from"./chunk-8myrmvax.js";import{fM,A8}from"./chunk-svvg3yvm.js";import{g}from"./chunk-8mr77ghb.js";import{e}from"./chunk-80eepr01.js";import{We,Oie,N}from"./chunk-5752v0zq.js";N();function hG(C){let d=g(11),{children:m,mouseTracking:w,background:s}=C,n=w===void 0?"full":w,D=We(Fk),t=We(xP),A,S;if(d[0]!==s||d[1]!==t)A=()=>{let p=bo.get(process.stdout);if(!t||!s){return}return t(w6e(s)),p?.setAltScreenBackground(s),()=>{if(p?!p.isAltScreenActive:!1){return}p?.setAltScreenBackground(void 0),t(ohe())}},S=[t,s],d[0]=s,d[1]=t,d[2]=A,d[3]=S;else A=d[2],S=d[3];Oie(A,S);let v,y;if(d[4]!==n||d[5]!==t)v=()=>{let f=bo.get(process.stdout);if(!t){return}return t(r9()+A8(n)),f?.setAltScreenActive(!0,n),()=>{let F=f?!f.isAltScreenActive:!1;if(f?.setAltScreenActive(!1),f?.clearTextSelection(),F){t(n!=="off"?fM:"");return}t((n!=="off"?fM:"")+jT()+(f?.hasUnmounted?"":L$()))}},y=[t,n],d[4]=n,d[5]=t,d[6]=v,d[7]=y;else v=d[6],y=d[7];Oie(v,y);const a=D?.rows??24;let P;if(d[8]!==m||d[9]!==a)P=e(Ta,{flexDirection:"column",height:a,width:"100%",flexShrink:0,children:m}),d[8]=m,d[9]=a,d[10]=P;else P=d[10];return P}
export{hG};
