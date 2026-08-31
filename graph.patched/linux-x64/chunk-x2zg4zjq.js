// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{gn}from"./chunk-30zk17wm.js";import{cl}from"./chunk-j35pah18.js";import{eKe}from"./chunk-h6btyxas.js";import{y}from"./chunk-a5ahs27a.js";import{t,ut}from"./chunk-snr8xejh.js";import{RP}from"./chunk-prd7r735.js";import{e}from"./chunk-ys8dsnqt.js";import{_n,ze,F}from"./chunk-v59pjxqq.js";import{P}from"./chunk-edxkqkcr.js";import{d}from"./chunk-5nnrmmhw.js";F();import{homedir as C}from"os";import{isAbsolute as W,sep as I}from"path";import{resolve as Q,sep as k,win32 as T}from"path";function x(n){return eKe(U(n))}function U(n){let o=gn(),a=P()==="windows",r=a?T.sep:k,l=(b)=>a?b.replaceAll("/",r).toLowerCase():b,i=l(n),p=l(o);if(i.length!==n.length||p.length!==o.length)return n;if(i===p)return"";let R=p.endsWith(r)?p:p+r;return i.startsWith(R)?n.slice(R.length):n}import{isAbsolute as L,win32 as A}from"path";function m(n){if(P()==="windows")return A.isAbsolute(n)&&A.parse(n).root.length>1;return L(n)}var qtt=_n(null);function Rg(At){let h=y(9),{filePath:f,children:Ft}=At,g=ze(qtt),s=Ft??f;if(c(f)||typeof s==="string"&&c(s)){let u;if(h[0]===d)u=e(t,{dimColor:!0,children:"Path hidden (unsupported characters)"}),h[0]=u;else u=h[0];return u}let u;if(h[1]!==g||h[2]!==s)u=g!==null&&typeof s==="string"?cl(s,g):s,h[1]=g,h[2]=s,h[3]=u;else u=h[3];let w=u,V;if(h[4]!==f)V=m(f)?RP(f):null,h[4]=f,h[5]=V;else V=h[5];let S=V,O;if(h[6]!==w||h[7]!==S)O=S===null?e(t,{children:w}):e(ut,{url:S,children:w}),h[6]=w,h[7]=S,h[8]=O;else O=h[8];return O}function c(n){let o=M(n);return W(o)?x(o):eKe(o)}function M(n){if(n==="~")return C();return n.startsWith("~"+I)?C()+n.slice(1):n}
export{qtt,Rg};
