// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{a}from"./chunk-j77txbjn.js";import{O}from"./chunk-qfs4y3ww.js";import{OJn}from"./chunk-vygw078x.js";import{R2e}from"./chunk-nj97n3xc.js";import{atn}from"./chunk-567grqbk.js";import{w}from"./chunk-k8a9av7b.js";import{qat}from"./chunk-2ns1ch65.js";import{x,g,L}from"./chunk-bkksmm2y.js";import{yce}from"./chunk-jttgwnvv.js";import{T7e,l$}from"./chunk-tjxc5m71.js";import{e}from"./chunk-mq8eg5v4.js";import{_cn,put,vLt}from"./chunk-h13w5hmb.js";import{b}from"./chunk-rnxw3wwn.js";L();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function pSo(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=vLt(i);return R2e(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=g(_cn),r,o;if(t[0]===b)r=()=>put(()=>n(_cn())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];x(r,o);let m;if(t[2]!==i)m=pSo(atn(),i,OJn()),t[2]=i,t[3]=m;else m=t[3];return m}function nFn(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e(qat,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(T7e()){let d;if(m[3]!==t)d=t??l$(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(yce,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function zbs(){if(O()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{pSo,nFn,zbs};
