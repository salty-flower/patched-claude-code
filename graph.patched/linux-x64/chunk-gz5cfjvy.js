// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{be}from"./chunk-rk2hsayw.js";import{S,V}from"./chunk-cmg3b5hg.js";import{Ewe}from"./chunk-ggnmej7j.js";import{fn}from"./chunk-vb394hjj.js";import{y}from"./chunk-spjasdq6.js";import{n,Lr}from"./chunk-q8bwyp41.js";import{xe}from"./chunk-kx1rn64c.js";import{o2}from"./chunk-8zdgb2y3.js";import{Ah}from"./chunk-aj6w5spj.js";import{e}from"./chunk-qs39f0kj.js";import{Vt,De,G,L}from"./chunk-kt4npzgg.js";import{Qhn}from"./chunk-2byjyg85.js";L();L();L();var c=Vt(!1);function t$t(U){let K=y(2),{children:h}=U,E;if(K[0]!==h)E=e(c.Provider,{value:!0,children:h}),K[0]=h,K[1]=E;else E=K[1];return E}function f(){return De(c)}function C(r){try{let i=V(r),s=S(i),t=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(t!==m)return r;return S(i,null,2)}catch{return r}}var H=1e4;function M(r){if(r.length>H)return r;return r.split(`
`).map(C).join(`
`)}var X=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function n$t(r,i){if(r.length>k)return r;let s=(t)=>t.replace(X,(m)=>Ah(m,void 0,{themeName:i}));if(!r.includes(Ewe))return s(r);return r.split(`
`).map((t)=>t.includes(Ewe)?t:s(t)).join(`
`)}function Py(mr){let p=y(14),{content:N,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:x}=be(),[_]=fn(),pr=f(),b=De(o2),ur=ar||pr,I;if(p[0]!==N||p[1]!==_)I=n$t(M(N),_),p[0]=N,p[1]=_,p[2]=I;else I=p[2];let a=I,T;bb0:{if(ur){let o;if(p[3]!==a)o=u(a),p[3]=a,p[4]=o;else o=p[4];T=o;break bb0}let o;if(p[5]!==x||p[6]!==a||p[7]!==b)o=u(Qhn(a,x,b)),p[5]=x,p[6]=a,p[7]=b,p[8]=o;else o=p[8];T=o}let O=T,F=cr?"error":fr?"warning":void 0,o;if(p[9]!==O)o=e(Lr,{children:O}),p[9]=O,p[10]=o;else o=p[10];let j;if(p[11]!==F||p[12]!==o)j=e(xe,{children:e(n,{color:F,children:o})}),p[11]=F,p[12]=o,p[13]=j;else j=p[13];return j}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{t$t,n$t,Py};
