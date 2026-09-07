// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{be}from"./chunk-vx6rcfh8.js";import{S,G}from"./chunk-5q90j22t.js";import{Y_e}from"./chunk-gk23nrwe.js";import{un}from"./chunk-8gypb3p1.js";import{_}from"./chunk-c8ey99v5.js";import{n,Br}from"./chunk-hrm5smjv.js";import{xe}from"./chunk-p3tp3g47.js";import{pB}from"./chunk-4ph8yvk2.js";import{e}from"./chunk-smtaex5n.js";import{jg}from"./chunk-8c14pykm.js";import{Jt,De,q,N}from"./chunk-jegfnmzv.js";import{zln}from"./chunk-1692k4g5.js";N();N();N();var c=Jt(!1);function h0t(U){let K=_(2),{children:h}=U,E;if(K[0]!==h)E=e(c.Provider,{value:!0,children:h}),K[0]=h,K[1]=E;else E=K[1];return E}function f(){return De(c)}function C(r){try{let i=G(r),s=S(i),t=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(t!==m)return r;return S(i,null,2)}catch{return r}}var H=1e4;function M(r){if(r.length>H)return r;return r.split(`
`).map(C).join(`
`)}var X=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function _0t(r,i){if(r.length>k)return r;let s=(t)=>t.replace(X,(m)=>jg(m,void 0,{themeName:i}));if(!r.includes(Y_e))return s(r);return r.split(`
`).map((t)=>t.includes(Y_e)?t:s(t)).join(`
`)}function n_(mr){let p=_(14),{content:x,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:b}=be(),[T]=un(),pr=f(),y=De(pB),ur=ar||pr,I;if(p[0]!==x||p[1]!==T)I=_0t(M(x),T),p[0]=x,p[1]=T,p[2]=I;else I=p[2];let a=I,L;bb0:{if(ur){let o;if(p[3]!==a)o=u(a),p[3]=a,p[4]=o;else o=p[4];L=o;break bb0}let o;if(p[5]!==b||p[6]!==a||p[7]!==y)o=u(zln(a,b,y)),p[5]=b,p[6]=a,p[7]=y,p[8]=o;else o=p[8];L=o}let O=L,F=cr?"error":fr?"warning":void 0,o;if(p[9]!==O)o=e(Br,{children:O}),p[9]=O,p[10]=o;else o=p[10];let j;if(p[11]!==F||p[12]!==o)j=e(xe,{children:e(n,{color:F,children:o})}),p[11]=F,p[12]=o,p[13]=j;else j=p[13];return j}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{h0t,_0t,n_};
