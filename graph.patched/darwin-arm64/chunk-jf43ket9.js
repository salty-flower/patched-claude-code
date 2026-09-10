// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Se}from"./chunk-ytm30pq6.js";import{b,q}from"./chunk-wbbe5mtc.js";import{xwe}from"./chunk-7fht4eya.js";import{fn}from"./chunk-cz2552wv.js";import{y}from"./chunk-jy8hazaz.js";import{n,Mr}from"./chunk-ykvaeqdn.js";import{xe}from"./chunk-hh0bp810.js";import{mj}from"./chunk-739yk78r.js";import{Th}from"./chunk-egdn7n0s.js";import{e}from"./chunk-qs39f0kj.js";import{qt,Le,G,M}from"./chunk-xgsrj7pc.js";import{Cyn}from"./chunk-e55d0yhx.js";M();M();M();var c=qt(!1);function CNt(U){let K=y(2),{children:h}=U,E;if(K[0]!==h)E=e(c.Provider,{value:!0,children:h}),K[0]=h,K[1]=E;else E=K[1];return E}function f(){return Le(c)}function C(r){try{let i=q(r),s=b(i),t=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(t!==m)return r;return b(i,null,2)}catch{return r}}var H=1e4;function F(r){if(r.length>H)return r;return r.split(`
`).map(C).join(`
`)}var X=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function TNt(r,i){if(r.length>k)return r;let s=(t)=>t.replace(X,(m)=>Th(m,void 0,{themeName:i}));if(!r.includes(xwe))return s(r);return r.split(`
`).map((t)=>t.includes(xwe)?t:s(t)).join(`
`)}function Dy(mr){let p=y(14),{content:N,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:x}=Se(),[_]=fn(),pr=f(),T=Le(mj),ur=ar||pr,I;if(p[0]!==N||p[1]!==_)I=TNt(F(N),_),p[0]=N,p[1]=_,p[2]=I;else I=p[2];let a=I,L;bb0:{if(ur){let o;if(p[3]!==a)o=u(a),p[3]=a,p[4]=o;else o=p[4];L=o;break bb0}let o;if(p[5]!==x||p[6]!==a||p[7]!==T)o=u(Cyn(a,x,T)),p[5]=x,p[6]=a,p[7]=T,p[8]=o;else o=p[8];L=o}let O=L,S=cr?"error":fr?"warning":void 0,o;if(p[9]!==O)o=e(Mr,{children:O}),p[9]=O,p[10]=o;else o=p[10];let j;if(p[11]!==S||p[12]!==o)j=e(xe,{children:e(n,{color:S,children:o})}),p[11]=S,p[12]=o,p[13]=j;else j=p[13];return j}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{CNt,TNt,Dy};
