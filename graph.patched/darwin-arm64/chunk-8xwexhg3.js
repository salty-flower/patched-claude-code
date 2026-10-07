// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ce}from"./chunk-2nwpk7v6.js";import{S,X}from"./chunk-f8eqwxpt.js";import{avr}from"./chunk-kyfagehx.js";import{rr}from"./chunk-567grqbk.js";import{w}from"./chunk-k8a9av7b.js";import{n,_o}from"./chunk-0x4ch5gg.js";import{Gt,ke,J,L}from"./chunk-bkksmm2y.js";import{Ne}from"./chunk-w0qaezd6.js";import{t2}from"./chunk-hng0jbg3.js";import{e}from"./chunk-mq8eg5v4.js";import{Ab}from"./chunk-trqdweh3.js";import{y6r}from"./chunk-59fks8w9.js";L();L();L();var c=Gt(!1);function i$n(r){let s=w(2),{children:t}=r,o;if(s[0]!==t)o=e(c.Provider,{value:!0,children:t}),s[0]=t,s[1]=o;else o=s[1];return o}function u(){return ke(c)}function P(r){try{let t=X(r),s=S(t),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return S(t,null,2)}catch{return r}}var A=1e4;function b(r){if(r.length>A)return r;return r.split(`
`).map(P).join(`
`)}var C=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,I=1e5;function a$n(r,t){if(r.length>I)return r;let s=(o)=>o.replace(C,(m)=>Ab(m,void 0,{themeName:t}));if(!r.includes(avr))return s(r);return r.split(`
`).map((o)=>o.includes(avr)?o:s(o)).join(`
`)}function ET(r){let l=w(14),{content:t,verbose:s,isError:o,isWarning:m}=r,{columns:d}=Ce(),[g]=rr(),G=u(),h=ke(t2),U=s||G,v;if(l[0]!==t||l[1]!==g)v=a$n(b(t),g),l[0]=t,l[1]=g,l[2]=v;else v=l[2];let a=v,N;pr:{if(U){let i;if(l[3]!==a)i=f(a),l[3]=a,l[4]=i;else i=l[4];N=i;break pr}let i;if(l[5]!==d||l[6]!==a||l[7]!==h)i=f(y6r(a,d,h)),l[5]=d,l[6]=a,l[7]=h,l[8]=i;else i=l[8];N=i}let R=N,x=o?"error":m?"warning":void 0,i;if(l[9]!==R)i=e(_o,{children:R}),l[9]=R,l[10]=i;else i=l[10];let E;if(l[11]!==x||l[12]!==i)E=e(Ne,{children:e(n,{color:x,children:i})}),l[11]=x,l[12]=i,l[13]=E;else E=l[13];return E}function f(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{i$n,a$n,ET};
