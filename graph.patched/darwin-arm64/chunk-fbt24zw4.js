// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{_}from"./chunk-c8ey99v5.js";import{ye}from"./chunk-72nkq50v.js";import{we}from"./chunk-n495pc0t.js";import{n}from"./chunk-hrm5smjv.js";import{wn}from"./chunk-kmh765am.js";import{de}from"./chunk-ag5qjv8a.js";import{e,r}from"./chunk-smtaex5n.js";import{f}from"./chunk-te942vjn.js";function Axt(T){let t=_(17),{customApiKeyTruncated:a,onDone:c}=T,{storageV5:d}=ye(),v;if(t[0]!==a||t[1]!==c||t[2]!==d)v=function o(E){bb2:switch(E){case"yes":{we((A)=>({...A,customApiKeyResponses:{...A.customApiKeyResponses,approved:[...A.customApiKeyResponses?.approved??[],a]}}),d),c(!0);break bb2}case"no":{we((R)=>({...R,customApiKeyResponses:{...R.customApiKeyResponses,rejected:[...R.customApiKeyResponses?.rejected??[],a]}}),d),c(!1)}}},t[0]=a,t[1]=c,t[2]=d,t[3]=v;else v=t[3];let o=v,m;if(t[4]!==o)m=()=>o("no"),t[4]=o,t[5]=m;else m=t[5];let b;if(t[6]===f)b=e(n,{bold:!0,children:"ANTHROPIC_API_KEY"}),t[6]=b;else b=t[6];let l;if(t[7]!==a)l=r(n,{children:[b,r(n,{children:[": sk-ant-...",a]})]}),t[7]=a,t[8]=l;else l=t[8];let P;if(t[9]===f)P=e(n,{children:"Do you want to use this API key?"}),t[9]=P;else P=t[9];let I;if(t[10]===f)I=r(n,{children:["No (",e(n,{bold:!0,children:"recommended"}),")"]}),t[10]=I;else I=t[10];let y;if(t[11]!==o)y=e(wn,{hideIndexes:!0,focus:"cancel",cancelLabel:I,onConfirm:()=>o("yes"),onCancel:()=>o("no")}),t[11]=o,t[12]=y;else y=t[12];let K;if(t[13]!==m||t[14]!==l||t[15]!==y)K=r(de,{title:"Detected a custom API key in your environment",color:"warning",onCancel:m,children:[l,P,y]}),t[13]=m,t[14]=l,t[15]=y,t[16]=K;else K=t[16];return K}
export{Axt};
