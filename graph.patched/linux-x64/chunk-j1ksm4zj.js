// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{y}from"./chunk-wdpeygc3.js";import{_e}from"./chunk-m99259k7.js";import{He}from"./chunk-3e93vkg3.js";import{n}from"./chunk-bkvzfc5q.js";import{Hn}from"./chunk-z17apta7.js";import{de}from"./chunk-hbmwr6aj.js";import{e,r}from"./chunk-smtaex5n.js";import{p}from"./chunk-55pqc2de.js";function gIt(T){let t=y(17),{customApiKeyTruncated:a,onDone:d}=T,{storageV5:m}=_e(),b;if(t[0]!==a||t[1]!==d||t[2]!==m)b=function o(E){bb2:switch(E){case"yes":{He((R)=>({...R,customApiKeyResponses:{...R.customApiKeyResponses,approved:[...R.customApiKeyResponses?.approved??[],a]}}),m),d(!0);break bb2}case"no":{He((g)=>({...g,customApiKeyResponses:{...g.customApiKeyResponses,rejected:[...g.customApiKeyResponses?.rejected??[],a]}}),m),d(!1)}}},t[0]=a,t[1]=d,t[2]=m,t[3]=b;else b=t[3];let o=b,f;if(t[4]!==o)f=()=>o("no"),t[4]=o,t[5]=f;else f=t[5];let P;if(t[6]===p)P=e(n,{bold:!0,children:"ANTHROPIC_API_KEY"}),t[6]=P;else P=t[6];let l;if(t[7]!==a)l=r(n,{children:[P,r(n,{children:[": sk-ant-...",a]})]}),t[7]=a,t[8]=l;else l=t[8];let I;if(t[9]===p)I=e(n,{children:"Do you want to use this API key?"}),t[9]=I;else I=t[9];let K;if(t[10]===p)K=r(n,{children:["No (",e(n,{bold:!0,children:"recommended"}),")"]}),t[10]=K;else K=t[10];let u;if(t[11]!==o)u=e(Hn,{hideIndexes:!0,focus:"cancel",cancelLabel:K,onConfirm:()=>o("yes"),onCancel:()=>o("no")}),t[11]=o,t[12]=u;else u=t[12];let k;if(t[13]!==f||t[14]!==l||t[15]!==u)k=r(de,{title:"Detected a custom API key in your environment",color:"warning",onCancel:f,children:[l,I,u]}),t[13]=f,t[14]=l,t[15]=u,t[16]=k;else k=t[16];return k}
export{gIt};
