// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{S}from"./chunk-6qjhsn35.js";import{Ee}from"./chunk-ck07ybz1.js";import{ke}from"./chunk-30p0nwys.js";import{n}from"./chunk-g8n1e3fe.js";import{Pn}from"./chunk-cp452n8c.js";import{fe}from"./chunk-xmete2d2.js";import{e,r}from"./chunk-437ab22y.js";import{y}from"./chunk-bbmh8g33.js";function uqt(x){let t=S(17),{customApiKeyTruncated:a,onDone:c}=x,{storageV5:d}=Ee(),v;if(t[0]!==a||t[1]!==c||t[2]!==d)v=function o(T){bb2:switch(T){case"yes":{ke((A)=>({...A,customApiKeyResponses:{...A.customApiKeyResponses,approved:[...A.customApiKeyResponses?.approved??[],a]}}),d),c(!0);break bb2}case"no":{ke((R)=>({...R,customApiKeyResponses:{...R.customApiKeyResponses,rejected:[...R.customApiKeyResponses?.rejected??[],a]}}),d),c(!1)}}},t[0]=a,t[1]=c,t[2]=d,t[3]=v;else v=t[3];let o=v,m;if(t[4]!==o)m=()=>o("no"),t[4]=o,t[5]=m;else m=t[5];let b;if(t[6]===y)b=e(n,{bold:!0,children:"ANTHROPIC_API_KEY"}),t[6]=b;else b=t[6];let f;if(t[7]!==a)f=r(n,{children:[b,r(n,{children:[": sk-ant-...",a]})]}),t[7]=a,t[8]=f;else f=t[8];let P;if(t[9]===y)P=e(n,{children:"Do you want to use this API key?"}),t[9]=P;else P=t[9];let I;if(t[10]===y)I=r(n,{children:["No (",e(n,{bold:!0,children:"recommended"}),")"]}),t[10]=I;else I=t[10];let l;if(t[11]!==o)l=e(Pn,{hideIndexes:!0,focus:"cancel",cancelLabel:I,onConfirm:()=>o("yes"),onCancel:()=>o("no")}),t[11]=o,t[12]=l;else l=t[12];let K;if(t[13]!==m||t[14]!==f||t[15]!==l)K=r(fe,{title:"Detected a custom API key in your environment",color:"warning",onCancel:m,children:[f,P,l]}),t[13]=m,t[14]=f,t[15]=l,t[16]=K;else K=t[16];return K}
export{uqt};
