// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{we}from"./chunk-5f7qr2p0.js";import{v,V}from"./chunk-akz0cj0f.js";import{qme}from"./chunk-fcb9ddnr.js";import{sn}from"./chunk-sv07ncry.js";import{g}from"./chunk-yhctzac5.js";import{t,zr}from"./chunk-167xpx5m.js";import{Ie}from"./chunk-m3301m47.js";import{q2}from"./chunk-56nrp9ge.js";import{Sh}from"./chunk-5e1k7q48.js";import{e}from"./chunk-azctepqx.js";import{fn,ze,W,N}from"./chunk-q0z49y3j.js";import{ken}from"./chunk-hrvkymct.js";N();N();N();var c=fn(!1);function CAt(J){let U=g(2),{children:x}=J,E;if(U[0]!==x)E=e(c.Provider,{value:!0,children:x}),U[0]=x,U[1]=E;else E=U[1];return E}function f(){return ze(c)}function C(r){try{let i=V(r),s=v(i),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return v(i,null,2)}catch{return r}}var H=1e4;function F(r){if(r.length>H)return r;return r.split(`
`).map(C).join(`
`)}var X=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function xAt(r,i){if(r.length>k)return r;let s=(o)=>o.replace(X,(m)=>Sh(m,void 0,{themeName:i}));if(!r.includes(qme))return s(r);return r.split(`
`).map((o)=>o.includes(qme)?o:s(o)).join(`
`)}function Sg(mr){let p=g(14),{content:_,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:b}=we(),[T]=sn(),pr=f(),y=ze(q2),ur=ar||pr,I;if(p[0]!==_||p[1]!==T)I=xAt(F(_),T),p[0]=_,p[1]=T,p[2]=I;else I=p[2];let a=I,L;bb0:{if(ur){let n;if(p[3]!==a)n=u(a),p[3]=a,p[4]=n;else n=p[4];L=n;break bb0}let n;if(p[5]!==b||p[6]!==a||p[7]!==y)n=u(ken(a,b,y)),p[5]=b,p[6]=a,p[7]=y,p[8]=n;else n=p[8];L=n}let O=L,S=cr?"error":fr?"warning":void 0,n;if(p[9]!==O)n=e(zr,{children:O}),p[9]=O,p[10]=n;else n=p[10];let j;if(p[11]!==S||p[12]!==n)j=e(Ie,{children:e(t,{color:S,children:n})}),p[11]=S,p[12]=n,p[13]=j;else j=p[13];return j}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{CAt,xAt,Sg};
