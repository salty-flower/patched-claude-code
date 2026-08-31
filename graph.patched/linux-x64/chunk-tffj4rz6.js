// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y}from"./chunk-a5ahs27a.js";import{ge}from"./chunk-hpqw2rdt.js";import{Ae}from"./chunk-1e5y3pjf.js";import{t}from"./chunk-snr8xejh.js";import{me}from"./chunk-me5zajm3.js";import{Hn}from"./chunk-epp7jyvm.js";import{e,r}from"./chunk-ys8dsnqt.js";import{d}from"./chunk-5nnrmmhw.js";function Kkt(T){let n=y(17),{customApiKeyTruncated:a,onDone:c}=T,{storageV5:m}=ge(),b;if(n[0]!==a||n[1]!==c||n[2]!==m)b=function o(E){bb2:switch(E){case"yes":{Ae((R)=>({...R,customApiKeyResponses:{...R.customApiKeyResponses,approved:[...R.customApiKeyResponses?.approved??[],a]}}),m),c(!0);break bb2}case"no":{Ae((g)=>({...g,customApiKeyResponses:{...g.customApiKeyResponses,rejected:[...g.customApiKeyResponses?.rejected??[],a]}}),m),c(!1)}}},n[0]=a,n[1]=c,n[2]=m,n[3]=b;else b=n[3];let o=b,f;if(n[4]!==o)f=()=>o("no"),n[4]=o,n[5]=f;else f=n[5];let P;if(n[6]===d)P=e(t,{bold:!0,children:"ANTHROPIC_API_KEY"}),n[6]=P;else P=n[6];let l;if(n[7]!==a)l=r(t,{children:[P,r(t,{children:[": sk-ant-...",a]})]}),n[7]=a,n[8]=l;else l=n[8];let I;if(n[9]===d)I=e(t,{children:"Do you want to use this API key?"}),n[9]=I;else I=n[9];let K;if(n[10]===d)K=r(t,{children:["No (",e(t,{bold:!0,children:"recommended"}),")"]}),n[10]=K;else K=n[10];let u;if(n[11]!==o)u=e(Hn,{hideIndexes:!0,focus:"cancel",cancelLabel:K,onConfirm:()=>o("yes"),onCancel:()=>o("no")}),n[11]=o,n[12]=u;else u=n[12];let k;if(n[13]!==f||n[14]!==l||n[15]!==u)k=r(me,{title:"Detected a custom API key in your environment",color:"warning",onCancel:f,children:[l,I,u]}),n[13]=f,n[14]=l,n[15]=u,n[16]=k;else k=n[16];return k}
export{Kkt};
