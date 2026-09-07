// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Se}from"./chunk-ap4kxy5z.js";import{b,W}from"./chunk-1tk5haqn.js";import{Wye}from"./chunk-et3f2ats.js";import{un}from"./chunk-qgb89med.js";import{y}from"./chunk-wdpeygc3.js";import{n,Ur}from"./chunk-bkvzfc5q.js";import{Ie}from"./chunk-x14g51v0.js";import{rU}from"./chunk-93v531c2.js";import{Bg}from"./chunk-kzanr68y.js";import{e}from"./chunk-smtaex5n.js";import{Jt,De,z,N}from"./chunk-vm1tjjym.js";import{bln}from"./chunk-y3swhsrk.js";N();N();N();var c=Jt(!1);function axt(U){let K=y(2),{children:h}=U,E;if(K[0]!==h)E=e(c.Provider,{value:!0,children:h}),K[0]=h,K[1]=E;else E=K[1];return E}function f(){return De(c)}function C(r){try{let i=W(r),s=b(i),t=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(t!==m)return r;return b(i,null,2)}catch{return r}}var H=1e4;function M(r){if(r.length>H)return r;return r.split(`
`).map(C).join(`
`)}var X=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function lxt(r,i){if(r.length>k)return r;let s=(t)=>t.replace(X,(m)=>Bg(m,void 0,{themeName:i}));if(!r.includes(Wye))return s(r);return r.split(`
`).map((t)=>t.includes(Wye)?t:s(t)).join(`
`)}function Zh(mr){let p=y(14),{content:x,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:_}=Se(),[T]=un(),pr=f(),L=De(rU),ur=ar||pr,I;if(p[0]!==x||p[1]!==T)I=lxt(M(x),T),p[0]=x,p[1]=T,p[2]=I;else I=p[2];let a=I,O;bb0:{if(ur){let o;if(p[3]!==a)o=u(a),p[3]=a,p[4]=o;else o=p[4];O=o;break bb0}let o;if(p[5]!==_||p[6]!==a||p[7]!==L)o=u(bln(a,_,L)),p[5]=_,p[6]=a,p[7]=L,p[8]=o;else o=p[8];O=o}let S=O,F=cr?"error":fr?"warning":void 0,o;if(p[9]!==S)o=e(Ur,{children:S}),p[9]=S,p[10]=o;else o=p[10];let j;if(p[11]!==F||p[12]!==o)j=e(Ie,{children:e(n,{color:F,children:o})}),p[11]=F,p[12]=o,p[13]=j;else j=p[13];return j}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{axt,lxt,Zh};
