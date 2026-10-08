// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ke}from"./chunk-3p9mxawa.js";import{_,J}from"./chunk-p46wpkfz.js";import{Nxr}from"./chunk-c47fp7vb.js";import{cr}from"./chunk-k59vzwys.js";import{w}from"./chunk-c74pxqn1.js";import{n,ko}from"./chunk-13cxqtms.js";import{qt,Te,X,N}from"./chunk-y6zm4y48.js";import{Ne}from"./chunk-68g2wz97.js";import{ZW}from"./chunk-h60m3f3g.js";import{e}from"./chunk-efrp9dmx.js";import{LS}from"./chunk-668xeaqq.js";import{A3r}from"./chunk-cn9xccvs.js";N();N();N();var c=qt(!1);function wWn(r){let s=w(2),{children:t}=r,o;if(s[0]!==t)o=e(c.Provider,{value:!0,children:t}),s[0]=t,s[1]=o;else o=s[1];return o}function u(){return Te(c)}function P(r){try{let t=J(r),s=_(t),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return _(t,null,2)}catch{return r}}var A=1e4;function L(r){if(r.length>A)return r;return r.split(`
`).map(P).join(`
`)}var C=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,I=1e5;function vWn(r,t){if(r.length>I)return r;let s=(o)=>o.replace(C,(m)=>LS(m,void 0,{themeName:t}));if(!r.includes(Nxr))return s(r);return r.split(`
`).map((o)=>o.includes(Nxr)?o:s(o)).join(`
`)}function XC(r){let l=w(14),{content:t,verbose:s,isError:o,isWarning:m}=r,{columns:d}=ke(),[g]=cr(),G=u(),h=Te(ZW),U=s||G,v;if(l[0]!==t||l[1]!==g)v=vWn(L(t),g),l[0]=t,l[1]=g,l[2]=v;else v=l[2];let a=v,R;pr:{if(U){let i;if(l[3]!==a)i=f(a),l[3]=a,l[4]=i;else i=l[4];R=i;break pr}let i;if(l[5]!==d||l[6]!==a||l[7]!==h)i=f(A3r(a,d,h)),l[5]=d,l[6]=a,l[7]=h,l[8]=i;else i=l[8];R=i}let x=R,b=o?"error":m?"warning":void 0,i;if(l[9]!==x)i=e(ko,{children:x}),l[9]=x,l[10]=i;else i=l[10];let E;if(l[11]!==b||l[12]!==i)E=e(Ne,{children:e(n,{color:b,children:i})}),l[11]=b,l[12]=i,l[13]=E;else E=l[13];return E}function f(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{wWn,vWn,XC};
