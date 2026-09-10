// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Se}from"./chunk-f26yn53e.js";import{b,q}from"./chunk-w930ag8r.js";import{Obe}from"./chunk-hmhrmjnf.js";import{dn}from"./chunk-jc1bvqd6.js";import{y}from"./chunk-hshe4789.js";import{n,Lr}from"./chunk-dqjxa0y4.js";import{xe}from"./chunk-8ygqkjr3.js";import{G2}from"./chunk-nbynf1t2.js";import{yh}from"./chunk-k59whyj9.js";import{e}from"./chunk-zhg3ync1.js";import{Yt,De,V,N}from"./chunk-w8p0f9k6.js";import{dgn}from"./chunk-tavwd3sq.js";N();N();N();var c=Yt(!1);function yLt(J){let U=y(2),{children:h}=J,E;if(U[0]!==h)E=e(c.Provider,{value:!0,children:h}),U[0]=h,U[1]=E;else E=U[1];return E}function f(){return De(c)}function C(r){try{let i=q(r),s=b(i),t=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(t!==m)return r;return b(i,null,2)}catch{return r}}var H=1e4;function M(r){if(r.length>H)return r;return r.split(`
`).map(C).join(`
`)}var X=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function _Lt(r,i){if(r.length>k)return r;let s=(t)=>t.replace(X,(m)=>yh(m,void 0,{themeName:i}));if(!r.includes(Obe))return s(r);return r.split(`
`).map((t)=>t.includes(Obe)?t:s(t)).join(`
`)}function Ty(mr){let p=y(14),{content:x,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:_}=Se(),[T]=dn(),pr=f(),L=De(G2),ur=ar||pr,I;if(p[0]!==x||p[1]!==T)I=_Lt(M(x),T),p[0]=x,p[1]=T,p[2]=I;else I=p[2];let a=I,O;bb0:{if(ur){let o;if(p[3]!==a)o=u(a),p[3]=a,p[4]=o;else o=p[4];O=o;break bb0}let o;if(p[5]!==_||p[6]!==a||p[7]!==L)o=u(dgn(a,_,L)),p[5]=_,p[6]=a,p[7]=L,p[8]=o;else o=p[8];O=o}let S=O,F=cr?"error":fr?"warning":void 0,o;if(p[9]!==S)o=e(Lr,{children:S}),p[9]=S,p[10]=o;else o=p[10];let j;if(p[11]!==F||p[12]!==o)j=e(xe,{children:e(n,{color:F,children:o})}),p[11]=F,p[12]=o,p[13]=j;else j=p[13];return j}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{yLt,_Lt,Ty};
