// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ve}from"./chunk-zq3940cv.js";import{_,X}from"./chunk-tdxkq523.js";import{_9r}from"./chunk-p4db44gq.js";import{vr}from"./chunk-c0bn6tna.js";import{w}from"./chunk-mjaw4h5n.js";import{n,qo}from"./chunk-t3eqa5fc.js";import{Ge}from"./chunk-9zbjbkdr.js";import{dV}from"./chunk-zst8b3v9.js";import{e}from"./chunk-q4w894bt.js";import{nE}from"./chunk-0y9b7crg.js";import{zbo}from"./chunk-8fn7bja7.js";import{Vt,ke,ee,B}from"./chunk-2txtxkxk.js";B();B();B();var c=Vt(!1);function nsr(r){let s=w(2),{children:t}=r,o;if(s[0]!==t)o=e(c.Provider,{value:!0,children:t}),s[0]=t,s[1]=o;else o=s[1];return o}function u(){return ke(c)}function M(r){try{let t=X(r),s=_(t),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return _(t,null,2)}catch{return r}}var P=1e4;function b(r){if(r.length>P)return r;return r.split(`
`).map(M).join(`
`)}var A=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,C=1e5;function rsr(r,t){if(r.length>C)return r;let s=(o)=>o.replace(A,(m)=>nE(m,void 0,{themeName:t}));if(!r.includes(_9r))return s(r);return r.split(`
`).map((o)=>o.includes(_9r)?o:s(o)).join(`
`)}function UP(r){let l=w(14),{content:t,verbose:s,isError:o,isWarning:m}=r,{columns:d}=ve(),[g]=vr(),z=u(),h=ke(dV),G=s||z,O;if(l[0]!==t||l[1]!==g)O=rsr(b(t),g),l[0]=t,l[1]=g,l[2]=O;else O=l[2];let a=O,N;ur:{if(G){let i;if(l[3]!==a)i=f(a),l[3]=a,l[4]=i;else i=l[4];N=i;break ur}let i;if(l[5]!==d||l[6]!==a||l[7]!==h)i=f(zbo(a,d,h)),l[5]=d,l[6]=a,l[7]=h,l[8]=i;else i=l[8];N=i}let R=N,x=o?"error":m?"warning":void 0,i;if(l[9]!==R)i=e(qo,{children:R}),l[9]=R,l[10]=i;else i=l[10];let v;if(l[11]!==x||l[12]!==i)v=e(Ge,{children:e(n,{color:x,children:i})}),l[11]=x,l[12]=i,l[13]=v;else v=l[13];return v}function f(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{nsr,rsr,UP};
