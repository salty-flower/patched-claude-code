// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ke}from"./chunk-a4f6rv4n.js";import{b,Q}from"./chunk-gvn18sr5.js";import{Lvr}from"./chunk-8xp7pmky.js";import{rr}from"./chunk-38c5qssg.js";import{w}from"./chunk-fetrqmkr.js";import{n,_o}from"./chunk-c66e3zm1.js";import{zt,Te,X,L}from"./chunk-1mwacejt.js";import{Ne}from"./chunk-2tsvzmcb.js";import{zj}from"./chunk-pt60agn5.js";import{e}from"./chunk-mq8eg5v4.js";import{TS}from"./chunk-v64sg16v.js";import{LGr}from"./chunk-c2zw81f1.js";L();L();L();var c=zt(!1);function rFn(r){let s=w(2),{children:t}=r,o;if(s[0]!==t)o=e(c.Provider,{value:!0,children:t}),s[0]=t,s[1]=o;else o=s[1];return o}function u(){return Te(c)}function P(r){try{let t=Q(r),s=b(t),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return b(t,null,2)}catch{return r}}var A=1e4;function _(r){if(r.length>A)return r;return r.split(`
`).map(P).join(`
`)}var C=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,I=1e5;function oFn(r,t){if(r.length>I)return r;let s=(o)=>o.replace(C,(m)=>TS(m,void 0,{themeName:t}));if(!r.includes(Lvr))return s(r);return r.split(`
`).map((o)=>o.includes(Lvr)?o:s(o)).join(`
`)}function bC(r){let l=w(14),{content:t,verbose:s,isError:o,isWarning:m}=r,{columns:d}=ke(),[g]=rr(),G=u(),h=Te(zj),J=s||G,v;if(l[0]!==t||l[1]!==g)v=oFn(_(t),g),l[0]=t,l[1]=g,l[2]=v;else v=l[2];let a=v,N;pr:{if(J){let i;if(l[3]!==a)i=f(a),l[3]=a,l[4]=i;else i=l[4];N=i;break pr}let i;if(l[5]!==d||l[6]!==a||l[7]!==h)i=f(LGr(a,d,h)),l[5]=d,l[6]=a,l[7]=h,l[8]=i;else i=l[8];N=i}let R=N,x=o?"error":m?"warning":void 0,i;if(l[9]!==R)i=e(_o,{children:R}),l[9]=R,l[10]=i;else i=l[10];let E;if(l[11]!==x||l[12]!==i)E=e(Ne,{children:e(n,{color:x,children:i})}),l[11]=x,l[12]=i,l[13]=E;else E=l[13];return E}function f(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{rFn,oFn,bC};
