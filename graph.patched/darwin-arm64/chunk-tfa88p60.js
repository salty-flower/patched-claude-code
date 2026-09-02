// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{_}from"./chunk-rykc5fv4.js";import{ge}from"./chunk-7kx9cssk.js";import{Ae}from"./chunk-bsdtxcdc.js";import{t}from"./chunk-hm4dvvtr.js";import{me}from"./chunk-hxc8nms1.js";import{wn}from"./chunk-s1hxrp0v.js";import{e,r}from"./chunk-wk3xnwvn.js";import{d}from"./chunk-rqyyny1n.js";function Kvt(T){let n=_(17),{customApiKeyTruncated:a,onDone:c}=T,{storageV5:m}=ge(),v;if(n[0]!==a||n[1]!==c||n[2]!==m)v=function o(E){bb2:switch(E){case"yes":{Ae((A)=>({...A,customApiKeyResponses:{...A.customApiKeyResponses,approved:[...A.customApiKeyResponses?.approved??[],a]}}),m),c(!0);break bb2}case"no":{Ae((R)=>({...R,customApiKeyResponses:{...R.customApiKeyResponses,rejected:[...R.customApiKeyResponses?.rejected??[],a]}}),m),c(!1)}}},n[0]=a,n[1]=c,n[2]=m,n[3]=v;else v=n[3];let o=v,f;if(n[4]!==o)f=()=>o("no"),n[4]=o,n[5]=f;else f=n[5];let b;if(n[6]===d)b=e(t,{bold:!0,children:"ANTHROPIC_API_KEY"}),n[6]=b;else b=n[6];let l;if(n[7]!==a)l=r(t,{children:[b,r(t,{children:[": sk-ant-...",a]})]}),n[7]=a,n[8]=l;else l=n[8];let P;if(n[9]===d)P=e(t,{children:"Do you want to use this API key?"}),n[9]=P;else P=n[9];let I;if(n[10]===d)I=r(t,{children:["No (",e(t,{bold:!0,children:"recommended"}),")"]}),n[10]=I;else I=n[10];let y;if(n[11]!==o)y=e(wn,{hideIndexes:!0,focus:"cancel",cancelLabel:I,onConfirm:()=>o("yes"),onCancel:()=>o("no")}),n[11]=o,n[12]=y;else y=n[12];let K;if(n[13]!==f||n[14]!==l||n[15]!==y)K=r(me,{title:"Detected a custom API key in your environment",color:"warning",onCancel:f,children:[l,P,y]}),n[13]=f,n[14]=l,n[15]=y,n[16]=K;else K=n[16];return K}
export{Kvt};
