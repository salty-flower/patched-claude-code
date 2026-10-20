// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{xs}from"./chunk-qqa5xnw4.js";import{Pc,Bg,TKt,XB}from"./chunk-9g0xctkw.js";import{FVt}from"./chunk-ycmbg1gy.js";import{w}from"./chunk-mjaw4h5n.js";import{e}from"./chunk-q4w894bt.js";import{ke,zBe,B}from"./chunk-2txtxkxk.js";B();function b_e(u){let f=w(16),{children:m,mouseTracking:p,surface:c}=u,i=p===void 0?"full":p,k=ke(Bg),r=ke(XB),t=ke(TKt),M,F;if(f[0]!==t||f[1]!==c||f[2]!==r)M=()=>{if(!r||!c){return}let A=xs().get(process.stdout);let N=t.set("surface",c);if(!A?.keepForNextFrame(N))r(N);return()=>{let P=t.reset("surface");if(!A?.keepForNextFrame(P))r(P)}},F=[r,t,c],f[0]=t,f[1]=c,f[2]=r,f[3]=M,f[4]=F;else M=f[3],F=f[4];zBe(M,F);let C,L;if(f[5]!==t||f[6]!==i||f[7]!==r)C=()=>{let a=xs().get(process.stdout);if(!r){return}let b=(a?.claimHeldAltScreen()?t.reset("mouse"):"")+t.set("altScreen")+t.set("mouse",i)+(a?.nativeCursorSeq??"");if(!a?.keepForNextFrame(b))r(b);return a?.setAltScreenActive(!0,i),()=>{if(!a?.holdAltScreenLeave(()=>d(a,t,r)))d(a,t,r)}},L=[r,t,i],f[5]=t,f[6]=i,f[7]=r,f[8]=C,f[9]=L;else C=f[8],L=f[9];zBe(C,L);const T=k?.rows??24,g=i==="full";let y;if(f[10]!==m||f[11]!==g)y=e(FVt,{value:g,children:m}),f[10]=m,f[11]=g,f[12]=y;else y=f[12];let j;if(f[13]!==T||f[14]!==y)j=e(Pc,{flexDirection:"column",height:T,width:"100%",flexShrink:0,children:y}),f[13]=T,f[14]=y,f[15]=j;else j=f[15];return j}function d(u,m,p){let c=u?.setAltScreenActive(!1)??"";u?.clearTextSelection();let i=m.reset("mouse"),k=m.reset("altScreen"),r=k!==""&&!u?.hasUnmounted,t=r?m.reassert("extendedKeys"):"",f=r?u?.nativeCursorSeq??"":"";p(c+i+k+t+f)}
export{b_e};
