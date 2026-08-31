// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ee}from"./chunk-eze1rwjh.js";import{S,q}from"./chunk-d0cr5d2v.js";import{Dye}from"./chunk-rwc09rdb.js";import{mn}from"./chunk-90j7vxwd.js";import{y}from"./chunk-a5ahs27a.js";import{t,oo}from"./chunk-snr8xejh.js";import{Le}from"./chunk-70qxt2tf.js";import{jz}from"./chunk-1q4734qg.js";import{Xg}from"./chunk-pn4pem1s.js";import{e}from"./chunk-ys8dsnqt.js";import{_n,ze,V,F}from"./chunk-v59pjxqq.js";import{Ain}from"./chunk-h6btyxas.js";F();F();F();var c=_n(!1);function eIt(J){let U=y(2),{children:h}=J,E;if(U[0]!==h)E=e(c.Provider,{value:!0,children:h}),U[0]=h,U[1]=E;else E=U[1];return E}function f(){return ze(c)}function C(r){try{let i=q(r),s=S(i),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return S(i,null,2)}catch{return r}}var H=1e4;function M(r){if(r.length>H)return r;return r.split(`
`).map(C).join(`
`)}var X=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function tIt(r,i){if(r.length>k)return r;let s=(o)=>o.replace(X,(m)=>Xg(m,void 0,{themeName:i}));if(!r.includes(Dye))return s(r);return r.split(`
`).map((o)=>o.includes(Dye)?o:s(o)).join(`
`)}function ry(mr){let p=y(14),{content:N,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:x}=Ee(),[_]=mn(),pr=f(),b=ze(jz),ur=ar||pr,I;if(p[0]!==N||p[1]!==_)I=tIt(M(N),_),p[0]=N,p[1]=_,p[2]=I;else I=p[2];let a=I,T;bb0:{if(ur){let n;if(p[3]!==a)n=u(a),p[3]=a,p[4]=n;else n=p[4];T=n;break bb0}let n;if(p[5]!==x||p[6]!==a||p[7]!==b)n=u(Ain(a,x,b)),p[5]=x,p[6]=a,p[7]=b,p[8]=n;else n=p[8];T=n}let L=T,O=cr?"error":fr?"warning":void 0,n;if(p[9]!==L)n=e(oo,{children:L}),p[9]=L,p[10]=n;else n=p[10];let j;if(p[11]!==O||p[12]!==n)j=e(Le,{children:e(t,{color:O,children:n})}),p[11]=O,p[12]=n,p[13]=j;else j=p[13];return j}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{eIt,tIt,ry};
