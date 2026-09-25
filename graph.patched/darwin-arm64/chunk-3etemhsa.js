// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ee}from"./chunk-4f2xafwe.js";import{W9n}from"./chunk-vnnj4fsp.js";import{b,Q}from"./chunk-wvb0gwjm.js";import{Yn}from"./chunk-c81s9ma0.js";import{w}from"./chunk-1qj92kzv.js";import{n,Zr}from"./chunk-hkhfvq8c.js";import{Me}from"./chunk-mt1kq2vd.js";import{UF}from"./chunk-snj1ye1w.js";import{u_}from"./chunk-az06s3vq.js";import{e}from"./chunk-srmsc891.js";import{Rpr}from"./chunk-0p06wf6s.js";import{Vt,Ie,J,L}from"./chunk-1cnhgfv0.js";L();L();L();var c=Vt(!1);function Zfn(r){let s=w(2),{children:t}=r,o;if(s[0]!==t)o=e(c.Provider,{value:!0,children:t}),s[0]=t,s[1]=o;else o=s[1];return o}function u(){return Ie(c)}function P(r){try{let t=Q(r),s=b(t),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return b(t,null,2)}catch{return r}}var A=1e4;function _(r){if(r.length>A)return r;return r.split(`
`).map(P).join(`
`)}var C=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,I=1e5;function emn(r,t){if(r.length>I)return r;let s=(o)=>o.replace(C,(m)=>u_(m,void 0,{themeName:t}));if(!r.includes(W9n))return s(r);return r.split(`
`).map((o)=>o.includes(W9n)?o:s(o)).join(`
`)}function kC(r){let l=w(14),{content:t,verbose:s,isError:o,isWarning:m}=r,{columns:d}=Ee(),[g]=Yn(),z=u(),h=Ie(UF),G=s||z,v;if(l[0]!==t||l[1]!==g)v=emn(_(t),g),l[0]=t,l[1]=g,l[2]=v;else v=l[2];let a=v,N;fr:{if(G){let i;if(l[3]!==a)i=f(a),l[3]=a,l[4]=i;else i=l[4];N=i;break fr}let i;if(l[5]!==d||l[6]!==a||l[7]!==h)i=f(Rpr(a,d,h)),l[5]=d,l[6]=a,l[7]=h,l[8]=i;else i=l[8];N=i}let R=N,x=o?"error":m?"warning":void 0,i;if(l[9]!==R)i=e(Zr,{children:R}),l[9]=R,l[10]=i;else i=l[10];let E;if(l[11]!==x||l[12]!==i)E=e(Me,{children:e(n,{color:x,children:i})}),l[11]=x,l[12]=i,l[13]=E;else E=l[13];return E}function f(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{Zfn,emn,kC};
