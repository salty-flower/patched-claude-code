// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ae,$L}from"./chunk-1901fdh6.js";import{Oe}from"./chunk-zs7j342k.js";import{w}from"./chunk-d6ktxc5j.js";import{n}from"./chunk-sm4gyzj8.js";import{ar}from"./chunk-dyd90aeg.js";import{Se}from"./chunk-me7v0j9e.js";import{e,r}from"./chunk-esdbx0br.js";import{b}from"./chunk-71kjn9x8.js";function w7n(x){let o=w(17),{customApiKeyTruncated:a,onDone:c}=x,{storageV5:s}=Oe(),g;if(o[0]!==a||o[1]!==c||o[2]!==s)g=function t(j){Q:switch(j){case"yes":{Ae((v)=>{let{approved:_,rejected:E}=$L(v);return{...v,customApiKeyResponses:{approved:[..._,a],rejected:E}}},s),c(!0);break Q}case"no":{Ae((A)=>{let{approved:V,rejected:H}=$L(A);return{...A,customApiKeyResponses:{approved:V,rejected:[...H,a]}}},s),c(!1)}}},o[0]=a,o[1]=c,o[2]=s,o[3]=g;else g=o[3];let t=g,d;if(o[4]!==t)d=()=>t("no"),o[4]=t,o[5]=d;else d=o[5];let C;if(o[6]===b)C=e(n,{bold:!0,children:"ANTHROPIC_API_KEY"}),o[6]=C;else C=o[6];let i;if(o[7]!==a)i=r(n,{children:[C,r(n,{children:[": sk-ant-...",a]})]}),o[7]=a,o[8]=i;else i=o[8];let D;if(o[9]===b)D=e(n,{children:"Do you want to use this API key?"}),o[9]=D;else D=o[9];let P;if(o[10]===b)P=r(n,{children:["No (",e(n,{bold:!0,children:"recommended"}),")"]}),o[10]=P;else P=o[10];let u;if(o[11]!==t)u=e(ar,{hideIndexes:!0,focus:"cancel",cancelLabel:P,onConfirm:()=>t("yes"),onCancel:()=>t("no")}),o[11]=t,o[12]=u;else u=o[12];let T;if(o[13]!==d||o[14]!==i||o[15]!==u)T=r(Se,{title:"Detected a custom API key in your environment",color:"warning",onCancel:d,exitOnCtrlCD:!0,children:[i,D,u]}),o[13]=d,o[14]=i,o[15]=u,o[16]=T;else T=o[16];return T}
export{w7n};
