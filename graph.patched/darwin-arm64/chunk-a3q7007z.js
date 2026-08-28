// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{we}from"./chunk-tp4v0fb4.js";import{S,V}from"./chunk-cmkfpkth.js";import{Qme}from"./chunk-4kb77se5.js";import{sn}from"./chunk-h5mmehc6.js";import{g}from"./chunk-8mr77ghb.js";import{t,Wr}from"./chunk-htcaw08y.js";import{Ie}from"./chunk-h5x3jsqp.js";import{KU}from"./chunk-a19q2hw9.js";import{vh}from"./chunk-e10pr35t.js";import{e}from"./chunk-80eepr01.js";import{fn,We,q,N}from"./chunk-5752v0zq.js";import{ken}from"./chunk-j5h9ds58.js";N();N();N();var c=fn(!1);function jEt(J){let U=g(2),{children:x}=J,E;if(U[0]!==x)E=e(c.Provider,{value:!0,children:x}),U[0]=x,U[1]=E;else E=U[1];return E}function f(){return We(c)}function C(r){try{let i=V(r),s=S(i),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return S(i,null,2)}catch{return r}}var H=1e4;function M(r){if(r.length>H)return r;return r.split(`
`).map(C).join(`
`)}var X=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,k=1e5;function WEt(r,i){if(r.length>k)return r;let s=(o)=>o.replace(X,(m)=>vh(m,void 0,{themeName:i}));if(!r.includes(Qme))return s(r);return r.split(`
`).map((o)=>o.includes(Qme)?o:s(o)).join(`
`)}function vg(mr){let p=g(14),{content:_,verbose:ar,isError:cr,isWarning:fr}=mr,{columns:b}=we(),[T]=sn(),pr=f(),y=We(KU),ur=ar||pr,I;if(p[0]!==_||p[1]!==T)I=WEt(M(_),T),p[0]=_,p[1]=T,p[2]=I;else I=p[2];let a=I,L;bb0:{if(ur){let n;if(p[3]!==a)n=u(a),p[3]=a,p[4]=n;else n=p[4];L=n;break bb0}let n;if(p[5]!==b||p[6]!==a||p[7]!==y)n=u(ken(a,b,y)),p[5]=b,p[6]=a,p[7]=y,p[8]=n;else n=p[8];L=n}let O=L,F=cr?"error":fr?"warning":void 0,n;if(p[9]!==O)n=e(Wr,{children:O}),p[9]=O,p[10]=n;else n=p[10];let j;if(p[11]!==F||p[12]!==n)j=e(Ie,{children:e(t,{color:F,children:n})}),p[11]=F,p[12]=n,p[13]=j;else j=p[13];return j}function u(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{jEt,WEt,vg};
