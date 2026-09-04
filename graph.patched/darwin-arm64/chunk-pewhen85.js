// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{mi}from"./chunk-s6hc8jdp.js";import{C2,Dz,SC,c3e,ySe,el,bH,CI}from"./chunk-npzr9fk5.js";import{TF,k7}from"./chunk-amw0a44w.js";import{y}from"./chunk-pqa42v56.js";import{e}from"./chunk-6ccz96s4.js";import{qe,Cue,j}from"./chunk-8wk5q2vw.js";j();function iz(D){let d=y(11),{children:m,mouseTracking:w,background:s}=D,n=w===void 0?"full":w,F=qe(bH),t=qe(CI),A,S;if(d[0]!==s||d[1]!==t)A=()=>{let p=mi().get(process.stdout);if(!t||!s){return}return t(c3e(s)),p?.setAltScreenBackground(s),()=>{if(p?!p.isAltScreenActive:!1){return}p?.setAltScreenBackground(void 0),t(ySe())}},S=[t,s],d[0]=s,d[1]=t,d[2]=A,d[3]=S;else A=d[2],S=d[3];Cue(A,S);let v,P;if(d[4]!==n||d[5]!==t)v=()=>{let f=mi().get(process.stdout);if(!t){return}return t(Dz()+k7(n)),f?.setAltScreenActive(!0,n),()=>{let H=f?!f.isAltScreenActive:!1;if(f?.setAltScreenActive(!1),f?.clearTextSelection(),H){t(n!=="off"?TF:"");return}t((n!=="off"?TF:"")+SC()+(f?.hasUnmounted?"":C2()))}},P=[t,n],d[4]=n,d[5]=t,d[6]=v,d[7]=P;else v=d[6],P=d[7];Cue(v,P);const a=F?.rows??24;let x;if(d[8]!==m||d[9]!==a)x=e(el,{flexDirection:"column",height:a,width:"100%",flexShrink:0,children:m}),d[8]=m,d[9]=a,d[10]=x;else x=d[10];return x}
export{iz};
