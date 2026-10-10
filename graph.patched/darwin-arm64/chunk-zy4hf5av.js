// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ke}from"./chunk-tz1x0g31.js";import{_,Y}from"./chunk-gyf58rwf.js";import{tLr}from"./chunk-06azbynj.js";import{hr}from"./chunk-wz8v981w.js";import{w}from"./chunk-2mxgft48.js";import{n,Do}from"./chunk-1r9zp6s1.js";import{qt,Ae,Z,N}from"./chunk-kexg5hxg.js";import{$e}from"./chunk-rrrfrwjr.js";import{PG}from"./chunk-mqffrz4s.js";import{e}from"./chunk-d5st5fww.js";import{dw}from"./chunk-199wqpfg.js";import{YQr}from"./chunk-fdehaew6.js";N();N();N();var c=qt(!1);function zKn(r){let s=w(2),{children:t}=r,o;if(s[0]!==t)o=e(c.Provider,{value:!0,children:t}),s[0]=t,s[1]=o;else o=s[1];return o}function u(){return Ae(c)}function P(r){try{let t=Y(r),s=_(t),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return _(t,null,2)}catch{return r}}var A=1e4;function L(r){if(r.length>A)return r;return r.split(`
`).map(P).join(`
`)}var C=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,I=1e5;function VKn(r,t){if(r.length>I)return r;let s=(o)=>o.replace(C,(m)=>dw(m,void 0,{themeName:t}));if(!r.includes(tLr))return s(r);return r.split(`
`).map((o)=>o.includes(tLr)?o:s(o)).join(`
`)}function tx(r){let l=w(14),{content:t,verbose:s,isError:o,isWarning:m}=r,{columns:d}=ke(),[g]=hr(),z=u(),h=Ae(PG),G=s||z,v;if(l[0]!==t||l[1]!==g)v=VKn(L(t),g),l[0]=t,l[1]=g,l[2]=v;else v=l[2];let a=v,R;fr:{if(G){let i;if(l[3]!==a)i=f(a),l[3]=a,l[4]=i;else i=l[4];R=i;break fr}let i;if(l[5]!==d||l[6]!==a||l[7]!==h)i=f(YQr(a,d,h)),l[5]=d,l[6]=a,l[7]=h,l[8]=i;else i=l[8];R=i}let x=R,b=o?"error":m?"warning":void 0,i;if(l[9]!==x)i=e(Do,{children:x}),l[9]=x,l[10]=i;else i=l[10];let E;if(l[11]!==b||l[12]!==i)E=e($e,{children:e(n,{color:b,children:i})}),l[11]=b,l[12]=i,l[13]=E;else E=l[13];return E}function f(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{zKn,VKn,tx};
