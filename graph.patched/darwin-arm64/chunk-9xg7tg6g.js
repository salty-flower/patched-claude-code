// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Ee}from"./chunk-e408783a.js";import{jAn}from"./chunk-m50792n2.js";import{w,X}from"./chunk-qmm87fyw.js";import{Cn}from"./chunk-zzwb5b26.js";import{b}from"./chunk-mvpw0rjp.js";import{n,Jr}from"./chunk-cskdt2sa.js";import{He}from"./chunk-8rds80r2.js";import{Dz}from"./chunk-e5fy0jq1.js";import{ly}from"./chunk-x9v5sgmt.js";import{e}from"./chunk-437ab22y.js";import{j2n}from"./chunk-1gty88gv.js";import{Qt,Ne,q,M}from"./chunk-ncc6kxz8.js";M();M();M();var c=Qt(!1);function zVt(U){let K=b(2),{children:h}=U,A;if(K[0]!==h)A=e(c.Provider,{value:!0,children:h}),K[0]=h,K[1]=A;else A=K[1];return A}function f(){return Ne(c)}function j(r){try{let i=X(r),s=w(i),t=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(t!==m)return r;return w(i,null,2)}catch{return r}}var C=1e4;function S(r){if(r.length>C)return r;return r.split(`
`).map(j).join(`
`)}var H=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function GVt(r,i){if(r.length>k)return r;let s=(t)=>t.replace(H,(m)=>ly(m,void 0,{themeName:i}));if(!r.includes(jAn))return s(r);return r.split(`
`).map((t)=>t.includes(jAn)?t:s(t)).join(`
`)}function Q_(mr){let p=b(14),{content:N,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:x}=Ee(),[_]=Cn(),pr=f(),T=Ne(Dz),ur=ar||pr,E;if(p[0]!==N||p[1]!==_)E=GVt(S(N),_),p[0]=N,p[1]=_,p[2]=E;else E=p[2];let a=E,y;bb0:{if(ur){let o;if(p[3]!==a)o=u(a),p[3]=a,p[4]=o;else o=p[4];y=o;break bb0}let o;if(p[5]!==x||p[6]!==a||p[7]!==T)o=u(j2n(a,x,T)),p[5]=x,p[6]=a,p[7]=T,p[8]=o;else o=p[8];y=o}let L=y,O=cr?"error":fr?"warning":void 0,o;if(p[9]!==L)o=e(Jr,{children:L}),p[9]=L,p[10]=o;else o=p[10];let I;if(p[11]!==O||p[12]!==o)I=e(He,{children:e(n,{color:O,children:o})}),p[11]=O,p[12]=o,p[13]=I;else I=p[13];return I}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{zVt,GVt,Q_};
