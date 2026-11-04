// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Ae}from"./chunk-vgz7sq7p.js";import{_,ee}from"./chunk-5nh49npx.js";import{w0o}from"./chunk-qfycx4yg.js";import{jr}from"./chunk-av06jfr3.js";import{b}from"./chunk-6r9k9nrd.js";import{n,Ws}from"./chunk-v5qk8x3w.js";import{Ke}from"./chunk-2j18wt5c.js";import{cj}from"./chunk-6hvpkrdy.js";import{e}from"./chunk-6n4z8qxn.js";import{pb}from"./chunk-69ymqfen.js";import{Yts}from"./chunk-btzd0876.js";import{Qt,Ee,Q,j}from"./chunk-rt5zqm44.js";j();j();j();var l=Qt(!1);function C$r(t){let s=b(2),{children:r}=t,o;if(s[0]!==r)o=e(l.Provider,{value:!0,children:r}),s[0]=r,s[1]=o;else o=s[1];return o}function u(){return Ee(l)}function M(t){try{let r=ee(t),s=_(r),o=t.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return t;return _(r,null,2)}catch{return t}}var P=1e4;function x(t){if(t.length>P)return t;return t.split(`
`).map(M).join(`
`)}var A=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,C=1e5;function T$r(t,r){if(t.length>C)return t;let s=(o)=>o.replace(A,(m)=>pb(m,void 0,{themeName:r}));if(!t.includes(w0o))return s(t);return t.split(`
`).map((o)=>o.includes(w0o)?o:s(o)).join(`
`)}function oD(t){let c=b(14),{content:r,verbose:s,isError:o}=t,{columns:m}=Ae(),[d]=jr(),k=u(),g=Ee(cj),z=s||k,O;if(c[0]!==r||c[1]!==d)O=T$r(x(r),d),c[0]=r,c[1]=d,c[2]=O;else O=c[2];let a=O,h;ct:{if(z){let i;if(c[3]!==a)i=f(a),c[3]=a,c[4]=i;else i=c[4];h=i;break ct}let i;if(c[5]!==m||c[6]!==a||c[7]!==g)i=f(Yts(a,m,g)),c[5]=m,c[6]=a,c[7]=g,c[8]=i;else i=c[8];h=i}let N=h,R=o?"error":void 0,i;if(c[9]!==N)i=e(Ws,{children:N}),c[9]=N,c[10]=i;else i=c[10];let v;if(c[11]!==R||c[12]!==i)v=e(Ke,{children:e(n,{color:R,children:i})}),c[11]=R,c[12]=i,c[13]=v;else v=c[13];return v}function f(t){return t.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{C$r,T$r,oD};
