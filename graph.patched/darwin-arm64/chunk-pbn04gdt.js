// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{b}from"./chunk-mvpw0rjp.js";import{s,n}from"./chunk-cskdt2sa.js";import{Fo}from"./chunk-q3z95gsn.js";import{e,r}from"./chunk-437ab22y.js";import{y}from"./chunk-y8wd7we8.js";function ar(B){let t=b(10),{message:d,bold:x,dimColor:C,subtitle:o}=B,f=x===void 0?!1:x,m=C===void 0?!1:C,R;if(t[0]===y)R=e(Fo,{}),t[0]=R;else R=t[0];let i;if(t[1]!==f||t[2]!==m||t[3]!==d)i=r(s,{flexDirection:"row",children:[R,r(n,{bold:f,dimColor:m,children:[" ",d]})]}),t[1]=f,t[2]=m,t[3]=d,t[4]=i;else i=t[4];let a;if(t[5]!==o)a=o&&e(n,{dimColor:!0,children:o}),t[5]=o,t[6]=a;else a=t[6];let D;if(t[7]!==i||t[8]!==a)D=r(s,{flexDirection:"column",children:[i,a]}),t[7]=i,t[8]=a,t[9]=D;else D=t[9];return D}
export{ar};
