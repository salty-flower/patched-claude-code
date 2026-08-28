// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-yhctzac5.js";import{pn}from"./chunk-167xpx5m.js";import{Ckt,li,ke}from"./chunk-7ax1ky5d.js";import{e}from"./chunk-azctepqx.js";function hn(J){let s=g(25),{onConfirm:n,onCancel:o,confirmLabel:P,cancelLabel:V,cancelFirst:_,focus:D,hideIndexes:X,refuseInput:b,windowAnchorMs:R,windowMs:N}=J,r=P===void 0?"Yes":P,c=V===void 0?"No":V,v=_===void 0?!1:_,C=D===void 0?"confirm":D,A=X===void 0?!1:X;if(pn()){let a;if(s[0]!==c||s[1]!==r||s[2]!==o||s[3]!==n||s[4]!==b||s[5]!==R||s[6]!==N)a=e(Ckt,{confirmLabel:r,cancelLabel:c,onConfirm:n,onCancel:o,refuseInput:b,windowAnchorMs:R,windowMs:N}),s[0]=c,s[1]=r,s[2]=o,s[3]=n,s[4]=b,s[5]=R,s[6]=N,s[7]=a;else a=s[7];return a}let a;if(s[8]!==r)a={label:r,value:"confirm"},s[8]=r,s[9]=a;else a=s[9];let i=a,Y;if(s[10]!==c)Y={label:c,value:"cancel"},s[10]=c,s[11]=Y;else Y=s[11];let l=Y,f;if(s[12]!==l||s[13]!==v||s[14]!==i)f=v?[l,i]:[i,l],s[12]=l,s[13]=v,s[14]=i,s[15]=f;else f=s[15];let d;if(s[16]!==o||s[17]!==n)d=(K)=>K==="confirm"?n():o(),s[16]=o,s[17]=n,s[18]=d;else d=s[18];let k;if(s[19]!==C||s[20]!==A||s[21]!==o||s[22]!==f||s[23]!==d)k=e(ke,{options:f,selectedValue:li,hideIndexes:A,defaultFocusValue:C,onChange:d,onCancel:o}),s[19]=C,s[20]=A,s[21]=o,s[22]=f,s[23]=d,s[24]=k;else k=s[24];return k}
export{hn};
