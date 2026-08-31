// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{gn}from"./chunk-38213y7h.js";import{cl}from"./chunk-870sakbg.js";import{nqe}from"./chunk-fy12d89p.js";import{_}from"./chunk-rykc5fv4.js";import{t,ut}from"./chunk-hm4dvvtr.js";import{OP}from"./chunk-cyp411sz.js";import{e}from"./chunk-wk3xnwvn.js";import{yn,We,F}from"./chunk-w6mhhrt2.js";import{D}from"./chunk-zyp65cht.js";import{d}from"./chunk-rqyyny1n.js";F();import{homedir as A}from"os";import{isAbsolute as V,sep as O}from"path";import{resolve as K,sep as y,win32 as C}from"path";function b(n){return nqe(k(n))}function k(n){let o=gn(),a=D()==="windows",r=a?C.sep:y,l=(R)=>a?R.replaceAll("/",r).toLowerCase():R,i=l(n),p=l(o);if(i.length!==n.length||p.length!==o.length)return n;if(i===p)return"";let S=p.endsWith(r)?p:p+r;return i.startsWith(S)?n.slice(S.length):n}import{isAbsolute as T,win32 as x}from"path";function m(n){if(D()==="windows")return x.isAbsolute(n)&&x.parse(n).root.length>1;return T(n)}var Ztt=yn(null);function xg(At){let h=_(9),{filePath:f,children:Ft}=At,g=We(Ztt),s=Ft??f;if(c(f)||typeof s==="string"&&c(s)){let u;if(h[0]===d)u=e(t,{dimColor:!0,children:"Path hidden (unsupported characters)"}),h[0]=u;else u=h[0];return u}let u;if(h[1]!==g||h[2]!==s)u=g!==null&&typeof s==="string"?cl(s,g):s,h[1]=g,h[2]=s,h[3]=u;else u=h[3];let P=u,U;if(h[4]!==f)U=m(f)?OP(f):null,h[4]=f,h[5]=U;else U=h[5];let w=U,L;if(h[6]!==P||h[7]!==w)L=w===null?e(t,{children:P}):e(ut,{url:w,children:P}),h[6]=P,h[7]=w,h[8]=L;else L=h[8];return L}function c(n){let o=W(n);return V(o)?b(o):nqe(o)}function W(n){if(n==="~")return A();return n.startsWith("~"+O)?A()+n.slice(1):n}
export{Ztt,xg};
