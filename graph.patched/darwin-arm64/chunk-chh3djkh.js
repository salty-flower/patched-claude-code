// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{y}from"./chunk-pqa42v56.js";import{_e}from"./chunk-6h6tzwt8.js";import{Te}from"./chunk-vtwn1md5.js";import{n}from"./chunk-86a8apqx.js";import{xn}from"./chunk-8g91me6z.js";import{me}from"./chunk-5kf610v5.js";import{e,r}from"./chunk-6ccz96s4.js";import{f}from"./chunk-agfzafth.js";function uIt(T){let t=y(17),{customApiKeyTruncated:a,onDone:c}=T,{storageV5:d}=_e(),b;if(t[0]!==a||t[1]!==c||t[2]!==d)b=function o(E){bb2:switch(E){case"yes":{Te((R)=>({...R,customApiKeyResponses:{...R.customApiKeyResponses,approved:[...R.customApiKeyResponses?.approved??[],a]}}),d),c(!0);break bb2}case"no":{Te((g)=>({...g,customApiKeyResponses:{...g.customApiKeyResponses,rejected:[...g.customApiKeyResponses?.rejected??[],a]}}),d),c(!1)}}},t[0]=a,t[1]=c,t[2]=d,t[3]=b;else b=t[3];let o=b,m;if(t[4]!==o)m=()=>o("no"),t[4]=o,t[5]=m;else m=t[5];let P;if(t[6]===f)P=e(n,{bold:!0,children:"ANTHROPIC_API_KEY"}),t[6]=P;else P=t[6];let l;if(t[7]!==a)l=r(n,{children:[P,r(n,{children:[": sk-ant-...",a]})]}),t[7]=a,t[8]=l;else l=t[8];let I;if(t[9]===f)I=e(n,{children:"Do you want to use this API key?"}),t[9]=I;else I=t[9];let K;if(t[10]===f)K=r(n,{children:["No (",e(n,{bold:!0,children:"recommended"}),")"]}),t[10]=K;else K=t[10];let u;if(t[11]!==o)u=e(xn,{hideIndexes:!0,focus:"cancel",cancelLabel:K,onConfirm:()=>o("yes"),onCancel:()=>o("no")}),t[11]=o,t[12]=u;else u=t[12];let k;if(t[13]!==m||t[14]!==l||t[15]!==u)k=r(me,{title:"Detected a custom API key in your environment",color:"warning",onCancel:m,children:[l,I,u]}),t[13]=m,t[14]=l,t[15]=u,t[16]=k;else k=t[16];return k}
export{uIt};
