// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{w}from"./chunk-k8a9av7b.js";import{YDe,XDe}from"./chunk-1jrtnqew.js";import{n}from"./chunk-0x4ch5gg.js";import{Gt,ke,L}from"./chunk-bkksmm2y.js";import{_l}from"./chunk-2hyeckhw.js";import{W}from"./chunk-vtb8s4aa.js";import{t2}from"./chunk-hng0jbg3.js";import{Y,e,r}from"./chunk-mq8eg5v4.js";import{b}from"./chunk-rnxw3wwn.js";L();L();var c=Gt(!1);function $at(m){let i=w(2),{children:o}=m,a;if(i[0]!==o)a=e(c.Provider,{value:!0,children:o}),i[0]=o,i[1]=a;else a=i[1];return a}function $p(){let a=w(3),m=ke(c),o=ke(t2),i=_l("app:toggleTranscript","Global","ctrl+o");if(m||o){return null}let t;if(a[0]===b)t={keyCase:"lower"},a[0]=t;else t=a[0];let d;if(a[1]!==i)d=e(n,{dimColor:!0,children:e(W,{chord:i,action:"expand",parens:!0,format:t})}),a[1]=i,a[2]=d;else d=a[2];return d}function Fh(m){let l=w(11),{count:o,unit:i,expandable:a,hiddenChars:t}=m,d=i===void 0?"line":i,h=a===void 0?!1:a;if(o<=0){return null}let p;if(l[0]!==o||l[1]!==d)p=YDe(o,d),l[0]=o,l[1]=d,l[2]=p;else p=l[2];let s;if(l[3]!==t)s=t!==void 0&&t>=1000&&` (~${XDe(t)} KB)`,l[3]=t,l[4]=s;else s=l[4];let u;if(l[5]!==h)u=h&&r(Y,{children:[" ",e($p,{})]}),l[5]=h,l[6]=u;else u=l[6];let C;if(l[7]!==p||l[8]!==s||l[9]!==u)C=r(n,{dimColor:!0,children:[p,s,u]}),l[7]=p,l[8]=s,l[9]=u,l[10]=C;else C=l[10];return C}
export{$at,$p,Fh};
