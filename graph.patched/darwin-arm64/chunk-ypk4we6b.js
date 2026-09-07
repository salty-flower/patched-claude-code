// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{As}from"./chunk-en1z36t1.js";import{Ua,$x,eWe,W0}from"./chunk-9m8t8c8c.js";import{_}from"./chunk-c8ey99v5.js";import{e}from"./chunk-smtaex5n.js";import{De,Jle,N}from"./chunk-jegfnmzv.js";N();function f4(U){let a=_(13),{children:d,mouseTracking:A,background:n}=U,c=A===void 0?"full":A,j=De($x),r=De(W0),t=De(eWe),M,P;if(a[0]!==n||a[1]!==t||a[2]!==r)M=()=>{if(!r||!n){return}return r(t.set("background",n)),()=>{r(t.reset("background"))}},P=[r,t,n],a[0]=n,a[1]=t,a[2]=r,a[3]=M,a[4]=P;else M=a[3],P=a[4];Jle(M,P);let R,g;if(a[5]!==t||a[6]!==c||a[7]!==r)R=()=>{let f=As().get(process.stdout);if(!r){return}return r(t.set("altScreen")+t.set("mouse",c)),f?.setAltScreenActive(!0,c),()=>{f?.setAltScreenActive(!1),f?.clearTextSelection();let q=t.reset("mouse");let k=t.reset("altScreen");let C=k&&!f?.hasUnmounted?t.reassert("extendedKeys"):"";r(q+k+C)}},g=[r,t,c],a[5]=t,a[6]=c,a[7]=r,a[8]=R,a[9]=g;else R=a[8],g=a[9];Jle(R,g);const u=j?.rows??24;let x;if(a[10]!==d||a[11]!==u)x=e(Ua,{flexDirection:"column",height:u,width:"100%",flexShrink:0,children:d}),a[10]=d,a[11]=u,a[12]=x;else x=a[12];return x}
export{f4};
