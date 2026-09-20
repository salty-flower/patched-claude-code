// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{ve}from"./chunk-x37ns20k.js";import{VEn}from"./chunk-mdeqame7.js";import{w,X}from"./chunk-847hpqqs.js";import{An}from"./chunk-45v5a0az.js";import{S}from"./chunk-6qjhsn35.js";import{n,Jr}from"./chunk-g8n1e3fe.js";import{Ie}from"./chunk-y76r1q71.js";import{kG}from"./chunk-bvbq4x0n.js";import{e}from"./chunk-437ab22y.js";import{ay}from"./chunk-dx1feqkt.js";import{hjn}from"./chunk-xa5vhhb8.js";import{Jt,Ne,V,L}from"./chunk-cf8g1269.js";L();L();L();var c=Jt(!1);function tKt(U){let K=S(2),{children:h}=U,A;if(K[0]!==h)A=e(c.Provider,{value:!0,children:h}),K[0]=h,K[1]=A;else A=K[1];return A}function f(){return Ne(c)}function j(r){try{let i=X(r),s=w(i),t=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(t!==m)return r;return w(i,null,2)}catch{return r}}var C=1e4;function F(r){if(r.length>C)return r;return r.split(`
`).map(j).join(`
`)}var H=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function nKt(r,i){if(r.length>k)return r;let s=(t)=>t.replace(H,(m)=>ay(m,void 0,{themeName:i}));if(!r.includes(VEn))return s(r);return r.split(`
`).map((t)=>t.includes(VEn)?t:s(t)).join(`
`)}function X_(mr){let p=S(14),{content:N,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:x}=ve(),[_]=An(),pr=f(),b=Ne(kG),ur=ar||pr,E;if(p[0]!==N||p[1]!==_)E=nKt(F(N),_),p[0]=N,p[1]=_,p[2]=E;else E=p[2];let a=E,T;bb0:{if(ur){let o;if(p[3]!==a)o=u(a),p[3]=a,p[4]=o;else o=p[4];T=o;break bb0}let o;if(p[5]!==x||p[6]!==a||p[7]!==b)o=u(hjn(a,x,b)),p[5]=x,p[6]=a,p[7]=b,p[8]=o;else o=p[8];T=o}let y=T,O=cr?"error":fr?"warning":void 0,o;if(p[9]!==y)o=e(Jr,{children:y}),p[9]=y,p[10]=o;else o=p[10];let I;if(p[11]!==O||p[12]!==o)I=e(Ie,{children:e(n,{color:O,children:o})}),p[11]=O,p[12]=o,p[13]=I;else I=p[13];return I}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{tKt,nKt,X_};
