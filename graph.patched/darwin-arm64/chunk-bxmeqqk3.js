// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{y}from"./chunk-pqa42v56.js";import{o,n}from"./chunk-86a8apqx.js";import{Ro}from"./chunk-nmnwj658.js";import{e,r}from"./chunk-6ccz96s4.js";import{f}from"./chunk-agfzafth.js";function sr(B){let i=y(10),{message:m,bold:b,dimColor:C,subtitle:t}=B,s=b===void 0?!1:b,p=C===void 0?!1:C,R;if(i[0]===f)R=e(Ro,{}),i[0]=R;else R=i[0];let a;if(i[1]!==s||i[2]!==p||i[3]!==m)a=r(o,{flexDirection:"row",children:[R,r(n,{bold:s,dimColor:p,children:[" ",m]})]}),i[1]=s,i[2]=p,i[3]=m,i[4]=a;else a=i[4];let l;if(i[5]!==t)l=t&&e(n,{dimColor:!0,children:t}),i[5]=t,i[6]=l;else l=i[6];let D;if(i[7]!==a||i[8]!==l)D=r(o,{flexDirection:"column",children:[a,l]}),i[7]=a,i[8]=l,i[9]=D;else D=i[9];return D}
export{sr};
