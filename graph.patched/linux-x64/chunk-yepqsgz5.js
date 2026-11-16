// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ce}from"./chunk-ckyg68b0.js";import{_,te}from"./chunk-ray9kegj.js";import{hQo}from"./chunk-1fpwqakg.js";import{to}from"./chunk-16cfk3bc.js";import{v}from"./chunk-mfqtr69m.js";import{n,Ei}from"./chunk-bzk3ayzm.js";import{S$}from"./chunk-jbhh68e1.js";import{Xe}from"./chunk-z6mdf8bz.js";import{e}from"./chunk-zrhzz8fw.js";import{Cw}from"./chunk-k8xvnzfb.js";import{lPs}from"./chunk-x53yyv87.js";import{rn,ve,J,j}from"./chunk-mp0bjfh5.js";j();j();j();var l=rn(!1);function jZr(t){let s=v(2),{children:r}=t,o;if(s[0]!==r)o=e(l.Provider,{value:!0,children:r}),s[0]=r,s[1]=o;else o=s[1];return o}function u(){return ve(l)}function M(t){try{let r=te(t),s=_(r),o=t.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return t;return _(r,null,2)}catch{return t}}var P=1e4;function x(t){if(t.length>P)return t;return t.split(`
`).map(M).join(`
`)}var A=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,C=1e5;function WZr(t,r){if(t.length>C)return t;let s=(o)=>o.replace(A,(m)=>Cw(m,void 0,{themeName:r}));if(!t.includes(hQo))return s(t);return t.split(`
`).map((o)=>o.includes(hQo)?o:s(o)).join(`
`)}function aN(t){let c=v(14),{content:r,verbose:s,isError:o}=t,{columns:m}=Ce(),[d]=to(),k=u(),g=ve(S$),z=s||k,F;if(c[0]!==r||c[1]!==d)F=WZr(x(r),d),c[0]=r,c[1]=d,c[2]=F;else F=c[2];let a=F,h;ct:{if(z){let i;if(c[3]!==a)i=f(a),c[3]=a,c[4]=i;else i=c[4];h=i;break ct}let i;if(c[5]!==m||c[6]!==a||c[7]!==g)i=f(lPs(a,m,g)),c[5]=m,c[6]=a,c[7]=g,c[8]=i;else i=c[8];h=i}let N=h,R=o?"error":void 0,i;if(c[9]!==N)i=e(Ei,{children:N}),c[9]=N,c[10]=i;else i=c[10];let O;if(c[11]!==R||c[12]!==i)O=e(Xe,{children:e(n,{color:R,children:i})}),c[11]=R,c[12]=i,c[13]=O;else O=c[13];return O}function f(t){return t.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{jZr,WZr,aN};
