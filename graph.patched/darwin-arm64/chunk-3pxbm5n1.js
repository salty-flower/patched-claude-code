// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{xt}from"./chunk-b5xhmzas.js";import{q9e}from"./chunk-29cd2nzs.js";import{MJe,RV}from"./chunk-7hyejpj2.js";import{Je}from"./chunk-xynpsnk2.js";import{fc,EGr,wF}from"./chunk-bf9zpnxj.js";var A="tengu_temporal_nautilus",k=/[\v\f\r\x1c-\x1e\u0085\u2028\u2029](?=[^\n])/g,d=20,B=65536,E=/[\p{Zs}\u2800]/gu;function f(){return{furtherBreaks:d,inlineMarkChars:B,marksRanOut:!1}}function hpe(){return Je(A,{safe:!0})}function p(r){let t=r.charCodeAt(0);return(t>=128||t===91)&&EGr(fc(r)).replace(E," ").startsWith(RV)?r.replace("[","\uFFFD"):r}function w(r,t){let n=p(r);if(n.search(k)===-1)return[n];let e="",s=0,i=0,o=MJe;for(let{index:a}of n.matchAll(k)){let R=n.slice(s,a+1),c=h(R),u=i===0||t.furtherBreaks>0;if(i>0&&(a>=q9e||!u&&t.inlineMarkChars<=0)){t.marksRanOut=!0;break}if(c>o&&o<MJe)e=m(e),o=MJe;if(u&&i>0)t.furtherBreaks--;if(!u)t.inlineMarkChars-=RV.length;let g=u||c+RV.length>o;e+=`${R}${g?`
`:""}${RV}`,o=g?MJe:o-c-RV.length,i++,s=a+1}let l=n.slice(s);if(h(l)>o&&o<MJe)e=m(e);return`${e}${l}`.split(`
`)}function h(r){return r.length+7*xt(r,"\t")}function m(r){return`${r.slice(0,-RV.length)}
${RV}`}function _(r,t){return r.split(`
`).flatMap((n)=>w(n,t)).join(`
`)}function gpe(r){return hpe()?_(r,f()):r}function QGe(r){if(!hpe())return wF(r);let t=f(),n=_(r,t);return t.marksRanOut||wF(r)||n!==r&&wF(n)}function dDt(r){if(!hpe())return r;let t=f(),n=r.lines.flatMap((e)=>e.startsWith("+")?w(e.slice(1),t).map((s)=>`+${s}`):[`${e.charAt(0)}${p(e.slice(1))}`]);return{...r,lines:n,rowsBroken:!0}}
export{hpe,gpe,QGe,dDt};
