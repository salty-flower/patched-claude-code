// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{_}from"./chunk-c8ey99v5.js";import{tn}from"./chunk-hrm5smjv.js";import{pIt,Es,Ce}from"./chunk-dnj931r0.js";import{e}from"./chunk-smtaex5n.js";import{d,N}from"./chunk-jegfnmzv.js";N();function wn(T){let t=_(25),{onConfirm:n,onCancel:o,confirmLabel:D,cancelLabel:X,cancelFirst:Y,focus:k,hideIndexes:q,refuseInput:w,openedAt:v,windowMs:C}=T,r=D===void 0?"Yes":D,s=X===void 0?"No":X,A=Y===void 0?!1:Y,U=k===void 0?"confirm":k,E=q===void 0?!1:q,[I]=d(U);if(tn()){let c;if(t[0]!==s||t[1]!==r||t[2]!==o||t[3]!==n||t[4]!==v||t[5]!==w||t[6]!==C)c=e(pIt,{confirmLabel:r,cancelLabel:s,onConfirm:n,onCancel:o,refuseInput:w,openedAt:v,windowMs:C}),t[0]=s,t[1]=r,t[2]=o,t[3]=n,t[4]=v,t[5]=w,t[6]=C,t[7]=c;else c=t[7];return c}let c;if(t[8]!==r)c={label:r,value:"confirm"},t[8]=r,t[9]=c;else c=t[9];let i=c,z;if(t[10]!==s)z={label:s,value:"cancel"},t[10]=s,t[11]=z;else z=t[11];let l=z,f;if(t[12]!==l||t[13]!==A||t[14]!==i)f=A?[l,i]:[i,l],t[12]=l,t[13]=A,t[14]=i,t[15]=f;else f=t[15];let m;if(t[16]!==o||t[17]!==n)m=(W)=>W==="confirm"?n():o(),t[16]=o,t[17]=n,t[18]=m;else m=t[18];let B;if(t[19]!==E||t[20]!==o||t[21]!==I||t[22]!==f||t[23]!==m)B=e(Ce,{options:f,selectedValue:Es,hideIndexes:E,defaultFocusValue:I,onChange:m,onCancel:o}),t[19]=E,t[20]=o,t[21]=I,t[22]=f,t[23]=m,t[24]=B;else B=t[24];return B}
export{wn};
