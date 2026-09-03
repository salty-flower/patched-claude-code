// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{we}from"./chunk-zvbtt3p1.js";import{S,K}from"./chunk-t2jwg94b.js";import{wbe}from"./chunk-h78yr9fc.js";import{gn}from"./chunk-h6bdhjfh.js";import{_}from"./chunk-0jrfbepr.js";import{n,Kr}from"./chunk-t50adtrb.js";import{Mun}from"./chunk-darxmw8c.js";import{Ie}from"./chunk-6yybdx8w.js";import{XB}from"./chunk-n3vt84pp.js";import{uh}from"./chunk-6z4cjrsz.js";import{e}from"./chunk-v5r13aq1.js";import{hn,Ge,z,j}from"./chunk-xyxaqzpf.js";j();j();j();var c=hn(!1);function tIt(U){let V=_(2),{children:h}=U,A;if(V[0]!==h)A=e(c.Provider,{value:!0,children:h}),V[0]=h,V[1]=A;else A=V[1];return A}function f(){return Ge(c)}function C(r){try{let i=K(r),s=S(i),t=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(t!==m)return r;return S(i,null,2)}catch{return r}}var H=1e4;function F(r){if(r.length>H)return r;return r.split(`
`).map(C).join(`
`)}var X=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function nIt(r,i){if(r.length>k)return r;let s=(t)=>t.replace(X,(m)=>uh(m,void 0,{themeName:i}));if(!r.includes(wbe))return s(r);return r.split(`
`).map((t)=>t.includes(wbe)?t:s(t)).join(`
`)}function __(mr){let p=_(14),{content:N,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:x}=we(),[b]=gn(),pr=f(),T=Ge(XB),ur=ar||pr,E;if(p[0]!==N||p[1]!==b)E=nIt(F(N),b),p[0]=N,p[1]=b,p[2]=E;else E=p[2];let a=E,y;bb0:{if(ur){let o;if(p[3]!==a)o=u(a),p[3]=a,p[4]=o;else o=p[4];y=o;break bb0}let o;if(p[5]!==x||p[6]!==a||p[7]!==T)o=u(Mun(a,x,T)),p[5]=x,p[6]=a,p[7]=T,p[8]=o;else o=p[8];y=o}let L=y,O=cr?"error":fr?"warning":void 0,o;if(p[9]!==L)o=e(Kr,{children:L}),p[9]=L,p[10]=o;else o=p[10];let I;if(p[11]!==O||p[12]!==o)I=e(Ie,{children:e(n,{color:O,children:o})}),p[11]=O,p[12]=o,p[13]=I;else I=p[13];return I}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{tIt,nIt,__};
