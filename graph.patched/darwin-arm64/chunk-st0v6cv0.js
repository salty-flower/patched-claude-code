// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ee}from"./chunk-ykk2gyhr.js";import{b,V}from"./chunk-ynzt0fm1.js";import{F_e}from"./chunk-dxy3a77e.js";import{mn}from"./chunk-08qy2y0j.js";import{_}from"./chunk-rykc5fv4.js";import{t,oo}from"./chunk-hm4dvvtr.js";import{Pe}from"./chunk-rhdx4g9g.js";import{Gj}from"./chunk-f91bk8sv.js";import{Yg}from"./chunk-td3e68df.js";import{e}from"./chunk-wk3xnwvn.js";import{yn,We,z,F}from"./chunk-w6mhhrt2.js";import{vin}from"./chunk-fy12d89p.js";F();F();F();var c=yn(!1);function a0t(U){let K=_(2),{children:h}=U,E;if(K[0]!==h)E=e(c.Provider,{value:!0,children:h}),K[0]=h,K[1]=E;else E=K[1];return E}function f(){return We(c)}function C(r){try{let i=V(r),s=b(i),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return b(i,null,2)}catch{return r}}var H=1e4;function M(r){if(r.length>H)return r;return r.split(`
`).map(C).join(`
`)}var X=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function l0t(r,i){if(r.length>k)return r;let s=(o)=>o.replace(X,(m)=>Yg(m,void 0,{themeName:i}));if(!r.includes(F_e))return s(r);return r.split(`
`).map((o)=>o.includes(F_e)?o:s(o)).join(`
`)}function i_(mr){let p=_(14),{content:N,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:x}=Ee(),[T]=mn(),pr=f(),y=We(Gj),ur=ar||pr,I;if(p[0]!==N||p[1]!==T)I=l0t(M(N),T),p[0]=N,p[1]=T,p[2]=I;else I=p[2];let a=I,L;bb0:{if(ur){let n;if(p[3]!==a)n=u(a),p[3]=a,p[4]=n;else n=p[4];L=n;break bb0}let n;if(p[5]!==x||p[6]!==a||p[7]!==y)n=u(vin(a,x,y)),p[5]=x,p[6]=a,p[7]=y,p[8]=n;else n=p[8];L=n}let O=L,S=cr?"error":fr?"warning":void 0,n;if(p[9]!==O)n=e(oo,{children:O}),p[9]=O,p[10]=n;else n=p[10];let j;if(p[11]!==S||p[12]!==n)j=e(Pe,{children:e(t,{color:S,children:n})}),p[11]=S,p[12]=n,p[13]=j;else j=p[13];return j}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{a0t,l0t,i_};
