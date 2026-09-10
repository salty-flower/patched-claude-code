// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{y}from"./chunk-spjasdq6.js";import{o,n}from"./chunk-q8bwyp41.js";import{bo}from"./chunk-wkm7n7ja.js";import{e,r}from"./chunk-qs39f0kj.js";import{p}from"./chunk-3anr60sp.js";function Bn(B){let i=y(10),{message:f,bold:b,dimColor:C,subtitle:t}=B,m=b===void 0?!1:b,s=C===void 0?!1:C,R;if(i[0]===p)R=e(bo,{}),i[0]=R;else R=i[0];let a;if(i[1]!==m||i[2]!==s||i[3]!==f)a=r(o,{flexDirection:"row",children:[R,r(n,{bold:m,dimColor:s,children:[" ",f]})]}),i[1]=m,i[2]=s,i[3]=f,i[4]=a;else a=i[4];let l;if(i[5]!==t)l=t&&e(n,{dimColor:!0,children:t}),i[5]=t,i[6]=l;else l=i[6];let D;if(i[7]!==a||i[8]!==l)D=r(o,{flexDirection:"column",children:[a,l]}),i[7]=a,i[8]=l,i[9]=D;else D=i[9];return D}
export{Bn};
