// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{ks}from"./chunk-gk57vfsv.js";import{kl,yw,Omt,oB}from"./chunk-35z18qft.js";import{w}from"./chunk-1qj92kzv.js";import{e}from"./chunk-srmsc891.js";import{Ie,Cbe,L}from"./chunk-1cnhgfv0.js";L();function Zee(z){let l=w(13),{children:f,mouseTracking:R,surface:a}=z,c=R===void 0?"full":R,C=Ie(yw),t=Ie(oB),r=Ie(Omt),h,S;if(l[0]!==r||l[1]!==a||l[2]!==t)h=()=>{if(!t||!a){return}return t(r.set("surface",a)),()=>{t(r.reset("surface"))}},S=[t,r,a],l[0]=r,l[1]=a,l[2]=t,l[3]=h,l[4]=S;else h=l[3],S=l[4];Cbe(h,S);let g,y;if(l[5]!==r||l[6]!==c||l[7]!==t)g=()=>{let n=ks().get(process.stdout);if(!t){return}return t(r.set("altScreen")+r.set("mouse",c)+(n?.nativeCursorSeq??"")),n?.setAltScreenActive(!0,c),()=>{n?.setAltScreenActive(!1),n?.clearTextSelection();let W=r.reset("mouse");let T=r.reset("altScreen");let v=T!==""&&!n?.hasUnmounted;let j=v?r.reassert("extendedKeys"):"";let B=v?n?.nativeCursorSeq??"":"";t(W+T+j+B)}},y=[t,r,c],l[5]=r,l[6]=c,l[7]=t,l[8]=g,l[9]=y;else g=l[8],y=l[9];Cbe(g,y);const d=C?.rows??24;let A;if(l[10]!==f||l[11]!==d)A=e(kl,{flexDirection:"column",height:d,width:"100%",flexShrink:0,children:f}),l[10]=f,l[11]=d,l[12]=A;else A=l[12];return A}
export{Zee};
