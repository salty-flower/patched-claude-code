// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Ee}from"./chunk-wk6xaq3n.js";import{S,J}from"./chunk-3wz0srxw.js";import{Por}from"./chunk-as24m2g2.js";import{Vn}from"./chunk-a8t9k6jw.js";import{w}from"./chunk-naky2abr.js";import{n,Zr}from"./chunk-behv2vm9.js";import{Ut,Re,Y,M}from"./chunk-757fgf90.js";import{Ne}from"./chunk-xh79c222.js";import{F1}from"./chunk-k7wd9dh5.js";import{nS}from"./chunk-xrdy5kza.js";import{e}from"./chunk-ne6sbmea.js";import{WTr}from"./chunk-z62gs5b2.js";M();M();M();var c=Ut(!1);function wCn(r){let s=w(2),{children:t}=r,o;if(s[0]!==t)o=e(c.Provider,{value:!0,children:t}),s[0]=t,s[1]=o;else o=s[1];return o}function u(){return Re(c)}function P(r){try{let t=J(r),s=S(t),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return S(t,null,2)}catch{return r}}var A=1e4;function b(r){if(r.length>A)return r;return r.split(`
`).map(P).join(`
`)}var C=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,I=1e5;function ECn(r,t){if(r.length>I)return r;let s=(o)=>o.replace(C,(m)=>nS(m,void 0,{themeName:t}));if(!r.includes(Por))return s(r);return r.split(`
`).map((o)=>o.includes(Por)?o:s(o)).join(`
`)}function OA(r){let l=w(14),{content:t,verbose:s,isError:o,isWarning:m}=r,{columns:d}=Ee(),[g]=Vn(),z=u(),h=Re(F1),G=s||z,O;if(l[0]!==t||l[1]!==g)O=ECn(b(t),g),l[0]=t,l[1]=g,l[2]=O;else O=l[2];let a=O,N;fr:{if(G){let i;if(l[3]!==a)i=f(a),l[3]=a,l[4]=i;else i=l[4];N=i;break fr}let i;if(l[5]!==d||l[6]!==a||l[7]!==h)i=f(WTr(a,d,h)),l[5]=d,l[6]=a,l[7]=h,l[8]=i;else i=l[8];N=i}let R=N,x=o?"error":m?"warning":void 0,i;if(l[9]!==R)i=e(Zr,{children:R}),l[9]=R,l[10]=i;else i=l[10];let v;if(l[11]!==x||l[12]!==i)v=e(Ne,{children:e(n,{color:x,children:i})}),l[11]=x,l[12]=i,l[13]=v;else v=l[13];return v}function f(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{wCn,ECn,OA};
