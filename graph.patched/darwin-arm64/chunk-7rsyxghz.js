// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-8mr77ghb.js";import{fe}from"./chunk-249dymdd.js";import{be}from"./chunk-ghnc2x4f.js";import{t}from"./chunk-htcaw08y.js";import{pe}from"./chunk-vtqmagqz.js";import{hn}from"./chunk-1jfhmmhx.js";import{e,r}from"./chunk-80eepr01.js";import{p}from"./chunk-t2kfemrk.js";function Lwt(T){let n=g(17),{customApiKeyTruncated:a,onDone:d}=T,{storageV5:m}=fe(),b;if(n[0]!==a||n[1]!==d||n[2]!==m)b=function o(E){bb2:switch(E){case"yes":{be((A)=>({...A,customApiKeyResponses:{...A.customApiKeyResponses,approved:[...A.customApiKeyResponses?.approved??[],a]}}),m),d(!0);break bb2}case"no":{be((R)=>({...R,customApiKeyResponses:{...R.customApiKeyResponses,rejected:[...R.customApiKeyResponses?.rejected??[],a]}}),m),d(!1)}}},n[0]=a,n[1]=d,n[2]=m,n[3]=b;else b=n[3];let o=b,f;if(n[4]!==o)f=()=>o("no"),n[4]=o,n[5]=f;else f=n[5];let P;if(n[6]===p)P=e(t,{bold:!0,children:"ANTHROPIC_API_KEY"}),n[6]=P;else P=n[6];let l;if(n[7]!==a)l=r(t,{children:[P,r(t,{children:[": sk-ant-...",a]})]}),n[7]=a,n[8]=l;else l=n[8];let I;if(n[9]===p)I=e(t,{children:"Do you want to use this API key?"}),n[9]=I;else I=n[9];let K;if(n[10]===p)K=r(t,{children:["No (",e(t,{bold:!0,children:"recommended"}),")"]}),n[10]=K;else K=n[10];let y;if(n[11]!==o)y=e(hn,{hideIndexes:!0,focus:"cancel",cancelLabel:K,onConfirm:()=>o("yes"),onCancel:()=>o("no")}),n[11]=o,n[12]=y;else y=n[12];let k;if(n[13]!==f||n[14]!==l||n[15]!==y)k=r(pe,{title:"Detected a custom API key in your environment",color:"warning",onCancel:f,children:[l,I,y]}),n[13]=f,n[14]=l,n[15]=y,n[16]=k;else k=n[16];return k}
export{Lwt};
