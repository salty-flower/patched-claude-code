// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{w}from"./chunk-eg40vngy.js";import{dre,N2e}from"./chunk-17fr76vj.js";import{n}from"./chunk-wfsayads.js";import{Wa}from"./chunk-43sjps7f.js";import{V}from"./chunk-ksve09vh.js";import{eV}from"./chunk-1ns7kdnm.js";import{J,e,r}from"./chunk-8d2nhg02.js";import{Kt,ke,B}from"./chunk-a2fszd78.js";import{S}from"./chunk-ye9f1kvm.js";B();B();var c=Kt(!1);function Skt(m){let i=w(2),{children:o}=m,a;if(i[0]!==o)a=e(c.Provider,{value:!0,children:o}),i[0]=o,i[1]=a;else a=i[1];return a}function ep(){let a=w(3),m=ke(c),o=ke(eV),i=Wa("app:toggleTranscript","Global","ctrl+o");if(m||o){return null}let t;if(a[0]===S)t={keyCase:"lower"},a[0]=t;else t=a[0];let d;if(a[1]!==i)d=e(n,{dimColor:!0,children:e(V,{chord:i,action:"expand",parens:!0,format:t})}),a[1]=i,a[2]=d;else d=a[2];return d}function A_(m){let l=w(11),{count:o,unit:i,expandable:a,hiddenChars:t}=m,d=i===void 0?"line":i,h=a===void 0?!1:a;if(o<=0){return null}let p;if(l[0]!==o||l[1]!==d)p=dre(o,d),l[0]=o,l[1]=d,l[2]=p;else p=l[2];let s;if(l[3]!==t)s=t!==void 0&&t>=1000&&` (~${N2e(t)} KB)`,l[3]=t,l[4]=s;else s=l[4];let u;if(l[5]!==h)u=h&&r(J,{children:[" ",e(ep,{})]}),l[5]=h,l[6]=u;else u=l[6];let b;if(l[7]!==p||l[8]!==s||l[9]!==u)b=r(n,{dimColor:!0,children:[p,s,u]}),l[7]=p,l[8]=s,l[9]=u,l[10]=b;else b=l[10];return b}
export{Skt,ep,A_};
