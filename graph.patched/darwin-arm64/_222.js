// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{AA as x,JA as u,LA as z,zA as p}from"./_260.js";import{ecb as w,ybb as R}from"./_488.js";import{ieb as L,jeb as F}from"./_496.js";import{leb as r,neb as A}from"./_497.js";import{Exd as q}from"./_839.js";function B(O){let a=L(21),{onConfirm:e,onCancel:o,confirmLabel:h,cancelLabel:D,cancelFirst:V,focus:X}=O,c=h===void 0?"Yes":h,n=D===void 0?"No":D,E=V===void 0?!1:V,y=X===void 0?"confirm":X;if(R()){let t;if(a[0]!==n||a[1]!==c||a[2]!==o||a[3]!==e)t=r(p,{confirmLabel:c,cancelLabel:n,onConfirm:e,onCancel:o}),a[0]=n,a[1]=c,a[2]=o,a[3]=e,a[4]=t;else t=a[4];return t}let t;if(a[5]!==c)t={label:c,value:"confirm"},a[5]=c,a[6]=t;else t=a[6];let l=t,Y;if(a[7]!==n)Y={label:n,value:"cancel"},a[7]=n,a[8]=Y;else Y=a[8];let i=Y,s;if(a[9]!==i||a[10]!==E||a[11]!==l)s=E?[i,l]:[l,i],a[9]=i,a[10]=E,a[11]=l,a[12]=s;else s=a[12];let m;if(a[13]!==o||a[14]!==e)m=(Q)=>Q==="confirm"?e():o(),a[13]=o,a[14]=e,a[15]=m;else m=a[15];let k;if(a[16]!==y||a[17]!==o||a[18]!==s||a[19]!==m)k=r(u,{options:s,defaultFocusValue:y,onChange:m,onCancel:o}),a[16]=y,a[17]=o,a[18]=s,a[19]=m,a[20]=k;else k=a[20];return k}var G=q(()=>{w();x();z();A();F()});
export{B as ry,G as sy};
