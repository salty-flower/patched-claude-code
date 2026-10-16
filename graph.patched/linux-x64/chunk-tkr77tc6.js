// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ke}from"./chunk-hyx8123b.js";import{_,X}from"./chunk-cwsn6mdf.js";import{CKr}from"./chunk-g1h0q7dv.js";import{hr}from"./chunk-0zd0ne0d.js";import{w}from"./chunk-j2ak5p7d.js";import{n,zo}from"./chunk-hey8xzq2.js";import{ze}from"./chunk-4gtf3007.js";import{pV}from"./chunk-avkwz7rk.js";import{e}from"./chunk-esdbx0br.js";import{yv}from"./chunk-8jvnm6ee.js";import{gpo}from"./chunk-506qttrz.js";import{Gt,Ee,Z,F}from"./chunk-zx300qjj.js";F();F();F();var c=Gt(!1);function rZn(r){let s=w(2),{children:t}=r,o;if(s[0]!==t)o=e(c.Provider,{value:!0,children:t}),s[0]=t,s[1]=o;else o=s[1];return o}function u(){return Ee(c)}function P(r){try{let t=X(r),s=_(t),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return _(t,null,2)}catch{return r}}var A=1e4;function b(r){if(r.length>A)return r;return r.split(`
`).map(P).join(`
`)}var C=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,I=1e5;function oZn(r,t){if(r.length>I)return r;let s=(o)=>o.replace(C,(m)=>yv(m,void 0,{themeName:t}));if(!r.includes(CKr))return s(r);return r.split(`
`).map((o)=>o.includes(CKr)?o:s(o)).join(`
`)}function pP(r){let l=w(14),{content:t,verbose:s,isError:o,isWarning:m}=r,{columns:d}=ke(),[g]=hr(),G=u(),h=Ee(pV),J=s||G,v;if(l[0]!==t||l[1]!==g)v=oZn(b(t),g),l[0]=t,l[1]=g,l[2]=v;else v=l[2];let a=v,N;fr:{if(J){let i;if(l[3]!==a)i=f(a),l[3]=a,l[4]=i;else i=l[4];N=i;break fr}let i;if(l[5]!==d||l[6]!==a||l[7]!==h)i=f(gpo(a,d,h)),l[5]=d,l[6]=a,l[7]=h,l[8]=i;else i=l[8];N=i}let R=N,x=o?"error":m?"warning":void 0,i;if(l[9]!==R)i=e(zo,{children:R}),l[9]=R,l[10]=i;else i=l[10];let E;if(l[11]!==x||l[12]!==i)E=e(ze,{children:e(n,{color:x,children:i})}),l[11]=x,l[12]=i,l[13]=E;else E=l[13];return E}function f(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{rZn,oZn,pP};
