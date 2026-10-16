// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{c9n,u9n}from"./chunk-d9vq4daa.js";import{w}from"./chunk-d6ktxc5j.js";import{s,n}from"./chunk-sm4gyzj8.js";import{hwt}from"./chunk-rrm8meat.js";import{ftt}from"./chunk-dhc3n1d7.js";import{t2}from"./chunk-zhr8d3wg.js";import{dC}from"./chunk-tys2qh8e.js";import{e,r}from"./chunk-esdbx0br.js";function Eye(i){let a=w(25),{tone:o,text:l,detail:m,subLines:k,linkify:M}=i,t=M?t2:n,R=i.state==="live"&&!i.reducedMotion?u9n[i.frame%u9n.length]:c9n,p=o==="gold"?"warning":o==="red"?"error":void 0,d=o==="dim";const h=o==="red"?"error:":o==="gold"?"warning:":void 0;let f;if(a[0]!==p||a[1]!==d||a[2]!==R||a[3]!==h)f=r(n,{"aria-hidden":d,"aria-label":h,italic:!0,color:p,dimColor:d,children:[R," "]}),a[0]=p,a[1]=d,a[2]=R,a[3]=h,a[4]=f;else f=a[4];let y;if(a[5]!==t||a[6]!==l)y=e(t,{children:l}),a[5]=t,a[6]=l,a[7]=y;else y=a[7];let b;if(a[8]!==t||a[9]!==m)b=m!==void 0&&r(n,{dimColor:!0,children:[" \xB7 ",e(t,{children:m})]}),a[8]=t,a[9]=m,a[10]=b;else b=a[10];let g;if(a[11]!==p||a[12]!==d||a[13]!==y||a[14]!==b)g=r(n,{italic:!0,color:p,dimColor:d,children:[y,b]}),a[11]=p,a[12]=d,a[13]=y,a[14]=b,a[15]=g;else g=a[15];let C;if(a[16]!==t||a[17]!==k)C=k?.map((O,P)=>e(n,{dimColor:!0,children:e(t,{children:O})},P)),a[16]=t,a[17]=k,a[18]=C;else C=a[18];let x;if(a[19]!==g||a[20]!==C)x=r(s,{flexDirection:"column",flexGrow:1,children:[g,C]}),a[19]=g,a[20]=C,a[21]=x;else x=a[21];let q;if(a[22]!==f||a[23]!==x)q=r(s,{flexDirection:"row",children:[f,x]}),a[22]=f,a[23]=x,a[24]=q;else q=a[24];return q}function Hw(i){let o=hwt(),l=ftt()?.isQueued===!0;return!i&&!o&&!l&&dC()}function Hzr(i){let o=Hw(i),l=ftt();return l?.isQueued===!0?l.noticeSystemLines:o}
export{Eye,Hw,Hzr};
