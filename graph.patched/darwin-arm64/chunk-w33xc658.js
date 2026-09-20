// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{b}from"./chunk-mvpw0rjp.js";import{ve}from"./chunk-9ktb22ws.js";import{Ae}from"./chunk-g4c6ggz4.js";import{n}from"./chunk-cskdt2sa.js";import{Pn}from"./chunk-f70zabzd.js";import{fe}from"./chunk-znjga45t.js";import{e,r}from"./chunk-437ab22y.js";import{y}from"./chunk-y8wd7we8.js";function ZGt(T){let t=b(17),{customApiKeyTruncated:a,onDone:c}=T,{storageV5:d}=ve(),v;if(t[0]!==a||t[1]!==c||t[2]!==d)v=function o(E){bb2:switch(E){case"yes":{Ae((A)=>({...A,customApiKeyResponses:{...A.customApiKeyResponses,approved:[...A.customApiKeyResponses?.approved??[],a]}}),d),c(!0);break bb2}case"no":{Ae((R)=>({...R,customApiKeyResponses:{...R.customApiKeyResponses,rejected:[...R.customApiKeyResponses?.rejected??[],a]}}),d),c(!1)}}},t[0]=a,t[1]=c,t[2]=d,t[3]=v;else v=t[3];let o=v,m;if(t[4]!==o)m=()=>o("no"),t[4]=o,t[5]=m;else m=t[5];let P;if(t[6]===y)P=e(n,{bold:!0,children:"ANTHROPIC_API_KEY"}),t[6]=P;else P=t[6];let f;if(t[7]!==a)f=r(n,{children:[P,r(n,{children:[": sk-ant-...",a]})]}),t[7]=a,t[8]=f;else f=t[8];let I;if(t[9]===y)I=e(n,{children:"Do you want to use this API key?"}),t[9]=I;else I=t[9];let K;if(t[10]===y)K=r(n,{children:["No (",e(n,{bold:!0,children:"recommended"}),")"]}),t[10]=K;else K=t[10];let l;if(t[11]!==o)l=e(Pn,{hideIndexes:!0,focus:"cancel",cancelLabel:K,onConfirm:()=>o("yes"),onCancel:()=>o("no")}),t[11]=o,t[12]=l;else l=t[12];let k;if(t[13]!==m||t[14]!==f||t[15]!==l)k=r(fe,{title:"Detected a custom API key in your environment",color:"warning",onCancel:m,children:[f,I,l]}),t[13]=m,t[14]=f,t[15]=l,t[16]=k;else k=t[16];return k}
export{ZGt};
