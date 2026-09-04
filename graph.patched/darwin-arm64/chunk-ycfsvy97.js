// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{we}from"./chunk-vnftkrjc.js";import{S,X}from"./chunk-84crg0gy.js";import{fSe}from"./chunk-9ge67yfx.js";import{_n}from"./chunk-88069q2j.js";import{y}from"./chunk-pqa42v56.js";import{n,Xr}from"./chunk-86a8apqx.js";import{kfn}from"./chunk-5e9qk3ys.js";import{Pe}from"./chunk-zyykz1tk.js";import{g2}from"./chunk-zcgwmqje.js";import{fh}from"./chunk-xw0eqzkd.js";import{e}from"./chunk-6ccz96s4.js";import{yn,qe,K,j}from"./chunk-8wk5q2vw.js";j();j();j();var c=yn(!1);function sOt(U){let V=y(2),{children:h}=U,A;if(V[0]!==h)A=e(c.Provider,{value:!0,children:h}),V[0]=h,V[1]=A;else A=V[1];return A}function f(){return qe(c)}function C(r){try{let i=X(r),s=S(i),t=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(t!==m)return r;return S(i,null,2)}catch{return r}}var H=1e4;function F(r){if(r.length>H)return r;return r.split(`
`).map(C).join(`
`)}var k=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,w=1e5;function aOt(r,i){if(r.length>w)return r;let s=(t)=>t.replace(k,(m)=>fh(m,void 0,{themeName:i}));if(!r.includes(fSe))return s(r);return r.split(`
`).map((t)=>t.includes(fSe)?t:s(t)).join(`
`)}function A_(mr){let p=y(14),{content:N,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:x}=we(),[_]=_n(),pr=f(),b=qe(g2),ur=ar||pr,E;if(p[0]!==N||p[1]!==_)E=aOt(F(N),_),p[0]=N,p[1]=_,p[2]=E;else E=p[2];let a=E,T;bb0:{if(ur){let o;if(p[3]!==a)o=u(a),p[3]=a,p[4]=o;else o=p[4];T=o;break bb0}let o;if(p[5]!==x||p[6]!==a||p[7]!==b)o=u(kfn(a,x,b)),p[5]=x,p[6]=a,p[7]=b,p[8]=o;else o=p[8];T=o}let L=T,O=cr?"error":fr?"warning":void 0,o;if(p[9]!==L)o=e(Xr,{children:L}),p[9]=L,p[10]=o;else o=p[10];let I;if(p[11]!==O||p[12]!==o)I=e(Pe,{children:e(n,{color:O,children:o})}),p[11]=O,p[12]=o,p[13]=I;else I=p[13];return I}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{sOt,aOt,A_};
