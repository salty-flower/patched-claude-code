// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ke}from"./chunk-8vhm4q56.js";import{_,X}from"./chunk-b5feae42.js";import{cPr}from"./chunk-5a58rh2c.js";import{cr}from"./chunk-hhh87hga.js";import{w}from"./chunk-p3sxj9wz.js";import{n,ko}from"./chunk-8pkmgy8b.js";import{Vt,Ce,J,N}from"./chunk-f6geyac8.js";import{Ne}from"./chunk-dmctpf3z.js";import{dW}from"./chunk-c0d2fcpk.js";import{e}from"./chunk-efrp9dmx.js";import{Nb}from"./chunk-9sjjbdh3.js";import{q5r}from"./chunk-ar8banzs.js";N();N();N();var c=Vt(!1);function J2n(r){let s=w(2),{children:t}=r,o;if(s[0]!==t)o=e(c.Provider,{value:!0,children:t}),s[0]=t,s[1]=o;else o=s[1];return o}function u(){return Ce(c)}function P(r){try{let t=X(r),s=_(t),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return _(t,null,2)}catch{return r}}var A=1e4;function L(r){if(r.length>A)return r;return r.split(`
`).map(P).join(`
`)}var C=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,I=1e5;function Q2n(r,t){if(r.length>I)return r;let s=(o)=>o.replace(C,(m)=>Nb(m,void 0,{themeName:t}));if(!r.includes(cPr))return s(r);return r.split(`
`).map((o)=>o.includes(cPr)?o:s(o)).join(`
`)}function eR(r){let l=w(14),{content:t,verbose:s,isError:o,isWarning:m}=r,{columns:d}=ke(),[g]=cr(),G=u(),h=Ce(dW),U=s||G,v;if(l[0]!==t||l[1]!==g)v=Q2n(L(t),g),l[0]=t,l[1]=g,l[2]=v;else v=l[2];let a=v,R;pr:{if(U){let i;if(l[3]!==a)i=f(a),l[3]=a,l[4]=i;else i=l[4];R=i;break pr}let i;if(l[5]!==d||l[6]!==a||l[7]!==h)i=f(q5r(a,d,h)),l[5]=d,l[6]=a,l[7]=h,l[8]=i;else i=l[8];R=i}let x=R,b=o?"error":m?"warning":void 0,i;if(l[9]!==x)i=e(ko,{children:x}),l[9]=x,l[10]=i;else i=l[10];let E;if(l[11]!==b||l[12]!==i)E=e(Ne,{children:e(n,{color:b,children:i})}),l[11]=b,l[12]=i,l[13]=E;else E=l[13];return E}function f(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{J2n,Q2n,eR};
