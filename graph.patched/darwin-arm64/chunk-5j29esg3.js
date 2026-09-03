// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{ui}from"./chunk-7tca4a0m.js";import{H2,Uz,yC,t4e,Rbe,Xa,yH,RI}from"./chunk-z5w7grep.js";import{RF,$7}from"./chunk-eeyaf3gb.js";import{_}from"./chunk-0jrfbepr.js";import{e}from"./chunk-v5r13aq1.js";import{Ge,Vce,j}from"./chunk-xyxaqzpf.js";j();function I4(C){let d=_(11),{children:m,mouseTracking:w,background:s}=C,n=w===void 0?"full":w,D=Ge(yH),t=Ge(RI),A,S;if(d[0]!==s||d[1]!==t)A=()=>{let p=ui().get(process.stdout);if(!t||!s){return}return t(t4e(s)),p?.setAltScreenBackground(s),()=>{if(p?!p.isAltScreenActive:!1){return}p?.setAltScreenBackground(void 0),t(Rbe())}},S=[t,s],d[0]=s,d[1]=t,d[2]=A,d[3]=S;else A=d[2],S=d[3];Vce(A,S);let v,y;if(d[4]!==n||d[5]!==t)v=()=>{let f=ui().get(process.stdout);if(!t){return}return t(Uz()+$7(n)),f?.setAltScreenActive(!0,n),()=>{let F=f?!f.isAltScreenActive:!1;if(f?.setAltScreenActive(!1),f?.clearTextSelection(),F){t(n!=="off"?RF:"");return}t((n!=="off"?RF:"")+yC()+(f?.hasUnmounted?"":H2()))}},y=[t,n],d[4]=n,d[5]=t,d[6]=v,d[7]=y;else v=d[6],y=d[7];Vce(v,y);const a=D?.rows??24;let P;if(d[8]!==m||d[9]!==a)P=e(Xa,{flexDirection:"column",height:a,width:"100%",flexShrink:0,children:m}),d[8]=m,d[9]=a,d[10]=P;else P=d[10];return P}
export{I4};
