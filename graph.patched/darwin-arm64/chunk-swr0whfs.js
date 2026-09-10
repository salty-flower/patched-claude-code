// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Cs}from"./chunk-hww7p3ht.js";import{Ca,t0,b4e,eI}from"./chunk-r0mh1pvg.js";import{y}from"./chunk-jy8hazaz.js";import{e}from"./chunk-qs39f0kj.js";import{Le,lre,M}from"./chunk-xgsrj7pc.js";M();function P9(j){let a=y(13),{children:d,mouseTracking:P,background:n}=j,c=P===void 0?"full":P,q=Le(t0),r=Le(eI),t=Le(b4e),R,g;if(a[0]!==n||a[1]!==t||a[2]!==r)R=()=>{if(!r||!n){return}return r(t.set("background",n)),()=>{r(t.reset("background"))}},g=[r,t,n],a[0]=n,a[1]=t,a[2]=r,a[3]=R,a[4]=g;else R=a[3],g=a[4];lre(R,g);let k,x;if(a[5]!==t||a[6]!==c||a[7]!==r)k=()=>{let f=Cs().get(process.stdout);if(!r){return}return r(t.set("altScreen")+t.set("mouse",c)),f?.setAltScreenActive(!0,c),()=>{f?.setAltScreenActive(!1),f?.clearTextSelection();let C=t.reset("mouse");let v=t.reset("altScreen");let F=v&&!f?.hasUnmounted?t.reassert("extendedKeys"):"";r(C+v+F)}},x=[r,t,c],a[5]=t,a[6]=c,a[7]=r,a[8]=k,a[9]=x;else k=a[8],x=a[9];lre(k,x);const u=q?.rows??24;let W;if(a[10]!==d||a[11]!==u)W=e(Ca,{flexDirection:"column",height:u,width:"100%",flexShrink:0,children:d}),a[10]=d,a[11]=u,a[12]=W;else W=a[12];return W}
export{P9};
