// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{xt}from"./chunk-h4js79s0.js";import{j8e}from"./chunk-5z5dtbrz.js";import{AJe,Cq}from"./chunk-g5cf54qm.js";import{fc,HGr,_F}from"./chunk-1e3x76ht.js";import{Je}from"./chunk-eye8byva.js";var A="tengu_temporal_nautilus",k=/[\v\f\r\x1c-\x1e\u0085\u2028\u2029](?=[^\n])/g,d=20,B=65536,E=/[\p{Zs}\u2800]/gu;function f(){return{furtherBreaks:d,inlineMarkChars:B,marksRanOut:!1}}function ape(){return Je(A,{safe:!0})}function p(r){let t=r.charCodeAt(0);return(t>=128||t===91)&&HGr(fc(r)).replace(E," ").startsWith(Cq)?r.replace("[","\uFFFD"):r}function w(r,t){let n=p(r);if(n.search(k)===-1)return[n];let e="",s=0,i=0,o=AJe;for(let{index:a}of n.matchAll(k)){let R=n.slice(s,a+1),c=h(R),u=i===0||t.furtherBreaks>0;if(i>0&&(a>=j8e||!u&&t.inlineMarkChars<=0)){t.marksRanOut=!0;break}if(c>o&&o<AJe)e=m(e),o=AJe;if(u&&i>0)t.furtherBreaks--;if(!u)t.inlineMarkChars-=Cq.length;let g=u||c+Cq.length>o;e+=`${R}${g?`
`:""}${Cq}`,o=g?AJe:o-c-Cq.length,i++,s=a+1}let l=n.slice(s);if(h(l)>o&&o<AJe)e=m(e);return`${e}${l}`.split(`
`)}function h(r){return r.length+7*xt(r,"\t")}function m(r){return`${r.slice(0,-Cq.length)}
${Cq}`}function _(r,t){return r.split(`
`).flatMap((n)=>w(n,t)).join(`
`)}function lpe(r){return ape()?_(r,f()):r}function Kze(r){if(!ape())return _F(r);let t=f(),n=_(r,t);return t.marksRanOut||_F(r)||n!==r&&_F(n)}function iDt(r){if(!ape())return r;let t=f(),n=r.lines.flatMap((e)=>e.startsWith("+")?w(e.slice(1),t).map((s)=>`+${s}`):[`${e.charAt(0)}${p(e.slice(1))}`]);return{...r,lines:n,rowsBroken:!0}}
export{ape,lpe,Kze,iDt};
