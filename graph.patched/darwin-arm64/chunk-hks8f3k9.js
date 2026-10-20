// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j1,Te,gN}from"./chunk-bvn0epzr.js";import{Ie}from"./chunk-c0bn6tna.js";import{w}from"./chunk-mjaw4h5n.js";import{s,n}from"./chunk-t3eqa5fc.js";import{sr}from"./chunk-vnwkh4j1.js";import{ULe,LAe,Se}from"./chunk-4kev203q.js";import{e,r}from"./chunk-q4w894bt.js";import{b}from"./chunk-8xa87pyw.js";function Ytr(L){let o=w(20),{customApiKeyTruncated:a,onDone:c}=L,{storageV5:d}=Ie(),y=ULe()?2:0,C;if(o[0]!==a||o[1]!==c||o[2]!==d)C=function t(V){G:switch(V){case"yes":{Te((D)=>{let{approved:H,rejected:O}=gN(D);return{...D,customApiKeyResponses:{approved:[...H,a],rejected:O}}},d),j1(),c(!0);break G}case"no":{Te((I)=>{let{approved:Y,rejected:q}=gN(I);return{...I,customApiKeyResponses:{approved:Y,rejected:[...q,a]}}},d),c(!1)}}},o[0]=a,o[1]=c,o[2]=d,o[3]=C;else C=o[3];let t=C,i;if(o[4]!==t)i=()=>t("no"),o[4]=t,o[5]=i;else i=o[5];let P;if(o[6]===b)P=e(LAe,{bold:!0,children:"ANTHROPIC_API_KEY"}),o[6]=P;else P=o[6];let u;if(o[7]!==a)u=r(n,{children:[P,r(n,{children:[": sk-ant-...",a]})]}),o[7]=a,o[8]=u;else u=o[8];let p;if(o[9]!==y||o[10]!==u)p=e(s,{paddingLeft:y,children:u}),o[9]=y,o[10]=u,o[11]=p;else p=o[11];let T;if(o[12]===b)T=e(n,{children:"Do you want to use this API key?"}),o[12]=T;else T=o[12];let k;if(o[13]===b)k=r(n,{children:["No (",e(LAe,{bold:!0,children:"recommended"}),")"]}),o[13]=k;else k=o[13];let m;if(o[14]!==t)m=e(sr,{hideIndexes:!0,focus:"cancel",cancelLabel:k,onConfirm:()=>t("yes"),onCancel:()=>t("no")}),o[14]=t,o[15]=m;else m=o[15];let K;if(o[16]!==i||o[17]!==p||o[18]!==m)K=r(Se,{title:"Detected a custom API key in your environment",color:"warning",onCancel:i,exitOnCtrlCD:!0,children:[p,T,m]}),o[16]=i,o[17]=p,o[18]=m,o[19]=K;else K=o[19];return K}
export{Ytr};
